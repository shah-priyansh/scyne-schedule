import conn from './connnection.js'

export const USER_ENDORSEMENT_ENGAGEMENT = 'USER_ENDORSEMENT_ENGAGEMENT';
export const USER_TOTAL_SKILL_POINTS = 'USER_TOTAL_SKILL_POINTS';
export const USER_TIER_RANGE = 'USER_TIER_RANGE';
export const GET_ALL_TIER = 'GET_ALL_TIER';

export async function getAllEndorsementEngagement(recordId) { // recordId is Account Id
  const soql = `
    SELECT Id, 
           Endorsement__r.Name, 
           Endorsement__r.Date__c, 
           Endorsement__r.EngagementType__c,
           Endorsement__r.SkillsId__r.PointEarned__c,
           Endorsement__r.AccountId__r.Name,
           AccountId__r.TotalPoints__c
    FROM AchievedAwards__c 
    WHERE AccountId__c = '${recordId}' ORDER BY CreatedDate DESC
  `;

  const res = await conn.query(soql);

  const tableData = res.records.map((rec) => {
    const dateTime = rec.Endorsement__r?.Date__c
      ? new Date(rec.Endorsement__r.Date__c)
      : null;

    return {
      engagementWith: rec?.Endorsement__r?.AccountId__r?.Name || '',
      date: dateTime
        ? dateTime.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        : '',
      time: dateTime
        ? dateTime.toLocaleTimeString('en-US', {
            hour12: false,
            timeZone: 'Asia/Kolkata'
          })
        : '',
      engagementType: rec.Endorsement__r?.EngagementType__c || '',
      pointsEarned: rec.Endorsement__r?.SkillsId__r?.PointEarned__c || 0,
      totalPoints: rec.AccountId__r?.TotalPoints__c || 0
    };
  });

  console.log('getAllEndorsementEngagement mapped:', tableData);

  return {
    type: USER_ENDORSEMENT_ENGAGEMENT,
    payload: tableData
  };
}
 

export async function getTotalSkillPoints(recordId) { // recordId is Account Id
    const soql = `SELECT Id, RewardPoint__c from Account where Id = '${recordId}' ORDER BY CreatedDate DESC`;

    const res = await conn.query(soql);
    console.log('res :>> ', res);
    const totalSkills = res.records.length > 0 ? res.records[0].RewardPoint__c : 0;
    console.log('getTotalSkillPoints raw:', totalSkills);

    return {
        type: USER_TOTAL_SKILL_POINTS,
        payload: totalSkills
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

    const awardSoql = `
            SELECT Id, AwardsName__c, MaxPoints__c
            FROM AwardsMaster__c
            ORDER BY MaxPoints__c ASC
        `;
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

    console.log('Nearest awards map:', resultMap);

    return {
        type: USER_TIER_RANGE,
        payload: resultMap
    };
}

export async function getAllAwards() {
    const soql = `SELECT Id, AwardsName__c,MaxPoints__c FROM AwardsMaster__c ORDER BY MaxPoints__c ASC `;

    const res = await conn.query(soql);
    console.log('getAllAwards :>> ', res);

    const mapedData = res.records.map((rec) => {
        return {
            Id: rec.Id,
            name: rec.AwardsName__c
        };
    });

    return {
        type: GET_ALL_TIER,
        payload: mapedData
    };
}

getAllEndorsementEngagement('001Kj00002ePEZ5IAO');
getTotalSkillPoints('001Kj00002ePEZ5IAO');
getTierRange('001Kj00002ePEZ5IAO');
getAllAwards();