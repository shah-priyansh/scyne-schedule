/**
 * Centralized error handling for API connection errors
 */

// Error types
export const ERROR_TYPES = {
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NETWORK_ERROR: 'NETWORK_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

// Error detection patterns
const ERROR_PATTERNS = {
  SESSION_EXPIRED: [
    'INVALID_SESSION_ID',
    'Session expired or invalid',
    'Session has expired',
    'Invalid session'
  ],
  UNAUTHORIZED: [
    '401',
    'Unauthorized',
    'Access denied'
  ],
  NETWORK_ERROR: [
    'Network Error',
    'Failed to fetch',
    'Connection refused',
    'Timeout'
  ],
  SERVER_ERROR: [
    '500',
    'Internal Server Error',
    'Service Unavailable'
  ]
};

/**
 * Detects the type of error based on error message or status
 * @param {Error|Object} error - The error object
 * @returns {string} - The detected error type
 */
export function detectErrorType(error) {
  const errorMessage = error?.message || error?.errorCode || error?.toString() || '';
  const statusCode = error?.statusCode || error?.status || '';
  
  // Check for session expired errors
  if (ERROR_PATTERNS.SESSION_EXPIRED.some(pattern => 
    errorMessage.includes(pattern) || statusCode === '401'
  )) {
    return ERROR_TYPES.SESSION_EXPIRED;
  }
  
  // Check for unauthorized errors
  if (ERROR_PATTERNS.UNAUTHORIZED.some(pattern => 
    errorMessage.includes(pattern) || statusCode === '401'
  )) {
    return ERROR_TYPES.UNAUTHORIZED;
  }
  
  // Check for network errors
  if (ERROR_PATTERNS.NETWORK_ERROR.some(pattern => 
    errorMessage.includes(pattern)
  )) {
    return ERROR_TYPES.NETWORK_ERROR;
  }
  
  // Check for server errors
  if (ERROR_PATTERNS.SERVER_ERROR.some(pattern => 
    errorMessage.includes(pattern) || statusCode === '500'
  )) {
    return ERROR_TYPES.SERVER_ERROR;
  }
  
  return ERROR_TYPES.UNKNOWN_ERROR;
}

/**
 * Handles different types of errors with appropriate actions
 * @param {Error|Object} error - The error object
 * @param {Function} dispatch - Redux dispatch function
 * @param {Function} onSessionExpired - Callback for session expired
 * @param {Function} onUnauthorized - Callback for unauthorized access
 * @param {Function} onNetworkError - Callback for network errors
 * @param {Function} onServerError - Callback for server errors
 */
export function handleApiError(error, {
  dispatch,
  onSessionExpired = null,
  onUnauthorized = null,
  onNetworkError = null,
  onServerError = null
} = {}) {
  const errorType = detectErrorType(error);
  
  console.error(`API Error [${errorType}]:`, error);
  
  switch (errorType) {
    case ERROR_TYPES.SESSION_EXPIRED:
      console.warn('Session expired - redirecting to logout');
      if (onSessionExpired) {
        onSessionExpired(error);
      } else {
        // Default behavior: redirect to logout
        window.location.href = '/skillmatrix/secur/logout.jsp';
      }
      break;
      
    case ERROR_TYPES.UNAUTHORIZED:
      console.warn('Unauthorized access - redirecting to logout');
      if (onUnauthorized) {
        onUnauthorized(error);
      } else {
        // Default behavior: redirect to logout
        window.location.href = '/skillmatrix/secur/logout.jsp';
      }
      break;
      
    case ERROR_TYPES.NETWORK_ERROR:
      console.warn('Network error - please check your connection');
      if (onNetworkError) {
        onNetworkError(error);
      }
      break;
      
    case ERROR_TYPES.SERVER_ERROR:
      console.warn('Server error - please try again later');
      if (onServerError) {
        onServerError(error);
      }
      break;
      
    default:
      console.warn('Unknown error occurred');
      break;
  }
  
  return errorType;
}

/**
 * Creates a wrapper for API calls with error handling
 * @param {Function} apiCall - The API function to wrap
 * @param {Object} options - Error handling options
 * @returns {Function} - Wrapped API function
 */
export function withErrorHandling(apiCall, options = {}) {
  return async (...args) => {
    try {
      return await apiCall(...args);
    } catch (error) {
      handleApiError(error, options);
      throw error; // Re-throw to maintain error flow
    }
  };
}

/**
 * Checks if an error is a session-related error
 * @param {Error|Object} error - The error object
 * @returns {boolean} - True if it's a session error
 */
export function isSessionError(error) {
  const errorType = detectErrorType(error);
  return errorType === ERROR_TYPES.SESSION_EXPIRED || errorType === ERROR_TYPES.UNAUTHORIZED;
}

/**
 * Shows user-friendly error messages
 * @param {string} errorType - The type of error
 * @returns {string} - User-friendly message
 */
export function getErrorMessage(errorType) {
  const messages = {
    [ERROR_TYPES.SESSION_EXPIRED]: 'Your session has expired. Please log in again.',
    [ERROR_TYPES.UNAUTHORIZED]: 'You are not authorized to perform this action.',
    [ERROR_TYPES.NETWORK_ERROR]: 'Network error. Please check your internet connection.',
    [ERROR_TYPES.SERVER_ERROR]: 'Server error. Please try again later.',
    [ERROR_TYPES.UNKNOWN_ERROR]: 'An unexpected error occurred. Please try again.'
  };
  
  return messages[errorType] || messages[ERROR_TYPES.UNKNOWN_ERROR];
}
