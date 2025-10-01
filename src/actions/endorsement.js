import conn from './connnection.js'

export const USER_RECEIVED_ENDORSEMENT_INFO = 'USER_RECEIVED_ENDORSEMENT_INFO';
export const USER_GIVEN_ENDORSEMENT_INFO = 'USER_GIVEN_ENDORSEMENT_INFO';
export const USER_ENDORSEMENT_RECEIVED_COUNT = 'USER_ENDORSEMENT_RECEIVED_COUNT';
export const USER_ENDORSEMENT_GIVEN_COUNT = 'USER_ENDORSEMENT_GIVEN_COUNT';
export const USER_ENDORSEMENT_ENGAGEMENT = 'USER_ENDORSEMENT_ENGAGEMENT';
export const USER_TOTAL_SKILL_POINTS = 'USER_TOTAL_SKILL_POINTS';
export const USER_ENDORSEMENT_PENDING = 'USER_ENDORSEMENT_PENDING';
export const USER_PENDING_ENDORSEMENT_INFO = 'USER_PENDING_ENDORSEMENT_INFO';
export const USER_PENDING_ENDORSEMENT_DETAILS = 'USER_PENDING_ENDORSEMENT_DETAILS';
export const THIS_MONTH_RECEVIED_ENDORSEMENT_COUNT = 'THIS_MONTH_RECEVIED_ENDORSEMENT_COUNT';
export const USER_PENDING_ENDORSEMENT_UPDATED = 'USER_PENDING_ENDORSEMENT_UPDATED';
export const USER_ENDORSEMENT_BY_SKILL = 'USER_ENDORSEMENT_BY_SKILL';
export const USER_FILTERED_ACCOUNTS = 'USER_FILTERED_ACCOUNTS';
export const USER_UPDATE_SKILL = 'USER_UPDATE_SKILL';
export const RECEIVED = 'Received'; // testing purpose  this is coming from UI
export const GIVEN = 'Given';// testing purpose  this is coming from UI
export const PENDING = 'Pending';// testing purpose  this is coming from UI
export const SKILL_OBJECTNAME = 'Skills__c';
export const PARENT_FIELD_NAME = 'ParentSkills__c';
export const USER_ENDORSE_PHOTO_INFO = ' USER_ENDORSE_PHOTO_INFO';// get profile photo


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

export async function getAllEndorsementTypeWiseInfo(recordId, type, keyword) { // recordId is Account Id
  const searchKey = keyword != null ? keyword : '';
  const filterValue = type == RECEIVED ?  `EndorseeId__c = '${recordId}'` : `EndorsedById__c = '${recordId}'`;
  const soql = `Select Id, Name, AccountId__r.Name, SkillsId__r.Name, SkillsId__r.Endorsement__c, Date__c,EndorseeId__c,EndorseeId__r.Name,EndorsedById__c,EndorsedById__r.Name  from Endorsement__c where ${filterValue} AND EngagementType__c = '${type}' AND Name LIKE '%${searchKey}%' ORDER BY CreatedDate DESC`;

  const res = await conn.query(soql);
  console.log('getAllEndorsementTypeWiseInfo', res);

   const accountIds = [...new Set(res.records.map(e => e.AccountId__c).filter(Boolean))];
   const photoRes = await getEndorsePhoto(accountIds);

  const endorsements = res.records.map(e => ({
    Id: e.Id,
    name: e.Name,
    accountName: type == RECEIVED ? e.EndorsedById__r?.Name : e.EndorseeId__r?.Name || null,
    skillName: e.SkillsId__r ? e.SkillsId__r.Name : null,
    endorsement: e.SkillsId__r ? e.SkillsId__r.Endorsement__c : null,
    date: e.Datec ? e.Date__c.split('T')[0] : null, // keep only YYYY-MM-DD
    accountId: type == RECEIVED ? e.EndorsedById__c : e.EndorseeId__c || null,
    photo : photoRes.payload[type == RECEIVED ? e.EndorsedById__c : e.EndorseeId__c || null] || null
  }));

  console.log(`getAllEndorsementTypeWiseInfo ${type} :`, endorsements);

  return {
    type: USER_RECEIVED_ENDORSEMENT_INFO,
    payload: endorsements
  };
}

