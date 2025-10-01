import conn from './connnection.js';

//GET ACCOUNT INFO
export const TOTAL_SKILLS_RECORDS = 'TOTAL_SKILLS_RECORDS';
export const TOTAL_MASTERY_LEVEL = 'TOTAL_MASTERY_LEVEL';
export const AVERAGE_SKILL_SCORE = 'AVERAGE_SKILL_SCORE';
export const GET_ALL_SKILLS_INFO = 'GET_ALL_SKILLS_INFO';
export const GET_THIS_MONTH_SKILLS_COUNT = 'GET_THIS_MONTH_SKILLS_COUNT';
export const USER_SKILLS_GROUPED = 'USER_SKILLS_GROUPED';
export const ADVANCED = 'Advanced';
export const INTERMEDIATE = 'Intermediate';
export const SKILL_OBJECTNAME = 'Skills__c';
export const PARENT_FIELD_NAME = 'ParentSkills__c';

export async function getTotalSkills(recordId) { // param is account id
  const soql = `SELECT COUNT() From Skills__c Where AccountId__c = '${recordId}' ORDER BY CreatedDate DESC`;

  const res = await conn.query(soql);
  console.log('getTotalSkills', res)

  return {
    type: TOTAL_SKILLS_RECORDS,
    payload: res
  };
}

export async function getMasteryLevel(recordId) { // param is account id
  const soql = `
    SELECT Masterylevel__c, COUNT(Id) total 
    FROM Skills__c 
    WHERE AccountId__c = '${recordId}' 
      AND Masterylevel__c != null 
    GROUP BY Masterylevel__c
  `;

  const res = await conn.query(soql);
  
  let total = 0;
  let advancedCount = 0;
  let intermediateCount = 0;

  res.records.forEach(record => {
    const level = record.Masterylevel__c;
    const count = record.total || record.Total || 0;

    total += count;

    if (level === 'Advanced') {
      advancedCount += count;
    } else if (level === 'Intermediate') {
      intermediateCount += count;
    }
  });

  const payload = {
    total,
    advancedCount,
    intermediateCount
  };

  console.log('payload :>> ', payload);

  return {
    type: TOTAL_MASTERY_LEVEL,
    payload
  };
}




export async function getAverageScore(recordId) {
  // Aggregate query: get AVG, COUNT, SUM in one go
  const soql = `SELECT AVG(SkillProficiency__c) avgScore, COUNT(Id) totalSkills
    FROM Skills__c
    WHERE AccountId__c = '${recordId}' `;

  const res = await conn.query(soql);

  if (!res.records || res.records.length === 0) {
    return {
      avgScore: 0,
      totalSkills: 0,
    };
  }
  const record = res.records[0];

  const avgScoreRaw = record.avgScore || 0;
  // const totalSkillsRaw = record.totalSkills || 0;
  // Round values
  const avgScore = Number(avgScoreRaw.toFixed(2));       // 2 decimals
  // const totalSkills = Math.round(totalSkillsRaw);        // whole number

  console.log('avgScore:', avgScore);
  // Explicitly calculate percentage (same as avgScore, but clear)
  // const percentage = totalSkills > 0 ? (totalScore / totalSkills) : 0;

  console.log('Average Score %:', Math.floor(avgScore));

  return {
    type: AVERAGE_SKILL_SCORE,
    payload: {
      avgScore
    }
  };
}

/*export async function getAllSkillsInfo(recordId) { // param is account id
  const soql = `SELECT Id, Name, Masterylevel__c, Year__c, SkillProficiency__c, (SELECT Id FROM Endorsements__r), (SELECT Id FROM Certificates__r), 
(SELECT Id FROM Project__r)
    FROM Skills__c
    WHERE AccountId__c = '${recordId}'`;

  const res = await conn.query(soql);

  const skills = res.records.map(skill => ({
    id: skill.Id,
    name: skill.Name,
    masteryLevel: skill.Masterylevel__c,
    year: skill.Year__c,
    skillProficiency: skill.SkillProficiency__c,
    endorsementCount: skill.Endorsements__r ? skill.Endorsements__r.totalSize : 0,
    certificateCount: skill.Certificates__r ? skill.Certificates__r.totalSize : 0,
    projectCount: skill.Project__r ? skill.Project__r.totalSize : 0
  }));

  console.log('GET_ALL_SKILLS_INFO', skills);

  return {
    type: GET_ALL_SKILLS_INFO,
    payload: skills
  };
}*/


export async function getAllSkillsInfo(recordId, skills = [], searchText = '') { 
  // Apply parent skills filter if provided
  const skillFilter = skills && skills.length > 0
    ? `AND ParentSkills__c IN (${skills.map(s => `'${s}'`).join(',')})`
    : '';

  // Apply name search if provided
  const searchFilter = searchText && searchText.trim() !== ''
    ? `AND Name LIKE '%${searchText}%'`
    : '';

  const soql = `
    SELECT Id, Name, Masterylevel__c, Year__c, SkillProficiency__c,ParentSkills__c,
      (SELECT Id FROM Endorsements__r),
      (SELECT Id FROM Certificates__r),
      (SELECT Id FROM Project__r) 
    FROM Skills__c
    WHERE AccountId__c = '${recordId}'
    ${skillFilter}
    ${searchFilter}  ORDER BY CreatedDate DESC
  `;

  const res = await conn.query(soql);
console.log(`getAllSkillsInfo ${searchText}:>> `, res);
  const skillsData = res.records.map(skill => ({
    id: skill.Id,
    name: skill.Name,
    masteryLevel: skill.Masterylevel__c,
    year: skill.Year__c,
    skillProficiency: skill.SkillProficiency__c,
    endorsementCount: skill.Endorsements__r ? skill.Endorsements__r.totalSize : 0,
    certificateCount: skill.Certificates__r ? skill.Certificates__r.totalSize : 0,
    projectCount: skill.Projects__r ? skill.Projects__r.totalSize : 0,
    parentSkill:skill.ParentSkills__c
  }));

  console.log(
    `GET_ALL_SKILLS_INFO (filter: ${skills.length > 0 ? skills.join(', ') : 'ALL'}, search: '${searchText}')`,
    {data : skillsData,total: res.totalSize}
  );

  return {
    type: GET_ALL_SKILLS_INFO,
    payload: {data : skillsData,totalSize: res.totalSize}
  };
}



export async function getThisMonthSkillsCount(recordId) { // recordId is Account Id
    const soql =`SELECT COUNT(Id) totalRec FROM Skills__c  WHERE AccountId__c = '${recordId}' AND CreatedDate = THIS_MONTH AND CreatedDate = THIS_YEAR `;

    const res = await conn.query(soql);
    console.log('getThisMonthSkillsCount', res.records[0].totalRec);

    return {
        type: GET_THIS_MONTH_SKILLS_COUNT,
        payload: res.records[0]?.totalRec || 0
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



getTotalSkills('001Kj00002ePEZ5IAO')
getMasteryLevel('001Kj00002ePEZ5IAO')
getAverageScore('001Kj00002ePEZ5IAO')
getAllSkillsInfo('001Kj00002ePEZ5IAO')
getAllSkillsInfo('001Kj00002ePEZ5IAO', ['Backend', 'Cloud']) //test skills [Filter]
getAllSkillsInfo('001Kj00002ePEZ5IAO', ['Tools'], 'Git'); //test filter + Search
getThisMonthSkillsCount('001Kj00002ePEZ5IAO');
getPicklistValues()

