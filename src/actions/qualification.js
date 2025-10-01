import conn from './connnection.js';

export const USER_QUALIFICATION_INFO = 'USER_QUALIFICATION_INFO';

export async function getAllQualificationsInfo(recordId, searchKey) { // param is account id
  const search = searchKey ? searchKey.trim() : '';

  let soql = `
    SELECT Id, Name, IssuingOrganization__c, ValidUntil__c, GPACredentialID__c,
           (SELECT Id, Name FROM Skills__r)
    FROM Qualification__c
    WHERE AccountId__c = '${recordId}'
  `;

  // Add search filter only if provided
  if (search) {
    soql += ` AND Name LIKE '%${search}%'`;
  }
  soql += ` ORDER BY CreatedDate DESC`;
  const res = await conn.query(soql);
  console.log('getAllQualificationsInfo', res)

  const qualifications = res.records.map(qualification => ({
    Id: qualification.Id,
    name: qualification.Name,
    issuingOrganization: qualification.IssuingOrganization__c,
    validUntil: qualification.ValidUntil__c,
    GPACredentialID: qualification.GPACredentialID__c,
    skills: qualification.Skills__r
      ? qualification.Skills__r.records.map(skill => ({
        Id: skill.Id,
        name: skill.Name
      }))
      : []
  }));
  console.log('getAllQualificationsInfo', qualifications);
  console.log('skills :>> ', qualifications.map((que) => que.skills));
  return {
    type: USER_QUALIFICATION_INFO,
    payload: qualifications
  };
}

getAllQualificationsInfo('001Kj00002ePEZ5IAO', 'Tes');