export async function getTotalEndorsementTypeWiseCount(recordId, type) { // recordId is Account Id
  const filterValue = type == RECEIVED ?  `EndorseeId__c = '${recordId}'` : `EndorsedById__c = '${recordId}'`;
  const soql = `
    SELECT COUNT(Id) totalRec 
    FROM Endorsement__c 
    WHERE ${filterValue} 
      AND EngagementType__c = '${type}'
  `;

  const res = await conn.query(soql);
  console.log(`getTotalEndorsementTypeWiseCount ${type}`, res.records[0]?.totalRec || 0);

  return {
    type: USER_ENDORSEMENT_RECEIVED_COUNT,
    payload: res.records[0]?.totalRec || 0
  };
}

export async function getAverageEndorsements(recordId, type) {
  const totalSoql = `
    SELECT AccountId__c, COUNT(Id) totalEndorsements
    FROM Endorsement__c
    WHERE AccountId__c = '${recordId}'
    GROUP BY AccountId__c  
  `;
const filterValue = type == RECEIVED ?  `EndorseeId__c = '${recordId}'` : `EndorsedById__c = '${recordId}'`;
  const typeSoql = `
    SELECT AccountId__c, COUNT(Id) totalByType
    FROM Endorsement__c
    WHERE EngagementType__c = '${type}'
      AND ${filterValue}
    GROUP BY AccountId__c
  `;

  const [totalRes, typeRes] = await Promise.all([
    conn.query(totalSoql),
    conn.query(typeSoql)
  ]);

  const total = totalRes.records.length > 0 ? totalRes.records[0].totalEndorsements : 0;
  const countByType = typeRes.records.length > 0 ? typeRes.records[0].totalByType : 0;

  const percentage = total > 0 ? (countByType / total) * 100 : 0;
  console.log(`getAverageEndorsements (${type})`, Math.floor(percentage));

  return {
    type: type,
    percentage: Math.floor(percentage)
  };
}

export async function getPendingEndroseDetails(recordId) { // recordId is Skill Id
  const soql = `SELECT Id, Name, AccountId__c, AccountId__r.Name, AccountId__r.PersonDepartment, Endorsement__c, SkillProficiency__c  FROM Skills__c WHERE id = '${recordId}' ORDER BY CreatedDate DESC `;

  const res = await conn.query(soql);
  console.log('getPendingEndroseDetails', res);

  const accountIds = [...new Set(res.records.map(e => e.AccountId__c).filter(Boolean))];
   const photoRes = await getEndorsePhoto(accountIds);

  const mappedData = res.records.map(record => ({
    Id: record.Id,
    name: record.Name,
    accountId: record.AccountId__c || null,
    accountName: record.AccountId__r?.Name || null,
    personDepartment: record.AccountId__r?.PersonDepartment || null,
    endorsement: record.Endorsement__c,
    skillProficiency: record.SkillProficiency__c,
    photo: photoRes.payload[record.AccountId__c] || null  // attach photo here
  }));

  console.log('mappedData for getPendingEndroseDetails', mappedData);

  return {
    type: USER_PENDING_ENDORSEMENT_DETAILS,
    payload: mappedData
  };
}

export async function getThisMonthReceviedEndorsementCount(recordId) { // recordId is Account Id
  const soql = `SELECT COUNT(Id) totalRec FROM Endorsement__c WHERE AccountId__c = '${recordId}' And EngagementType__c = '${RECEIVED}' AND Date__c = THIS_MONTH AND Date__c = THIS_YEAR `;

  const res = await conn.query(soql);
  const totalRec = res.records[0]?.totalRec || 0; // Salesforce returns COUNT as expr0

  console.log('getThisMonthReceviedEndorsementCount', totalRec);


  return {
    type: THIS_MONTH_RECEVIED_ENDORSEMENT_COUNT,
    payload: totalRec
  };
}

