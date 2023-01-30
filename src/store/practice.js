import { createSlice } from "@reduxjs/toolkit";
import base from '../data/tbase';

let questions = [...base];

let current = 0;
const initialState = {
    questions: questions,
    current: current,
    partEnded: false
}

const practiceSlice = createSlice({
    name: "practice",
    initialState: initialState,
    reducers: {
        toQuestion(state, action) {
            state.current = action.payload;
        }
    }
});


export const practiceActions = practiceSlice.actions;
export const practiceReducer = practiceSlice.reducer;