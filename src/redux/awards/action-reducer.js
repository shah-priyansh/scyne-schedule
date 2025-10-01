import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    endorsementEngagementsLoading: false,
    endorsementEngagements: [],
};

const awardSlice = createSlice({
    name: "awards",
    initialState,
    reducers: {
        getAwardEndorsementEngagement: (state) => {
            return {...state, endorsementEngagementsLoading: true};
        },
        getAwardEndorsementEngagementSuccess: (state, {payload}) => {
            return {...state, endorsementEngagementsLoading: false, endorsementEngagements: payload};
        },
        getAwardEndorsementEngagementError: (state) => {
            return {...state, endorsementEngagementsLoading: false, endorsementEngagements: []};
        },
    }
});

export const {
    getAwardEndorsementEngagement, getAwardEndorsementEngagementSuccess,getAwardEndorsementEngagementError,
} = awardSlice.actions;
export default awardSlice.reducer;

