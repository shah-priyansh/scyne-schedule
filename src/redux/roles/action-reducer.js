import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    rolesLoading: false,
    addRoleLoading: false,
    updateRoleLoading: false,
    deleteRoleLoading: false,
    roles: [],
};

const roleSlice = createSlice({
    name: "roles",
    initialState,
    reducers: {
        getCareerRoles: (state) => {
            return {...state, rolesLoading: true};
        },
        getCareerRolesSuccess: (state, {payload}) => {
            return {...state, rolesLoading: false, roles: payload};
        },
        getCareerRolesError: (state) => {
            return {...state, rolesLoading: false, roles: []};
        },
        addCareerRoles: (state) => {
            return {...state, addRoleLoading: true};
        },
        addCareerRolesSuccess: (state) => {
            return {...state, addRoleLoading: false};
        },
        addCareerRolesError: (state) => {
            return {...state, addRoleLoading: false};
        },
        updateCareerRoles: (state) => {
            return {...state, updateRoleLoading: true};
        },
        updateCareerRolesSuccess: (state) => {
            return {...state, updateRoleLoading: false};
        },
        updateCareerRolesError: (state) => {
            return {...state, updateRoleLoading: false};
        },
        deleteCareerRoles: (state) => {
            return {...state, deleteRoleLoading: true};
        },
        deleteCareerRolesSuccess: (state) => {
            return {...state, deleteRoleLoading: false};
        },
        deleteCareerRolesError: (state) => {
            return {...state, deleteRoleLoading: false};
        },
    }
});

export const {
    getCareerRoles, getCareerRolesSuccess, getCareerRolesError,
    addCareerRoles, addCareerRolesSuccess, addCareerRolesError,
    updateCareerRoles, updateCareerRolesSuccess, updateCareerRolesError,
    deleteCareerRoles, deleteCareerRolesSuccess, deleteCareerRolesError
} = roleSlice.actions;
export default roleSlice.reducer;

