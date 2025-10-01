
import jsforce from 'jsforce/browser';
import { handleApiError, withErrorHandling, isSessionError } from './errorHandler.js';
import { logoutUrl } from './constants.js';

class ConnectionWrapper {
  constructor() {
    this.conn = new jsforce.Connection({
      instanceUrl: window.SF_INSTANCE_URL || 'https://na253.salesforce.com',
      serverUrl: window.SF_SERVER_URL || 'https://pr1750744792195.my.salesforce.com',
      sessionId: window.SF_SESSION_ID || '00DKj00000NcTHo!ARMAQCWFGtjlSwqOrzddjr9TeNliCqp4fchmVN5bKspfTnDZOM.mwBwiXdkCEVTShtBo3aUAVDa3PS7fgWpnyj1n9abXAbGu',
    });
    
    // Bind methods to maintain context
    this.query = this.query.bind(this);
    this.describe = this.describe.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.del = this.del.bind(this);
    this.retrieve = this.retrieve.bind(this);
  }


  async query(soql) {
    try {
      const result = await this.conn.query(soql);
      return result;
    } catch (error) {
      console.error('Query error:', error);
      
      // Handle session errors
      if (isSessionError(error)) {
        console.warn('Session error detected, redirecting to logout');
        // window.location.href = logoutUrl;
        return;
      }
      
      // Handle other errors
      handleApiError(error, {
        onSessionExpired: () => {
          console.warn('Session expired during query');
          // window.location.href = logoutUrl;
        },
        onUnauthorized: () => {
          console.warn('Unauthorized during query');
          // window.location.href = logoutUrl;
        }
      });
      
      throw error;
    }
  }

  async describe(sobjectType) {
    try {
      const result = await this.conn.describe(sobjectType);
      return result;
    } catch (error) {
      console.error('Describe error:', error);
      
      if (isSessionError(error)) {
        console.warn('Session error detected, redirecting to logout');
        //  window.location.href = logoutUrl;
        return;
      }
      
      handleApiError(error, {
        onSessionExpired: () => {
          console.warn('Session expired during describe');
          // window.location.href = logoutUrl;
        },
        onUnauthorized: () => {
          console.warn('Unauthorized during describe');
          // window.location.href = logoutUrl;
        }
      });
      
      throw error;
    }
  }

  /**
   * Wrapper for create method with error handling
   */
  async create(sobjectType, records) {
    try {
      const result = await this.conn.create(sobjectType, records);
      return result;
    } catch (error) {
      console.error('Create error:', error);
      
      if (isSessionError(error)) {
        console.warn('Session error detected, redirecting to logout');
        // window.location.href = logoutUrl;
        return;
      }
      
      handleApiError(error, {
        onSessionExpired: () => {
          console.warn('Session expired during create');
          // window.location.href = logoutUrl;
        },
        onUnauthorized: () => {
          console.warn('Unauthorized during create');
          // window.location.href = logoutUrl;
        }
      });
      
      throw error;
    }
  }

  /**
   * Wrapper for update method with error handling
   */
  async update(sobjectType, records) {
    try {
      const result = await this.conn.update(sobjectType, records);
      return result;
    } catch (error) {
      console.error('Update error:', error);
      
      if (isSessionError(error)) {
        console.warn('Session error detected, redirecting to logout');
        // window.location.href = logoutUrl;
        return;
      }
      
      handleApiError(error, {
        onSessionExpired: () => {
          console.warn('Session expired during update');
          // window.location.href = logoutUrl;
        },
        onUnauthorized: () => {
          console.warn('Unauthorized during update');
          // window.location.href = logoutUrl;
        }
      });
      
      throw error;
    }
  }

  /**
   * Wrapper for delete method with error handling
   */
  async del(sobjectType, ids) {
    try {
      const result = await this.conn.del(sobjectType, ids);
      return result;
    } catch (error) {
      console.error('Delete error:', error);
      
      if (isSessionError(error)) {
        console.warn('Session error detected, redirecting to logout');
        // window.location.href = logoutUrl;
        return;
      }
      
      handleApiError(error, {
        onSessionExpired: () => {
          console.warn('Session expired during delete');
          // window.location.href = logoutUrl;
        },
        onUnauthorized: () => {
          console.warn('Unauthorized during delete');
          // window.location.href = logoutUrl;
        }
      });
      
      throw error;
    }
  }

  /**
   * Wrapper for retrieve method with error handling
   */
  async retrieve(sobjectType, ids, fields) {
    try {
      const result = await this.conn.retrieve(sobjectType, ids, fields);
      return result;
    } catch (error) {
      console.error('Retrieve error:', error);
      
      if (isSessionError(error)) {
        console.warn('Session error detected, redirecting to logout');
        // window.location.href = logoutUrl;
        return;
      }
      
      handleApiError(error, {
        onSessionExpired: () => {
          console.warn('Session expired during retrieve');
          // window.location.href = logoutUrl;
        },
        onUnauthorized: () => {
          console.warn('Unauthorized during retrieve');
          //  window.location.href = logoutUrl;
        }
      });
      
      throw error;
    }
  }

  /**
   * Get the underlying connection object
   */
  getConnection() {
    return this.conn;
  }

  /**
   * Check if the connection is valid
   */
  async isConnected() {
    try {
      await this.conn.query('SELECT Id FROM User LIMIT 1');
      return true;
    } catch (error) {
      console.warn('Connection check failed:', error);
      return false;
    }
  }
}

// Create and export the wrapped connection
const wrappedConn = new ConnectionWrapper();
export default wrappedConn;
