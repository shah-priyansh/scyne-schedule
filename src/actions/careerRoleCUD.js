import conn from './connnection.js'

export const USER_CAREERROLE_INFO_CREATE = 'USER_CAREERROLE_INFO_CREATE';
export const USER_CAREERROLE_INFO_UPDATE = 'USER_CAREERROLE_INFO_UPDATE';
export const USER_CAREERROLE_INFO_DELETE = 'USER_CAREERROLE_INFO_DELETE';


export async function updateCareerRoleInformation(careerRole) {
    const res = await conn.sobject('CareerRole__c').update({
        Id: careerRole.Id,
        Title__c: careerRole.title,
        Name:careerRole.title,
        EmployeeType__c: careerRole.employeeType,
        CompanyOrganization__c: careerRole.company,
        StartDate__c: careerRole.startDate,
        EndDate__c: careerRole.isCurrent ? null : careerRole.endDate,
        Description__c: careerRole.description,
        IsCurrentlyWorking__c: careerRole.isCurrent,
    });
    console.log('updateCareerRoleInformation', res);

    if (res.success) {
        return {
            type: "USER_CAREERROLE_INFO_UPDATE",
            payload: {
                id: careerRole.Id,
                message: "CareerRole information updated successfully."
            }
        };
    } else {
        return {
            type: "USER_CAREERROLE_INFO_UPDATE",
            payload: res.errors
        };
    }
}

export async function addCareerRoleInformation(careerRole) {
    const res = await conn.sobject('CareerRole__c').create({
        Title__c: careerRole.title,
        Name:careerRole.title,
        EmployeeType__c: careerRole.employeeType,
        CompanyOrganization__c: careerRole.company,
        StartDate__c: careerRole.startDate,
        EndDate__c: careerRole.isCurrent ? null : careerRole.endDate,
        Description__c: careerRole.description,
        IsCurrentlyWorking__c: careerRole.isCurrent,
        AccountId__c: careerRole.accountId
    });

    console.log('addCareerRoleInformation', res);

    if (res.success) {
        return {
            type: "USER_CAREERROLE_INFO_CREATE",
            payload: {
                id: res.id,
                message: "Role information added successfully."
            }
        };
    } else {
        return {
            type: "USER_CAREERROLE_INFO_CREATE",
            payload: res.errors
        };
    }
}


export async function deleteCareerRoleInformation(recordId) {
    const res = await conn.sobject('CareerRole__c').delete(recordId);

    console.log('deleteCareerRoleInformation', res);

    if (res.success) {
        return {
            type: "USER_CAREERROLE_INFO_DELETE",
            payload: {
                id: recordId,
                message: "CareerRole information deleted successfully."
            }
        };
    } else {
        return {
            type: "USER_CAREERROLE_INFO_DELETE",
            payload: res.errors
        };
    }
}


updateCareerRoleInformation({
    Id: "aACKj000000kHSAOA2",
    title: "Project Manager",
    employeeType: "Half-Time",
    company: "test",
    startDate: "2024-01-01",
    endDate: "2025-01-01",  
    description: "Test",
    isCurrent: true,
    accountId: "001Kj00002ePEZ5IAO"
})
addCareerRoleInformation({
    title: "Developer",
    employeeType: "Half-Time",
    company: "test",
    startDate: "2024-01-01",
    endDate: "2025-01-01",  
    description: "Test",
    isCurrent: true,
    accountId: "001Kj00002ePEZ5IAO"
});
// deleteCareerRoleInformation("aACKj000000kHS5");

