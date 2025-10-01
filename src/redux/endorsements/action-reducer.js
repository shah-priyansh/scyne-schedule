import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false, // Kept for backward compatibility
    totalEndorsementLoading: false,
    averageEndorsementLoading: false,
    endorsementsLoading: false,
    pendingEngagementsLoading: false,
    createEndorsementLoading: false,
    totalReceived: 0,
    totalGiven: 0,
    averageScoreReceived: 0,
    averageScoreGiven: 0,
    endorsementsGiven: [],
    endorsementsReceived: [],
    pendingEngagements: [],
    pendingEngagementsFiltered: [],
};

const endorsementsSlice = createSlice({
    name: "endorsements",
    initialState,
    reducers: {
        getTotalEndorsement: (state) => {
            return {...state, loading: true, totalEndorsementLoading: true};
        },
        getTotalEndorsementSuccess: (state, {payload}) => {
            return {...state, loading: false, totalEndorsementLoading: false, [payload.type === 'Received' ? 'totalReceived': 'totalGiven']: payload.data};
        },
        getTotalEndorsementError: (state, {payload}) => {
            return {...state, loading: false, totalEndorsementLoading: false, [payload.type === 'Received' ? 'totalReceived': 'totalGiven']: 0};
        },
        getAverageEndorsement: (state) => {
            return {...state, loading: true, averageEndorsementLoading: true};
        },
        getAverageEndorsementSuccess: (state, {payload}) => {
            return {...state, loading: false, averageEndorsementLoading: false, [payload.type === 'Received' ? 'averageScoreReceived': 'averageScoreGiven']: payload.data};
        },
        getAverageEndorsementError: (state, {payload}) => {
            return {...state, loading: false, averageEndorsementLoading: false, [payload.type === 'Received' ? 'averageScoreReceived': 'averageScoreGiven']: 0};
        },
        getEndorsement: (state) => {
            return {...state, loading: true, endorsementsLoading: true};
        },
        getEndorsementSuccess: (state, {payload}) => {
            return {...state, loading: false, endorsementsLoading: false, [payload.type === 'Received' ? 'endorsementsReceived': 'endorsementsGiven']: payload.data};
        },
        getEndorsementError: (state, {payload}) => {
            return {...state, loading: false, endorsementsLoading: false, [payload.type === 'Received' ? 'endorsementsReceived': 'endorsementsGiven']: []};
        },
        getPendingEngagements: (state) => {
            return {...state, loading: true, pendingEngagementsLoading: true};
        },
        getPendingEngagementsSuccess: (state, {payload}) => {
            return {...state, loading: false, pendingEngagementsLoading: false, pendingEngagements: payload, pendingEngagementsFiltered: payload};
        },
        getPendingEngagementsError: (state) => {
            return {...state, loading: false, pendingEngagementsLoading: false, pendingEngagements: [], pendingEngagementsFiltered: []};
        },
        getPendingEngagementsFiltered: (state, {payload}) => {
            return {...state, loading: false, pendingEngagementsFiltered: payload};
        },
        createEndorsement: (state) => {
            return {...state, loading: true, createEndorsementLoading: true};
        },
        createEndorsementSuccess: (state) => {
            return {...state, loading: false, createEndorsementLoading: false};
        },
        createEndorsementError: (state) => {
            return {...state, loading: false, createEndorsementLoading: false};
        },
    }
});

export const {
    getTotalEndorsement, getTotalEndorsementSuccess, getTotalEndorsementError,
    getAverageEndorsement, getAverageEndorsementSuccess, getAverageEndorsementError,
    getEndorsement, getEndorsementSuccess, getEndorsementError,
    getPendingEngagements, getPendingEngagementsSuccess, getPendingEngagementsError,
    getPendingEngagementsFiltered, createEndorsement, createEndorsementSuccess,createEndorsementError
} = endorsementsSlice.actions;
export default endorsementsSlice.reducer;

