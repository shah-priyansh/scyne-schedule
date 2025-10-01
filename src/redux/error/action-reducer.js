import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentError: null,
  errorHistory: [],
  isErrorVisible: false,
  connectionStatus: 'connected', // 'connected', 'disconnected', 'error'
  lastErrorTime: null
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.currentError = payload;
      state.isErrorVisible = true;
      state.lastErrorTime = new Date().toISOString();
      
      // Add to error history (keep last 10 errors)
      state.errorHistory.unshift({
        ...payload,
        timestamp: state.lastErrorTime
      });
      
      if (state.errorHistory.length > 10) {
        state.errorHistory = state.errorHistory.slice(0, 10);
      }
      
      // Update connection status based on error type
      if (payload.type === 'SESSION_EXPIRED' || payload.type === 'UNAUTHORIZED') {
        state.connectionStatus = 'disconnected';
      } else if (payload.type === 'NETWORK_ERROR' || payload.type === 'SERVER_ERROR') {
        state.connectionStatus = 'error';
      }
    },
    
    clearError: (state) => {
      state.currentError = null;
      state.isErrorVisible = false;
    },
    
    dismissError: (state) => {
      state.isErrorVisible = false;
    },
    
    setConnectionStatus: (state, { payload }) => {
      state.connectionStatus = payload;
    },
    
    clearErrorHistory: (state) => {
      state.errorHistory = [];
    },
    
    retryConnection: (state) => {
      state.connectionStatus = 'connected';
      state.currentError = null;
      state.isErrorVisible = false;
    }
  }
});

export const {
  setError,
  clearError,
  dismissError,
  setConnectionStatus,
  clearErrorHistory,
  retryConnection
} = errorSlice.actions;

export default errorSlice.reducer;
