import { createSlice } from "@reduxjs/toolkit";
import base from '../data/base';

const questions = [...base];
let current = 0;
const initialState = {
    question: questions[0].question,
    answer: questions[0].options[0],
    knows: 0,
    dontKnows: 0
}

const theorySlice = createSlice({
    name: "theory",
    initialState: initialState,
    reducers: {
        change(state, action) {
            if (action.payload === "NEXT") {
                current++;
            }
            else if (action.payload === "PREVIOUS") {
                current--;
            }
            state.question = questions[current].question;
            state.answer = questions[current].options[0];
        },
    }
});


export const theoryActions = theorySlice.actions;
export const theoryReducer = theorySlice.reducer;