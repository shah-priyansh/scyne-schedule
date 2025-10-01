import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    skillsLoading: false,
    averageScoreLoading: false,
    masteryLevelLoading: false,
    skillsDetailsLoading: false,
    pickListLoading: false,
    skillsOverviewLoading: false,
    skillsAccountLoading: false,
    skillVsEmpLoading: false,
    skillVsEmpAccountsLoading: false,
    skillCategoriesLoading: false,
    addSkillLoading: false,
    skills: [],
    totalActiveSkills: 0,
    averageScore: 0,
    masteryLevel: null,
    skillsDetails: [],
    pickList: [],
    skillsOverview: [],
    skillsAccount: [],
    skillVsEmp: [],
    skillVsEmpAccounts: [],
    skillVsEmpAccountsFiltered: [],
    skillCategories: null,
    allSkills: []
};

const skillSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        getSkills: (state) => {
            return {...state, skillsLoading: true};
        },
        getSkillsSuccess: (state, {payload}) => {
            return {...state, skillsLoading: false, totalActiveSkills: payload.filter(f => f.IsActive__c).length, skills: payload};
        },
        getSkillsError: (state) => {
            return {...state, skillsLoading: false, totalActiveSkills: 0, skills: []};
        },
        getAverageScore: (state) => {
            return {...state, averageScoreLoading: true};
        },
        getAverageScoreSuccess: (state, {payload}) => {
            return {...state, averageScoreLoading: false, averageScore: payload};
        },
        getAverageScoreError: (state) => {
            return {...state, averageScoreLoading: false, averageScore: 0};
        },
        getMasteryLevel: (state) => {
            return {...state, masteryLevelLoading: true};
        },
        getMasteryLevelSuccess: (state, {payload}) => {
            return {...state, masteryLevelLoading: false, masteryLevel: payload};
        },
        getMasteryLevelError: (state) => {
            return {...state, masteryLevelLoading: false, masteryLevel: 0};
        },
        getSkillsDetails: (state) => {
            return {...state, skillsDetailsLoading: true};
        },
        getSkillsDetailsSuccess: (state, {payload}) => {
            return {...state, skillsDetailsLoading: false, skillsDetails: payload};
        },
        getSkillsDetailsError: (state) => {
            return {...state, skillsDetailsLoading: false, skillsDetails: []};
        },
        getSkillsPickList: (state) => {
            return {...state, pickListLoading: true};
        },
        getSkillsPickListSuccess: (state, {payload}) => {
            return {...state, pickListLoading: false, pickList: payload.pickList, allSkills: payload.allSkills};
        },
        getSkillsPickListError: (state) => {
            return {...state, pickListLoading: false, pickList: [], allSkills: []};
        },
        getSkillsOverview: (state) => {
            return {...state, loading: true, skillsOverviewLoading: true};
        },
        getSkillsOverviewSuccess: (state, {payload}) => {
            return {...state, loading: false, skillsOverviewLoading: false, skillsOverview: payload};
        },
        getSkillsOverviewError: (state) => {
            return {...state, loading: false, skillsOverviewLoading: false, skillsOverview: []};
        },
        getAccountsForSkills: (state) => {
            return {...state, loading: true, skillsAccountLoading: true, skillsAccount: []};
        },
        getAccountsForSkillsSuccess: (state, {payload}) => {
            return {...state, loading: false, skillsAccountLoading: false, skillsAccount: payload};
        },
        getAccountsForSkillsError: (state) => {
            return {...state, loading: false, skillsAccountLoading: false, skillsAccount: []};
        },
        getSkillVsEmp: (state, {payload}) => {
            return {...state, loading: true, skillVsEmpLoading: !!payload.allowLoading};
        },
        getSkillVsEmpSuccess: (state, {payload}) => {
            return {...state, loading: false, skillVsEmpLoading: false, skillVsEmp: payload};
        },
        getSkillVsEmpError: (state) => {
            return {...state, loading: false, skillVsEmpLoading: false, skillVsEmp: []};
        },
        getSkillVsEmpAccounts: (state) => {
            return {...state, loading: true, skillVsEmpAccountsLoading: true};
        },
        getSkillVsEmpAccountsSuccess: (state, {payload}) => {
            return {...state, loading: false, skillVsEmpAccountsLoading: false, skillVsEmpAccounts: payload, skillVsEmpAccountsFiltered: []};
        },
        getSkillVsEmpAccountsError: (state) => {
            return {...state, loading: false, skillVsEmpAccountsLoading: false, skillVsEmpAccounts: [], skillVsEmpAccountsFiltered: []};
        },
        getSkillCategories: (state) => {
            return {...state, loading: true, skillCategoriesLoading: true};
        },
        getSkillCategoriesSuccess: (state, {payload}) => {
            return {...state, loading: false, skillCategoriesLoading: false, skillCategories: payload};
        },
        getSkillCategoriesError: (state) => {
            return {...state, loading: false, skillCategoriesLoading: false, skillCategories: []};
        },
        getSkillVsEmpAccountsFiltered: (state, {payload}) => {
            return {...state, loading: false, skillVsEmpAccountsFiltered: payload};
        },
        addSkill: (state) => {
            return {...state, addSkillLoading: true};
        },
        addSkillSuccess: (state) => {
            return {...state, addSkillLoading: false};
        },
        addSkillError: (state) => {
            return {...state, addSkillLoading: false};
        },
    }
});

export const {
    getSkills, getSkillsSuccess,getSkillsError,
    getAverageScore, getAverageScoreSuccess, getAverageScoreError,
    getMasteryLevel, getMasteryLevelSuccess, getMasteryLevelError,
    getSkillsDetails, getSkillsDetailsSuccess, getSkillsDetailsError,
    getSkillsPickList, getSkillsPickListError, getSkillsPickListSuccess,
    getSkillsOverview, getSkillsOverviewSuccess, getSkillsOverviewError,
    getAccountsForSkills, getAccountsForSkillsSuccess, getAccountsForSkillsError,
    getSkillVsEmp, getSkillVsEmpSuccess, getSkillVsEmpError,
    getSkillVsEmpAccounts, getSkillVsEmpAccountsSuccess, getSkillVsEmpAccountsError,
    getSkillCategories, getSkillCategoriesSuccess, getSkillCategoriesError,
    getSkillVsEmpAccountsFiltered, addSkill, addSkillError, addSkillSuccess
} = skillSlice.actions;
export default skillSlice.reducer;

