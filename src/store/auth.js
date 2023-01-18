import { createSlice } from "@reduxjs/toolkit";
import { deafultUser } from "../media";

const initialState = {
    username: 'unknown',
    name: 'Default User',
    profilePhoto: deafultUser,
    maxScore: 0,
    simple: 400,
    context: 100,
    multiple: 200, 
    solved: 700
};
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {

    }
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;