import conn from './connnection.js' 

//GET ACCOUNT INFO
export const USER_ACCOUNT_INFO = 'USER_ACCOUNT_INFO';
export const OVERALL_COMPETENCY_INFO = 'OVERALL_COMPETENCY_INFO'; // to get all awards
export const USER_PROFILE_PHOTO_INFO = 'USER_PROFILE_PHOTO_INFO';// get profile photo
export const USER_ACTIVE_SKILLS_INFO = 'USER_ACTIVE_SKILLS_INFO'; // to get all active skills
export const USER_TOTAL_SKILLS_INFO = 'USER_TOTAL_SKILLS_INFO'; // to get all skills
export const USER_TOTAL_SKILL_POINTS_INFO = 'USER_TOTAL_SKILL_POINTS_INFO'; // to get all skills
export const USER_QUALIFICATION_INFO = 'USER_QUALIFICATION_INFO'; // to get all qualification
export const USER_AWARDS_INFO = 'USER_AWARDS_INFO'; // to get all awards
export const USER_ENDORSEMENT_INFO = 'USER_ENDORSEMENT_INFO'; // to get all awards
export const USER_TOTAL_SKILL_POINTS = 'USER_TOTAL_SKILL_POINTS'; // to get total skill points
export const USER_TIER_RANGE = 'USER_TIER_RANGE'; // to get user current tier range
export const GET_ALL_TIER = 'GET_ALL_TIER'; // to get all tiers 
export const RECEIVED = 'Received';
export const USER_AVG_SKILL_PROFICIENCY = 'USER_AVG_SKILL_PROFICIENCY'; // new action type

export async function getAccountInfo(userId) { // param is user id
  const soql = `SELECT Id, Name, Recordtype.Name, UserTeam__c,UserRole__c, BillingAddress
                  FROM Account 
                  WHERE SkillUser__c = '${userId}' ORDER BY CreatedDate DESC 
                  LIMIT 1`;

  const res = await conn.query(soql);
  console.log('getAccountInfo', JSON.stringify(res));

  return {
    type: USER_ACCOUNT_INFO,
    payload: res
  };
}
export async function getOverallCompetencyInfo(userId) { // param is user id
  const soql = `SELECT Id, Name, OverallCompetency__c
                  FROM Account 
                  WHERE SkillUser__c = '${userId}' ORDER BY CreatedDate DESC
                  LIMIT 1`;

  const res = await conn.query(soql);
  console.log('getOverallCompetencyInfo', res)

  return {
    type: OVERALL_COMPETENCY_INFO,
    payload: res
  };
}

export async function getProfilePhoto(recordIds = []) { // param is array of account ids
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
          downloadUrl: `${conn.serverUrl}/sfc/servlet.shepherd/version/download/${latestVersion.Id}`,
        };
      }
    }

    console.log('getProfilePhoto (map)', resultsMap);

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

export async function getTotalSkills(recordId) {// param is account id
  const soql = `select Id, Name , IsActive__c From Skills__c Where AccountId__c = '${recordId}' ORDER BY CreatedDate DESC `;

  const res = await conn.query(soql);
  console.log('getTotalSkills', res)

  return {
    type: USER_TOTAL_SKILLS_INFO,
    payload: res
  };
}

export async function getActiveSkills(recordId) {// param is account id 
  const soql = `select Id, Name , IsActive__c From Skills__c Where AccountId__c = '${recordId}' AND IsActive__c = true ORDER BY CreatedDate DESC `;

  const res = await conn.query(soql);
  console.log('getActiveSkills', res)

  return {
    type: USER_ACTIVE_SKILLS_INFO,
    payload: res
  };
}

export async function getQualificationInfo(recordId) { // param is account id
  const soql = `SELECT Id, Name, QualificationStartDate__c, QualificationCompletionDate__c, 
                   Grade__c
            FROM Qualification__c  WHERE AccountId__c = '${recordId}' ORDER BY CreatedDate DESC  `;

  const res = await conn.query(soql);
  console.log('getQualificationInfo', res)

  return {
    type: USER_QUALIFICATION_INFO,
    payload: res
  };
}
// export async function getAwardsInfo(recordId) { // param is account id
// const soql = `SELECT Id, Name, AwardsCompletionDate__c
//             FROM AchievedAwards__c  WHERE AccountId__c = '${recordId}'  `;

//     const res = await conn.query(soql);
//   console.log('getAwardsInfo', res)

