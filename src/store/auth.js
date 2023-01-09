import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        
    }
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;