export async function updatePendingEndorsement(recordId) { // recordId is Endrosment Id
  const res = await conn.sobject('Endorsement__c').update({
    Id: recordId,
    EngagementType__c: 'Given'
  });

  console.log('updatePendingEndorsement', res);

  if (res.success) {
    return {
      type: USER_PENDING_ENDORSEMENT_UPDATED,
      payload: {
        id: recordId,
        message: 'Endorsement status updated successfully.'
      }
    };
  } else {
    return {
      type: USER_PENDING_ENDORSEMENT_UPDATED,
      payload: res.errors
    };
  }
}

export async function getEndorsementsBySkills(recordId, skills, type) {
  const filterValue = skills != null && skills.length > 0
    ? skills.map(s => `'${s}'`).join(",")
    : '';
const filterRecordID = type == RECEIVED ?  `EndorseeId__c = '${recordId}'` : `EndorsedById__c = '${recordId}'`;
  const soql = `
  SELECT Id, Name, AccountId__r.Name, SkillsId__r.Name, EngagementType__c,
         SkillsId__r.Endorsement__c, Date__c, SkillsId__r.ParentSkills__c,AccountId__c
  FROM Endorsement__c
  WHERE ${filterRecordID}
    AND EngagementType__c = '${type}'
    ${filterValue ? ` AND SkillsId__r.ParentSkills__c IN (${filterValue})` : ''} ORDER BY CreatedDate DESC
`;

  console.log('soql :>> ', soql);
  const res = await conn.query(soql);

  const endorsements = res.records.map(e => ({
    Id: e.Id,
    name: e.Name,
    accountName: e.AccountId__r ? e.AccountId__r.Name : null,
    skillName: e.SkillsId__r ? e.SkillsId__r.Name : null,
    endorsement: e.SkillsId__r ? e.SkillsId__r.Endorsement__c : null,
    engagementType: e.EngagementType__c != null ? e.EngagementType__c : null,
    date: e.Date__c ? e.Date__c.split('T')[0] : null
  }));
  console.log(`getEndorsementsBySkills (${type}, skills: ${skills})`, endorsements);

  return {
    type: USER_ENDORSEMENT_BY_SKILL,
    payload: endorsements
  };
}

export async function getFilteredAccounts(searchText = '') {
  // Apply name search if provided


  const skillsRes = await conn.query(`
    SELECT Id,
           Name,
           AccountId__c,
           AccountId__r.RecordType.DeveloperName,
           AccountId__r.Name,
           (SELECT Id, EndorseeId__c, EndorsedById__c FROM Endorsements__r)
    FROM Skills__c  ORDER BY CreatedDate DESC
  `);
  const exclusionIds = new Set();
  skillsRes.records.forEach(skill => {
    if (skill.Endorsements__r && skill.Endorsements__r.records) {
      skill.Endorsements__r.records.forEach(endorsement => {
        if (endorsement.EndorseeId__c) exclusionIds.add(endorsement.EndorseeId__c);
        if (endorsement.EndorsedById__c) exclusionIds.add(endorsement.EndorsedById__c);
      });
    }
  });

  let exclusionClause = '';
  if (exclusionIds.size > 0) {
    exclusionClause = `AND Id NOT IN (${Array.from(exclusionIds).map(id => `'${id}'`).join(',')})`;
  }
   const searchNameFilter = searchText && searchText.trim() !== '' ? ` AND Name LIKE '%${searchText}%'` : '';

  const soql = `
    SELECT Id, Name, RecordType.DeveloperName
    FROM Account
    WHERE RecordType.DeveloperName = 'PersonAccount'
    AND Id IN (
        SELECT AccountId__c FROM Skills__c WHERE AccountId__c != null
    )
    ${exclusionClause}
    ${searchNameFilter} ORDER BY CreatedDate DESC
  `;

  const accountsRes = await conn.query(soql);

  const accountIds = [...new Set(accountsRes.records.map(e => e.AccountId__c).filter(Boolean))];
   const photoRes = await getEndorsePhoto(accountIds);

  const mappedData = accountsRes.records.map(account => {
    // find related skills for this account from skillsRes
    const relatedSkills = skillsRes.records
      .filter(skill => skill.AccountId__c === account.Id)
      .map(skill => ({
        skillId: skill.Id,
        skillName: skill.Name
      }));

    return {
      id: account.Id,
      name: account.Name,
      recordType: account.RecordType?.DeveloperName || null,
      skills: relatedSkills,
      photo: photoRes.payload[account.Id] || null  // attach photo here

    };
  });
  
  console.log('mappedData :>> ', JSON.stringify(mappedData, null, 2));

  return {
    type: USER_FILTERED_ACCOUNTS,
    payload: {
      exclusionIds: Array.from(exclusionIds),
      accounts: mappedData
    }
  };
}

