import jsforce from 'jsforce';

const conn = new jsforce.Connection({
    instanceUrl : window.SF_INSTANCE_URL || 'https://na253.salesforce.com',
    serverUrl : window.SF_SERVER_URL || 'https://pr1750744792195.my.salesforce.com',
    sessionId : window.SF_SESSION_ID || 'SESSION_ID'
});

export default conn