//   return {
//     type: USER_AWARDS_INFO,
//     payload: res
//   };
// }
export async function getEndorsementInfo(recordId) { // param is account id
    try {
      const soql = `
      SELECT Id, Name, AccountId__c,AccountId__r.Name, SkillsId__r.Name, SkillsId__r.Endorsement__c, Date__c,EndorsedById__c, EndorsedById__r.Name
      FROM Endorsement__c 
      WHERE EndorseeId__c = '${recordId}' AND EngagementType__c = '${RECEIVED}'
      ORDER BY CreatedDate DESC
    `;

      const res = await conn.query(soql);
         const accountIds = [...new Set(res.records.map(e => e.EndorsedById__c).filter(Boolean))];

      // Fetch profile photo for this account only once

      const photoRes = await getProfilePhoto(accountIds); 
      
      // Single map → endorsements + photo
      const endorsements = res.records.map(e => ({
        Id: e.Id,
        name: e.Name,
        accountId: e.EndorsedById__c,
        accountName: e.EndorsedById__r ? e.EndorsedById__r.Name : null,
        skillName: e.SkillsId__r ? e.SkillsId__r.Name : null,
        endorsement: e.SkillsId__r ? e.SkillsId__r.Endorsement__c : null,
        date: e.Date__c ? e.Date__c.split("T")[0] : null,
        photo : photoRes.payload[e.EndorsedById__c] || null
      }));

      console.log("getEndorsementInfo (with photo):", endorsements);

      return {
        type: USER_ENDORSEMENT_INFO,
        payload: endorsements
      };
    } catch (error) {
      console.error("Error in getEndorsementInfo:", error);
      return {
        type: USER_ENDORSEMENT_INFO,
        error: true,
        payload: []
      };
    }
}

export async function getTotalRewardPoints(recordId) { // recordId is Account Id
  const soql = `SELECT Id, RewardPoint__c from Account where Id = '${recordId}' ORDER BY CreatedDate DESC `;

  const res = await conn.query(soql);
  console.log('res :>> ', res);
  const totalRewardPoints = res.records.length > 0 ? res.records[0].RewardPoint__c : 0;
  console.log('getTotalRewardPoints raw:', totalRewardPoints);

  return {
    type: USER_TOTAL_SKILL_POINTS,
    payload: totalRewardPoints
  };
}

export async function getTierRange(recordId) { // recordId is Account Id
  const accountSoql = `SELECT Id, RewardPoint__c FROM Account WHERE Id = '${recordId}' ORDER BY CreatedDate DESC`;
  const accRes = await conn.query(accountSoql);

  if (!accRes.records.length) {
    return {
      type: USER_TIER_RANGE,
      payload: {}
    };
  }

  const rewardPoints = accRes.records[0].RewardPoint__c;

  const awardSoql = ` SELECT Id, Name, AwardsName__c,MaxPoints__c FROM AwardsMaster__c ORDER BY MaxPoints__c ASC`;
  const awardRes = await conn.query(awardSoql);
  const awards = awardRes.records;

  let lowerAward = null;
  let higherAward = null;

  for (let a of awards) {
    if (a.MaxPoints__c <= rewardPoints) {
      lowerAward = a;
    }
    if (a.MaxPoints__c > rewardPoints && !higherAward) {
      higherAward = a;
      break;
    }
  }

  const resultMap = {
    lower: lowerAward ? {
      id: lowerAward.Id,
      name: lowerAward.AwardsName__c,
      maxPoints: lowerAward.MaxPoints__c
    } : null,
    higher: higherAward ? {
      id: higherAward.Id,
      name: higherAward.AwardsName__c,
      maxPoints: higherAward.MaxPoints__c
    } : null
  };

  console.log('Nearest awards map:',JSON.stringify(resultMap));

  return {
    type: USER_TIER_RANGE,
    payload: resultMap
  };
}

export async function getAllTiers() {
  const soql = `SELECT Id, AwardsName__c,MaxPoints__c FROM AwardsMaster__c ORDER BY MaxPoints__c ASC `;

  const res = await conn.query(soql);
  console.log('getAllTiers :>> ', res);

  const mapedData = res.records.map((rec) => {
    return {
      Id: rec.Id,
      name: rec.AwardsName__c,
      points: rec.MaxPoints__c
    };
  });
console.log('@@awards:::', JSON.stringify(mapedData));
  return {
    type: GET_ALL_TIER,
    payload: mapedData
  };
}


//Average of USER_AVG_SKILL_PROFICIENCY 

export async function getAverageSkillProficiency(recordId) {
  const soql = `
    SELECT ParentSkills__c, AVG(SkillProficiency__c) avgProficiency
    FROM Skills__c
    WHERE AccountId__c = '${recordId}' 
    GROUP BY ParentSkills__c
  `;
  const res = await conn.query(soql);

  // Build result map dynamically
  const result = {};
  res.records.forEach(r => {
    result[r.ParentSkills__c] = Math.floor(r.avgProficiency) || 0;
  });

  console.log("Dynamic Average Proficiency:>>>", result);

  return {
    type: USER_AVG_SKILL_PROFICIENCY,
    payload: result
  };
}


//getAccountInfo('005Kj00000D7HDsIAN')
 //getProfilePhoto(['001Kj00002ePEZ5IAO'])
// getOverallCompetencyInfo('005Kj00000D7HDsIAN')
// getTotalSkills('001Kj00002ePEZ5IAO')
// getActiveSkills('001Kj00002ePEZ5IAO')
//getTotalRewardPoints('001Kj00002ePEZ5IAO')
// getQualificationInfo('001Kj00002ePEZ5IAO')
// getEndorsementInfo('001Kj00002ePEZ5IAO')
 //getTierRange('001Kj00002ePEZ5IAO');
// getAllTiers();
//  getAverageSkillProficiency('001Kj00002ePEZ5IAO'); //Skill Proficiency

