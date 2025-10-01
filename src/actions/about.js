import conn from "./connnection.js";

export const USER_ABOUT_INFO = "USER_ABOUT_INFO";
export const USER_CONTACT_INFO = "USER_CONTACT_INFO";
export const USER_SKILLS_GROUPED = "USER_SKILLS_GROUPED";
export const USER_PROFILE_PHOTO_INFO = "USER_PROFILE_PHOTO_INFO";
export const SKILL_OBJECTNAME = 'Skills__c';
export const PARENT_FIELD_NAME = 'ParentSkills__c';

export async function getAboutInfo(userId) {
  const soql = `SELECT Id, Name, UserRole__c, UserTeam__c, ShippingAddress, Description  
                FROM Account 
                WHERE Id = '${userId}' Order By Createddate Desc`;

  const res = await conn.query(soql);

  const aboutInfo = res.records.map((abo) => ({
    Id: abo.Id,
    Name: abo.Name,
    UserRole: abo.UserRole__c,
    UserTeam: abo.UserTeam__c,
    Description: abo.Description,
    ShippingAddress: abo.ShippingAddress,
  }));

  console.log("Mapped aboutInfo:", aboutInfo);

  return {
    type: USER_ABOUT_INFO,
    payload: aboutInfo,
  };
}

export async function getContactInfo(recordId) {
  const soql = `SELECT Id, 
                       Email, Phone, 
                       LinkedIn__c, Website__c, GitHub__c, 
                       Background__c, WhatDrivesMe__c, 
                       Account.Id, Account.Started__c, Account.Tenure__c, 
                       Account.TimeZone__c, ReportsTo.Name
                FROM Contact 
                WHERE Primary_Contact__c = true 
                  AND AccountId = '${recordId}'
                  Order By Createddate Desc
                LIMIT 1`;

  const res = await conn.query(soql);
  console.log("getContactInfo", res);

  const contactInfo = res.records.map((con) => ({
    Id: con.Id,
    Email: con.Email,
    Phone: con.Phone,
    LinkedIn: con.LinkedIn__c,
    Website: con.Website__c,
    Github: con.GitHub__c,
    Background: con.Background__c,
    WhatDrivesMe: con.WhatDrivesMe__c,
    Started: con.Account.Started__c,
    Tenure: con.Account.Tenure__c,
    TimeZone: con.Account.TimeZone__c,
    ReportsTo: con.ReportsTo.Name,
  }));

  console.log("Mapped contactInfo:", contactInfo);

  return {
    type: USER_CONTACT_INFO,
    payload: contactInfo,
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

export async function getProfilePhoto(recordId) {// param is account id
try {
    // Step 1: Get ContentDocumentId(s) linked to the record
    const linkRes = await conn.query(`
      SELECT ContentDocumentId
      FROM ContentDocumentLink
      WHERE LinkedEntityId = '${recordId}'
      ORDER BY SystemModstamp DESC
      LIMIT 1
    `);
    const contentDocumentId = linkRes.records?.[0]?.ContentDocumentId;
    if (!contentDocumentId) {
      return {
        type: USER_PROFILE_PHOTO_INFO,
        payload: null, // No file linked to this record
      };
    }
    // Step 2: Get the latest ContentVersion for the document
    const versionRes = await conn.query(`
      SELECT Id, Title, VersionNumber, VersionData
      FROM ContentVersion
      WHERE ContentDocumentId = '${contentDocumentId}'
      ORDER BY CreatedDate DESC
      LIMIT 1
    `);
    const latestVersion = versionRes.records?.[0];
    if (!latestVersion) {
      return {
        type: USER_PROFILE_PHOTO_INFO,
        payload: null,
      };
    }
    // Step 3: Build download URL
    const downloadUrl = `${conn.serverUrl}/sfc/servlet.shepherd/version/download/${latestVersion.Id}`;
    const res = {
        fileName: latestVersion.Title,
        contentVersionId: latestVersion.Id,
        versionData: latestVersion.VersionData,
        contentDocumentId,
        downloadUrl
    };
  console.log('getProfilePhoto', res);
    return {
      type: USER_PROFILE_PHOTO_INFO,
      payload: res
    };
  } catch (error) {
    console.error("Error fetching profile photo:", error);
    return {
      type: USER_PROFILE_PHOTO_INFO,
      error: true,
      payload: null,
    };
  }
}

export async function getSkillsInfo(recordId) {
  const soql = `SELECT Id, Name, ParentSkills__c 
                FROM Skills__c
                WHERE AccountId__c = '${recordId}' Order By Createddate Desc`;

  const res = await conn.query(soql);
  console.log('getSkillsInfo', res);

  const parentWiseSkills = {};
  res.records.forEach(skill => {
    const parent = skill.ParentSkills__c || "Uncategorized";
    if (!parentWiseSkills[parent]) {
      parentWiseSkills[parent] = [];
    }
    parentWiseSkills[parent].push(skill.Name);
  });

  
  const parentWiseArray = Object.keys(parentWiseSkills).map(parent => ({
    Parent: parent,
    Skills: parentWiseSkills[parent]
  }));

  return {
    type: USER_SKILLS_GROUPED,  
    payload: parentWiseArray
  };
}

getAboutInfo("001Kj00002ePEZ5IAO");
getContactInfo("001Kj00002ePEZ5IAO");
getPicklistValues("001Kj00002ePEZ5IAO");
getProfilePhoto('001Kj00002ePEZ5IAO');
getSkillsInfo('001Kj00002ePEZ5IAO');