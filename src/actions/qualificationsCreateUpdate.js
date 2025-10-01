// qualificationService.js

import conn from './connnection.js'

export const USER_ALL_SKILLS = 'USER_ALL_SKILLS';

const sampleQualification = {
  accountId: "001Kj00002ePEZ5IAO", // Salesforce Account Id
  qualificationName: "test",
  issuingOrganization: "Project Management Institute",
  startDate: "2020-01-15",
  completionDate: "2020-06-15",
  validUntil: "2025-06-15",
  gpaCredentialId: "PMP-2023-001",
  grade: "3.8/4.0",
  courseLink: "https://learnhub.org/courses/ui-ux-design-basics",
  educationLink: "https://learnhub.org",
  currency: "USD",
  skillIds: ["aA2Kj000008Xc0vKAC","aA2Kj000008XcDwKAK","aA2Kj000008XcDzKAK"] // Skills Id
};
const updateQualificationList = {
  accountId: "001Kj00002ePEZ5IAO", // Salesforce Account Id
  qualificationName: "test",
  issuingOrganization: "Project Management Institute",
  startDate: "2020-01-15",
  completionDate: "2020-06-15",
  validUntil: "2025-06-15",
  gpaCredentialId: "PMP-2023-001",
  grade: "3.8/4.0",
  courseLink: "https://learnhub.org/courses/ui-ux-design-basics",
  educationLink: "https://learnhub.org",
  currency: "USD",
  skillIds: ["aA2Kj000008Xc0vKAC","aA2Kj000008XcDwKAK"] // Skills Id
};
/**
 * Create Qualification Record
 * @param {Object} qualificationData
 */
export async function createQualification(qualificationData) {
  const payload = {
    AccountId__c: qualificationData.accountId,
    Name: qualificationData.qualificationName,
    IssuingOrganization__c: qualificationData.issuingOrganization,
    QualificationStartDate__c: qualificationData.startDate,
    QualificationCompletionDate__c: qualificationData.completionDate,
    ValidUntil__c: qualificationData.validUntil,
    GPACredentialID__c: qualificationData.gpaCredentialId,
    Grade__c: qualificationData.grade,
    CourseLink__c: qualificationData.courseLink,
    EducationLink__c: qualificationData.educationLink,
    CurrencyIsoCode: qualificationData.currency || "USD"
  };

  const ret = await conn.sobject("Qualification__c").create(payload);

  if (ret.success) {
    await updateSkillsWithQualification(qualificationData.skillIds,ret.id);
  }
  
  console.log("Created qualification id:", ret.id);
  
  return {
    type: "CREATE_QUALIFICATION",
    payload: ret
  };
}

/**
 * Update Qualification Record
 * @param {String} qualificationId
 * @param {Object} qualificationData
*/
export async function updateQualification(qualificationId, qualificationData) {
  const payload = {
    Id: qualificationId,
    Name: qualificationData.qualificationName,
    IssuingOrganization__c: qualificationData.issuingOrganization,
    QualificationStartDate__c: qualificationData.startDate,
    QualificationCompletionDate__c: qualificationData.completionDate,
    ValidUntil__c: qualificationData.validUntil,
    GPACredentialID__c: qualificationData.gpaCredentialId,
    Grade__c: qualificationData.grade,
    CourseLink__c: qualificationData.courseLink,
    EducationLink__c: qualificationData.educationLink
  };
  
  const ret = await conn.sobject("Qualification__c").update(payload);
  console.log("Updated qualification id:", ret.id);
  
  if (qualificationData.skillIds && qualificationData.skillIds.length > 0 && ret.success) {
    await updateSkillsWithQualification(qualificationData.skillIds, qualificationId);
  }
  
  return {
    type: "UPDATE_QUALIFICATION",
    payload: ret
  };
}

export async function getUserAllSkills(recordId) { // param is account id
  const soql = `SELECT Id, Name FROM Skills__c Where AccountId__c = '${recordId}' ORDER BY CreatedDate DESC`;
  
  const res = await conn.query(soql);
  console.log('getUserAllSkills', res)
  
  return {
    type: USER_ALL_SKILLS,
    payload: res
  };
}

export async function updateSkillsWithQualification(skillIds, qualificationId) {
  if (!qualificationId) {
    throw new Error("qualificationId is required to perform update");
  }
  
  // Step 1: Get all skills currently linked to this qualification
  const existingSkills = await conn.sobject("Skills__c")
  .find({ QualificationId__c: qualificationId }, "Id");
  
  const existingSkillIds = existingSkills.map(s => s.Id);
  
  let updates = [];
  
  if (!skillIds || skillIds.length === 0) {
    // Case 1: No skills provided → unlink all currently linked skills
    updates = existingSkillIds.map(skillId => ({
      Id: skillId,
      QualificationId__c: null
    }));
  } else {
    // Case 2: Some skills provided
    const skillsToUnlink = existingSkillIds.filter(id => !skillIds.includes(id));
    
    updates = [
      // Link or relink provided skills
      ...skillIds.map(skillId => ({
        Id: skillId,
        QualificationId__c: qualificationId
      })),
      // Unlink old ones
      ...skillsToUnlink.map(skillId => ({
        Id: skillId,
        QualificationId__c: null
      }))
    ];
  }
  
  if (updates.length === 0) return;
  
  // Step 2: Perform update
  const result = await conn.sobject("Skills__c").update(updates);
  console.log("Updated skills with qualification:", result);
  
  return {
    type: "UPDATE_QUALIFICATION",
    payload: result
  };
}




/* ---------------- Example Usage ---------------- */



createQualification(sampleQualification);

updateQualification('aA6Kj000000pvDfKAI', updateQualificationList);

getUserAllSkills("001Kj00002ePEZ5IAO"); // recordId is account Id
