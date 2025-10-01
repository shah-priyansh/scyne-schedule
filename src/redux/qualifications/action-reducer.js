import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    qualificationsLoading: false,
    addQualificationLoading: false,
    updateQualificationLoading: false,
    skillsForQualificationLoading: false,
    qualifications: [],
    allSkillsForQualifications: [],
};

const qualificationSlice = createSlice({
    name: "qualifications",
    initialState,
    reducers: {
        getQualifications: (state) => {
            return {...state, qualificationsLoading: true};
        },
        getQualificationsSuccess: (state, {payload}) => {
            return {...state, qualificationsLoading: false, qualifications: payload};
        },
        getQualificationsError: (state) => {
            return {...state, qualificationsLoading: false, qualifications: []};
        },
        addQualifications: (state) => {
            return {...state, addQualificationLoading: true};
        },
        addQualificationsSuccess: (state) => {
            return {...state, addQualificationLoading: false};
        },
        addQualificationsError: (state) => {
            return {...state, addQualificationLoading: false};
        },
        updateQualifications: (state) => {
            return {...state, updateQualificationLoading: true};
        },
        updateQualificationsSuccess: (state) => {
            return {...state, updateQualificationLoading: false};
        },
        updateQualificationsError: (state) => {
            return {...state, updateQualificationLoading: false};
        },
        getAllSkillsForQualification: (state) => {
            return {...state, skillsForQualificationLoading: true};
        },
        getAllSkillsForQualificationSuccess: (state, {payload}) => {
            return {...state, skillsForQualificationLoading: false, allSkillsForQualifications: payload};
        },
        getAllSkillsForQualificationError: (state) => {
            return {...state, skillsForQualificationLoading: false, allSkillsForQualifications: []};
        },
    }
});

export const {
    getQualifications, getQualificationsSuccess, getQualificationsError,
    addQualifications, addQualificationsSuccess, addQualificationsError,
    updateQualifications, updateQualificationsSuccess, updateQualificationsError,
    getAllSkillsForQualification, getAllSkillsForQualificationSuccess, getAllSkillsForQualificationError
} = qualificationSlice.actions;
export default qualificationSlice.reducer;

