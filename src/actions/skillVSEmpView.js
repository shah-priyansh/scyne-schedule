import conn from './connnection.js';

export const USER_SKILLS_HIERARCHY = 'USER_SKILLS_HIERARCHY';
export const SEARCH_ACCOUNT = 'SEARCH_ACCOUNT';
export const SKILL_OBJECTNAME = 'Skills__c';
export const PARENT_FIELD_NAME = 'ParentSkills__c';
export const PERSONACCOUNTDEVNAME = 'PersonAccount';
export const SKILL_PROFILE_PHOTO_INFO = 'SKILL_PROFILE_PHOTO_INFO';

export async function getAllAccounts(searchKey = '') {
  const search = searchKey ? searchKey.trim() : '';
  let soql = `
    SELECT Id, Name,RecordType.DeveloperName 
    FROM Account WHERE RecordType.DeveloperName = '${PERSONACCOUNTDEVNAME}'
  `;
  if (search) {
    soql += ` AND Name LIKE '%${search}%'`;
  }
   soql += ` ORDER BY CreatedDate DESC`;
  const res = await conn.query(soql);
  console.log('getAllAccounts query result:', res);

  const accountIds = res.records.map(acc => acc.Id);// collect account IDs
  const photoRes = await getSkillPhoto(accountIds); // fetch profile photos for these accounts

  const accounts = res.records.map(acc => {
    const data = {
      accId: acc.Id,
      accName: acc.Name,
      photo: photoRes.payload[acc.Id] || null
    }
    console.log('data :>> ', data);
    return data;
  });
  console.log('Mapped accounts:', accounts);
  return {
    type: SEARCH_ACCOUNT,
    payload: accounts
  };
}

export async function getPicklistValues() {
  try {
    // Describe the object
    const metadata = await conn.sobject(SKILL_OBJECTNAME).describe();

    // Find the field
    const fieldInfo = metadata.fields.find(f => f.name === PARENT_FIELD_NAME);

    if (!fieldInfo) {
      console.log(`Field ${PARENT_FIELD_NAME} not found on ${SKILL_OBJECTNAME}`);
      return [];
    }

    // Map label + value
    const picklistValues = fieldInfo.picklistValues.map(p => 
       p.value
    );

    console.log('@@picklistvalue::',picklistValues);
    
    return {
         type: 'Skill Category',
        payload: {
            parentSkills: picklistValues
        }
    };

  } catch (err) {
    console.error('Error fetching picklist values:', err);
  }
}

