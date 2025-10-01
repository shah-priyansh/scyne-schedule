import conn from './connnection.js'

export const USER_CAREERROLE_INFO = 'USER_CAREERROLE_INFO';

export async function getCareerRoleInfo(recordId) {
  const soql = `SELECT Id ,Title__c , CompanyOrganization__c ,EmployeeType__c ,StartDate__c ,EndDate__c ,Description__c,AccountId__c
                FROM CareerRole__c 
                WHERE AccountId__c = '${recordId}' Order By StartDate__c Asc`;

  const res = await conn.query(soql);
  console.log('getCareerRoleInfo', res)
  const careerRoles = res.records.map(cr => ({
    Id: cr.Id,
    title: cr.Title__c,
    companyOrganization: cr.CompanyOrganization__c,
    employeeType: cr.EmployeeType__c,
    startDate: cr.StartDate__c
      ? new Date(cr.StartDate__c).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : null,

    endDate: cr.EndDate__c
      ? new Date(cr.EndDate__c).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : null,

    description: cr.Description__c
  }));

  console.log('Mapped CareerRole Info:', careerRoles);

  return {
    type: USER_CAREERROLE_INFO,
    payload: careerRoles
  };
}

getCareerRoleInfo('001Kj00002ePEZ5IAO')

