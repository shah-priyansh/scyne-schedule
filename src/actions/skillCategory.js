import conn from './connnection.js';

export const GET_SKILLS_GROUPED_BY_PARENT = 'GET_SKILLS_GROUPED_BY_PARENT';
export const SKILL_PROFILE_PHOTO_INFO = 'SKILL_PROFILE_PHOTO_INFO';

export async function getSkillsAvgByParent() {
  const soql = `
    SELECT Id, Name, SkillProficiency__c, ParentSkills__c,
           AccountId__c, AccountId__r.Name, AccountId__r.PersonDepartment
    FROM Skills__c
    WHERE ParentSkills__c != null  ORDER BY CreatedDate DESC
  `;

  const res = await conn.query(soql);
  console.log('getSkillsAvgByParent', res);

  // collect unique account ids
  const accountIds = [...new Set(res.records.map(e => e.AccountId__c).filter(Boolean))];

  // fetch profile photo for accounts
  const photoRes = await getSkillProfilePhoto(accountIds);

  // group by ParentSkills__c
  const grouped = res.records.reduce((acc, record) => {
    const parent = record.ParentSkills__c || 'Unknown';
    if (!acc[parent]) {
      acc[parent] = { total: 0, count: 0, records: [] };
    }

    acc[parent].total += Number(record.SkillProficiency__c || 0);
    acc[parent].count += 1;
    const data = {
      Id: record.Id,
      name: record.Name,
      skillProficiency: record.SkillProficiency__c,
      parentSkill: record.ParentSkills__c,
      accountName: record.AccountId__r?.Name || null,
      department: record.AccountId__r?.PersonDepartment || null,
      photo: photoRes.payload[record.AccountId__c] || null
    }
    acc[parent].records.push(data);
    return acc;
  }, {});

  // calculate averages
  const parentAverages = Object.entries(grouped).map(([parent, data]) => {
    const avg = data.count > 0 ? data.total / data.count : 0;
    return {
      parentSkill: parent,
      average: Math.floor(avg),
      count: data.count,
      records: data.records
    };
  });

  const masterAvg =
    parentAverages.reduce((sum, p) => sum + p.average, 0) /
    (parentAverages.length || 1);

  console.log('parentAverages', parentAverages);
  console.log('masterAvg', masterAvg);
 const response = {parentAverages,
            masterAvg
    }
    console.log('@@skill response::', JSON.stringify(response));
    return {
        type: GET_SKILLS_GROUPED_BY_PARENT,
        payload: response
    };
}

//  Separate photo fetcher for Skills
export async function getSkillProfilePhoto(recordIds = []) {
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
          downloadUrl: `/sfc/servlet.shepherd/version/download/${latestVersion.Id}`,
        };
      }
    }

    console.log('getSkillProfilePhoto (map)', JSON.stringify(resultsMap));

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

getSkillsAvgByParent();