function escapeSOQL(str) {
    return String(str).replace(/'/g, "\\'");
}
function quoteList(arr) {
    return arr.map(s => `'${escapeSOQL(s)}'`).join(',');
}

export async function getSkillsHierarchy(parentsOrSkill = [], accName = '', skillName = '') {
  let parents = []; 

    if (Array.isArray(parentsOrSkill)) {
        parents = parentsOrSkill.filter(Boolean);
    }

    const filterValue = accName != null ? accName : '';
    const filterSkillValue = skillName != null ? skillName : '';
    let soql = `SELECT Id, Name, ParentSkills__c, AccountId__c, AccountId__r.Name, SkillProficiency__c
                  FROM Skills__c `;

    const conditions = [];
    if (parents.length) conditions.push(`ParentSkills__c IN (${quoteList(parents)})`);
    if (filterValue) conditions.push(`AccountId__r.Name LIKE '%${filterValue}%'`);
    if (filterSkillValue) conditions.push(`Name LIKE '%${filterSkillValue}%'`);

    if (conditions.length) {
        soql += ` WHERE ${conditions.join(' AND ')}`;
    }
 soql += ` ORDER BY CreatedDate DESC`;

    console.log('soql::', soql);
    const res = await conn.query(soql);
    console.log('getSkillsHierarchy', res);
    const accountIds = [...new Set(res.records.map(skill => skill.AccountId__c).filter(Boolean))];
    const photoRes = await getSkillPhoto(accountIds);

    const parentWiseSkills = {};

    res.records.forEach(skill => {
        const parent = skill.ParentSkills__c || "Uncategorized";
        const accountId = skill.AccountId__c || "NoAccount";
        const accountName = skill.AccountId__r ? skill.AccountId__r.Name : "";

        // Initialize parent if missing
        if (!parentWiseSkills[parent]) {
            parentWiseSkills[parent] = {};
        }

        // Initialize account grouping under parent
        if (!parentWiseSkills[parent][accountId]) {
            parentWiseSkills[parent][accountId] = {
                accountId,
                accountName,
                photo: photoRes.payload[accountId] || null,
                skills: []
            };
        }

        // Push skill under this parent + account
        parentWiseSkills[parent][accountId].skills.push({
            Id: skill.Id,
            SkillId: skill.Id,
            skillName: skill.Name || '',
            SkillProficiency: skill.SkillProficiency__c || ''
        });
    });

    // Convert nested object into array form
    const parentSkillArray = Object.keys(parentWiseSkills).map(parent => {
        const accountsArray = Object.values(parentWiseSkills[parent]).map(acc => ({
            accountId: acc.accountId,
            accountName: acc.accountName,
            totalSkills: acc.skills.length,
            skills: acc.skills,
            photo: acc.photo
        }));
        console.log('accountsArray :>> ', accountsArray); 

        return {
            parent,
            totalCount: accountsArray.reduce((sum, a) => sum + a.totalSkills, 0),
            accounts: accountsArray
        };
    });

    console.log('parentSkillArray :>> ', parentSkillArray);

    return {
        type: USER_SKILLS_HIERARCHY,
        payload: {
            parentSkills: parentSkillArray
        }
    };
}

export async function getSkillPhoto(recordIds = []) {
  try {
    if (!Array.isArray(recordIds) || recordIds.length === 0) {
      return {
        type: SKILL_PROFILE_PHOTO_INFO,
        payload: {},
      };
    }

    const filterValue = recordIds.map(id => `'${id}'`).join(",");
    const linkRes = await conn.query(`
      SELECT ContentDocumentId, LinkedEntityId
      FROM ContentDocumentLink
      WHERE LinkedEntityId IN (${filterValue})
      ORDER BY SystemModstamp DESC
    `);

    if (!linkRes.records || linkRes.records.length === 0) {
      return {
        type: SKILL_PROFILE_PHOTO_INFO,
        payload: {},
      };
    }

    const resultsMap = {};

    for (const link of linkRes.records) {
      const contentDocumentId = link.ContentDocumentId;
      const linkedEntityId = link.LinkedEntityId;

      const versionRes = await conn.query(`
        SELECT Id, Title, VersionNumber, VersionData
        FROM ContentVersion
        WHERE ContentDocumentId = '${contentDocumentId}'
        ORDER BY CreatedDate DESC
        LIMIT 1
      `);

      const latestVersion = versionRes.records?.[0];
      if (latestVersion) {
        resultsMap[linkedEntityId] = {
          fileName: latestVersion.Title,
          contentVersionId: latestVersion.Id,
          versionData: latestVersion.VersionData,
          contentDocumentId,
          downloadUrl: `${conn.serverUrl}/sfc/servlet.shepherd/version/download/${latestVersion.Id}`,
        };
      }
    }

    console.log('getSkillProfilePhoto (map)', resultsMap);

    return {
      type: SKILL_PROFILE_PHOTO_INFO,
      payload: resultsMap,
    };
  } catch (error) {
    console.error("Error fetching skill profile photo:", error);
    return {
      type: SKILL_PROFILE_PHOTO_INFO,
      error: true,
      payload: {},
    };
  }
}
 


getSkillsHierarchy();
getPicklistValues();
getSkillsHierarchy(['Frontend', 'Cloud'], null, null);
 getSkillsHierarchy(null,'Updated', null);
getSkillsHierarchy(null,null, 'JAVA');
getAllAccounts();
 getAllAccounts('Update');