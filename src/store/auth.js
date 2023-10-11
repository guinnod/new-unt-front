import { createSlice } from "@reduxjs/toolkit";
import { deafultUser } from "../media";

const initialState = {
    username: "unknown",
    name: "Default User",
    profilePhoto: deafultUser,
    maxScore: 0,
    simple: 400,
    context: 100,
    multiple: 200,
    solved: 700,
    days: [
        { date: "2022-10-01", count: 13 },
        { date: "2022-11-22", count: 78 },
        { date: "2023-01-30", count: 1225 },
        { date: "2023-02-18", count: 1225 },
    ],
};
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuth(state, action) {
            state = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