const endorseData = {
  endorseeId: '001Kj00002dd0GfIAI', // Account id for thw endrosee Id
  endorsedById: '001Kj00002ePEZ5IAO', // Login user account id
  endorsement: 80,
  comment: 'Test comment',
  skillId: 'aA2Kj000008XbiJKAS' // Give the Skill Id
};

export async function updateSkill(recordId, endorsement) { // recordId is Skill Id
  const res = await conn.sobject('Skills__c').update({
    Id: recordId,
    Endorsement__c: endorsement
  });

  console.log('updateSkill', res);

  if (res.success) {
    return {
      type: USER_UPDATE_SKILL,
      payload: {
        id: recordId,
        message: 'Skill Endorsement updated successfully.'
      }
    };
  } else {
    return {
      type: USER_UPDATE_SKILL,
      payload: res.errors
    };
  }
}

export async function createEndorsement(endorsee) {

  const endorseeData = {
    EndorseeId__c: endorsee.endorseeId,
    EndorsedById__c: endorsee.endorsedById,
    AccountId__c:endorsee.endorsedById,
    Comment__c: endorsee.comment,
    Name:'Test Endorsement',
    SkillsId__c: endorsee.skillId || null,
    EngagementType__c: 'Given'
  };
  const ret = await conn.sobject('Endorsement__c').create(endorseeData);
  console.log('object :>> ', ret);
  if (ret.success) {
    console.log(`Endorsement created: ${ret.id}`);
    return ret.id;
  }
  throw new Error('Endorsement creation failed');
}


export async function submitEndroseWrapper(endorse) {
  try {
    await updateSkill(endorse.skillId, endorse.endorsement);

    await createEndorsement(endorse);

    console.log('Endrosment created successfully.');
  } catch (error) {
    console.error('Failed:', error);
  }
}

export async function getEndorsePhoto(recordIds = []) { // param is array of account ids
  try {
    if (!Array.isArray(recordIds) || recordIds.length === 0) {
      return {
        type:  USER_ENDORSE_PHOTO_INFO,
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
        type:  USER_ENDORSE_PHOTO_INFO,
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
          downloadUrl: `${conn.serverUrl}/sfc/servlet.shepherd/version/download/${latestVersion.Id}`,
        };
      }
    }

    console.log('getEndorsePhoto (map)', resultsMap);

    return {
      type:  USER_ENDORSE_PHOTO_INFO,
      payload: resultsMap,
    };
  } catch (error) {
    console.error("Error fetching profile photo:", error);
    return {
      type:  USER_ENDORSE_PHOTO_INFO,
      error: true,
      payload: {},
    };
  }
}



getAllEndorsementTypeWiseInfo('001Kj00002ePEZ5IAO', RECEIVED );
getAllEndorsementTypeWiseInfo('001Kj00002ePEZ5IAO', GIVEN, 'test');
getTotalEndorsementTypeWiseCount('001Kj00002ePEZ5IAO', RECEIVED);
getTotalEndorsementTypeWiseCount('001Kj00002ePEZ5IAO', GIVEN);
getAverageEndorsements('001Kj00002ePEZ5IAO', RECEIVED);
getAverageEndorsements('001Kj00002ePEZ5IAO', GIVEN);
getPendingEndroseDetails('aA2Kj000008XbiOKAS'); // recordId is Skill Id
getThisMonthReceviedEndorsementCount('001Kj00002ePEZ5IAO');
updatePendingEndorsement('aA9Kj000000cGkgKAE');
getEndorsementsBySkills('001Kj00002ePEZ5IAO', ['Frontend', 'Cloud'], RECEIVED);
getEndorsementsBySkills('001Kj00002ePEZ5IAO', ['Frontend', 'Cloud'], GIVEN);
getFilteredAccounts();
getFilteredAccounts('First Name');
submitEndroseWrapper(endorseData);
