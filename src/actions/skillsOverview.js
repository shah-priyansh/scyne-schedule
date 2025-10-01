import conn from './connnection.js';

export const USER_SKILLS_GROUPED = 'USER_SKILLS_GROUPED';
export const USER_SKILLS_HIERARCHY = 'USER_SKILLS_HIERARCHY';
export const ALL_ACCOUNT_BASED_ON_SKILLS = 'ALL_ACCOUNT_BASED_ON_SKILLS';
export const SKILL_OBJECTNAME = 'Skills__c';
export const PARENT_FIELD_NAME = 'ParentSkills__c';
export const USER_PROFILE_PHOTO_INFO = 'USER_PROFILE_PHOTO_INFO';// get profile photo

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
        console.log('@@picklistvalue::', picklistValues);
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

export async function getSkillsHierarchy(parentsOrSkill = [], skillName = '') {
  // Normalize inputs
  let parents = [];
  let names = [];
  if (Array.isArray(parentsOrSkill)) {
    parents = parentsOrSkill.filter(Boolean);
  } else if (typeof parentsOrSkill === 'string' && parentsOrSkill.trim()) {
    // If first arg is a string, treat it as a skill name (your Flutter case)
    names.push(parentsOrSkill.trim());
  }
  if (Array.isArray(skillName)) {
    names = names.concat(skillName.filter(Boolean));
  } else if (typeof skillName === 'string' && skillName.trim()) {
    names.push(skillName.trim());
  }
  let soql = `
    SELECT Id, Name, ParentSkills__c, AccountId__c, AccountId__r.Name
    FROM Skills__c ORDER BY CreatedDate DESC
  `;
  const conditions = [];
  if (parents.length) conditions.push(`ParentSkills__c IN (${quoteList(parents)})`);
  if (names.length) conditions.push(`Name IN (${quoteList(names)})`);
  if (conditions.length) {
    soql += ` WHERE ${conditions.join(' AND ')}`;
  }
  const res = await conn.query(soql);
  // Group by parent with totals
  // Group by parent with totals
  const parentWise = {};
  for (const skill of res.records) {
    const parent = skill.ParentSkills__c || 'Uncategorized';
    (parentWise[parent] ||= []).push({
      Id: skill.Id,
      accountId: skill.AccountId__c,
      skillId: skill.Id,
      Name: skill.AccountId__r ? skill.AccountId__r.Name : '',
      skillName: skill.Name || ''
    });
  }
  // Now group childSkills by skillName
  const parentSkills = Object.keys(parentWise).map(parent => {
    // Group childSkills by skillName using reduce
    const grouped = parentWise[parent].reduce((acc, skill) => {
      const key = skill.skillName || 'Unnamed';
      if (!acc[key]) {
        acc[key] = {
          skillName: key,
          totalCount: 0,
          records: []
        };
      }
      acc[key].records.push(skill);
      acc[key].totalCount++;
      return acc;
    }, {});
    console.log('@@grouped:::',JSON.parse(JSON.stringify( Object.values(grouped))));
    return {
      parent,
      totalCount: parentWise[parent].length,
      childSkills: Object.values(grouped) // convert back to array
    };
  });
  console.log('parentSkills=>', JSON.stringify(parentSkills));
  console.log('totalCount=>', res);
  return {
    type: USER_SKILLS_HIERARCHY,
    payload: { parentSkills }
  };
}

export async function getAllAccountBasedonSkills(parentSkill, childSkill) {
    const soql = `
    SELECT Id,ParentSkills__c, Name, AccountId__c, AccountId__r.Name,SkillProficiency__c
    FROM Skills__c
    WHERE ParentSkills__c = '${parentSkill}'
      AND Name = '${childSkill}'  ORDER BY CreatedDate DESC
  `;

    const res = await conn.query(soql);
    console.log('getAllAccountBasedonSkills' ,res);

    // collect unique account ids
  const accountIds = [...new Set(res.records.map(e => e.AccountId__c).filter(Boolean))];

  // fetch profile photo for accounts
  const photoRes = await getSkillPhoto(accountIds);
      
    const tableData = res.records.map((rec) => {

        return {
            accName: rec.AccountId__r?.Name || '',
            accId: rec.AccountId__c || '',
            proficiency: rec.SkillProficiency__c || 0,
            skillId: rec.Id || 0,
            photo: photoRes.payload[rec.AccountId__c] || null 
        };
    });
    console.log('getAllAccountBasedonSkills', tableData);
    return {
        type: ALL_ACCOUNT_BASED_ON_SKILLS,
        payload: tableData
    };
}
export async function getSkillPhoto(recordIds = []) { // param is array of account ids
  try {
    if (!Array.isArray(recordIds) || recordIds.length === 0) {
      return {
        type: USER_PROFILE_PHOTO_INFO,
        payload: {},
      };
    }

    // Step 1: Get ContentDocumentIds linked to all records
    const filterValue = recordIds.map(id => `'${id}'`).join(",");
    const linkRes = await conn.query(`
      SELECT ContentDocumentId, LinkedEntityId
      FROM ContentDocumentLink
      WHERE LinkedEntityId IN (${filterValue})
      ORDER BY SystemModstamp DESC
    `);

    if (!linkRes.records || linkRes.records.length === 0) {
      return {
        type: USER_PROFILE_PHOTO_INFO,
        payload: {},
      };
    }

    // Step 2: Build map of LinkedEntityId → profile photo
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
          downloadUrl: `/sfc/servlet.shepherd/version/download/${latestVersion.Id}`,
        };
      }
    }

    console.log('getSkillPhoto (map)', resultsMap);

    return {
      type: USER_PROFILE_PHOTO_INFO,
      payload: resultsMap,
    };
  } catch (error) {
    console.error("Error fetching profile photo:", error);
    return {
      type: USER_PROFILE_PHOTO_INFO,
      error: true,
      payload: {},
    };
  }
}



//getSkillsHierarchy();
// getSkillsHierarchy(['Frontend', 'Cloud']);
// getSkillsHierarchy('Flutter');
// getPicklistValues();
getAllAccountBasedonSkills('Backend', 'Java');

