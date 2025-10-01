import React, { useState, useEffect } from 'react';
import { AlertCircle, X, Wifi, WifiOff, Server, Shield } from 'lucide-react';
import { Button } from './button';

const ErrorNotification = ({ 
  error, 
  onDismiss, 
  onRetry, 
  show = false,
  autoHide = true,
  autoHideDelay = 5000 
}) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    
    if (show && autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, autoHideDelay);
      
      return () => clearTimeout(timer);
    }
  }, [show, autoHide, autoHideDelay, onDismiss]);

  if (!isVisible || !error) return null;

  const getErrorIcon = (errorType) => {
    switch (errorType) {
      case 'SESSION_EXPIRED':
      case 'UNAUTHORIZED':
        return <Shield className="h-5 w-5 text-red-500" />;
      case 'NETWORK_ERROR':
        return <WifiOff className="h-5 w-5 text-orange-500" />;
      case 'SERVER_ERROR':
        return <Server className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getErrorColor = (errorType) => {
    switch (errorType) {
      case 'SESSION_EXPIRED':
      case 'UNAUTHORIZED':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'NETWORK_ERROR':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'SERVER_ERROR':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-red-50 border-red-200 text-red-800';
    }
  };

  const getErrorMessage = (errorType) => {
    switch (errorType) {
      case 'SESSION_EXPIRED':
        return 'Your session has expired. You will be redirected to login.';
      case 'UNAUTHORIZED':
        return 'You are not authorized to perform this action.';
      case 'NETWORK_ERROR':
        return 'Network error. Please check your internet connection.';
      case 'SERVER_ERROR':
        return 'Server error. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  const errorType = error?.type || 'UNKNOWN_ERROR';
  const message = error?.message || getErrorMessage(errorType);

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md w-full mx-4 transform transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`rounded-lg border p-4 shadow-lg ${getErrorColor(errorType)}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getErrorIcon(errorType)}
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium">
              {errorType === 'SESSION_EXPIRED' ? 'Session Expired' :
               errorType === 'UNAUTHORIZED' ? 'Unauthorized Access' :
               errorType === 'NETWORK_ERROR' ? 'Connection Error' :
               errorType === 'SERVER_ERROR' ? 'Server Error' :
               'Error'}
            </h3>
            <p className="mt-1 text-sm">
              {message}
            </p>
            {onRetry && errorType !== 'SESSION_EXPIRED' && errorType !== 'UNAUTHORIZED' && (
              <div className="mt-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    onRetry();
                    setIsVisible(false);
                  }}
                  className="text-xs"
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setIsVisible(false);
                onDismiss?.();
              }}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotification;
