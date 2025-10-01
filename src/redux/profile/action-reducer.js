import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false, // Kept for backward compatibility
    profileLoading: false,
    updateProfileLoading: false,
    profileImageLoading: false,
    skillPointsLoading: false,
    awardsLoading: false,
    endorsementsLoading: false,
    overallCompetencyLoading: false,
    shapeChartLoading: false,
    profileInfo: null,
    profileImage: null,
    skillPoints: 0,
    awards: [],
    qualifications: [],
    endorsements: [],
    overallCompetency: null,
    myProfile: null,
    shapeChart: null,
    accountId: "001Kj00002ePEZ5IAO", // Default accountId from constants
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        getAccountInfo: (state) => {
            return {...state, loading: true};
        },
        getAccountInfoSuccess: (state, {payload}) => {
            return {...state, loading: false, profileInfo: payload};
        },
        getAccountInfoError: (state) => {
            return {...state, loading: false, profileInfo: null};
        },
        getMyProfile: (state) => {
            return {...state, loading: true, profileLoading: true};
        },
        getMyProfileSuccess: (state, {payload}) => {
            return {...state, loading: false, profileLoading: false, myProfile: payload};
        },
        getMyProfileError: (state) => {
            return {...state, loading: false, profileLoading: false, myProfile: null};
        },
        getProfileImage: (state) => {
            return {...state, loading: true, profileImageLoading: true};
        },
        getProfileImageSuccess: (state, {payload}) => {
            return {...state, loading: false, profileImageLoading: false, profileImage: payload};
        },
        getProfileImageError: (state) => {
            return {...state, loading: false, profileImageLoading: false, profileImage: null};
        },
        getSkillPoints: (state) => {
            return {...state, loading: true};
        },
        getSkillPointsSuccess: (state, {payload}) => {
            return {...state, loading: false, skillPoints: payload};
        },
        getSkillPointsError: (state) => {
            return {...state, loading: false, skillPoints: 0};
        },
        getAwards: (state) => {
            return {...state, loading: true};
        },
        getAwardsSuccess: (state, {payload}) => {
            return {...state, loading: false, awards: payload};
        },
        getAwardsError: (state) => {
            return {...state, loading: false, awards: []};
        },
        getEndorsements: (state) => {
            return {...state, loading: true};
        },
        getEndorsementsSuccess: (state, {payload}) => {
            return {...state, loading: false, endorsements: payload};
        },
        getEndorsementsError: (state) => {
            return {...state, loading: false, endorsements: []};
        },
        getOverallCompetency: (state) => {
            return {...state, loading: true};
        },
        getOverallCompetencySuccess: (state, {payload}) => {
            return {...state, loading: false, overallCompetency: payload};
        },
        getOverallCompetencyError: (state) => {
            return {...state, loading: false, overallCompetency: null};
        },
        getShapeChart: (state) => {
            return {...state, loading: true};
        },
        getShapeChartSuccess: (state, {payload}) => {
            return {...state, loading: false, shapeChart: payload};
        },
        getShapeChartError: (state) => {
            return {...state, loading: false, shapeChart: null};
        },
        updateMyProfile: (state) => {
            return {...state, loading: true, updateProfileLoading: true};
        },
        updateMyProfileSuccess: (state) => {
            return {...state, loading: false, updateProfileLoading: false};
        },
        updateMyProfileError: (state) => {
            return {...state, loading: false, updateProfileLoading: false};
        },
        setAccountId: (state, {payload}) => {
            return {...state, accountId: payload};
        }
    }
});

export const {
    getAccountInfo, getAccountInfoError, getAccountInfoSuccess,
    getProfileImage, getProfileImageSuccess, getProfileImageError,
    getSkillPoints, getSkillPointsSuccess, getSkillPointsError,
    getAwards, getAwardsSuccess, getAwardsError,
    getEndorsements, getEndorsementsSuccess, getEndorsementsError,
    getOverallCompetency, getOverallCompetencySuccess, getOverallCompetencyError,
    getMyProfile, getMyProfileSuccess, getMyProfileError,
    getShapeChart, getShapeChartSuccess, getShapeChartError,
    updateMyProfile, updateMyProfileSuccess, updateMyProfileError,
    setAccountId
} = profileSlice.actions;
export default profileSlice.reducer;

