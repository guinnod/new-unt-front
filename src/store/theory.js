import { createSlice } from "@reduxjs/toolkit";
import base from '../data/tbase';

let questions = [...base];
let nextTime = [];
let current = 0;
const initialState = {
    question: questions[current].question,
    answer: questions[current].options[0],
    knows: 0,
    dontKnows: 0,
    partEnded: false
}

const theorySlice = createSlice({
    name: "theory",
    initialState: initialState,
    reducers: {
        change(state, action) {
            if (action.payload === "NEXT") {
                current++;
            }
            else if (action.payload === "PREVIOUS" && current > 0) {
                current--;
            }
            if (current >= questions.length) {
                if (nextTime.length === 0) {
                    state.partEnded = true;
                } else {
                    questions = [...questions, ...nextTime];
                    nextTime = [];
                }
            }
            if (current < questions.length) {
                state.question = questions[current].question;
                state.answer = questions[current].options[0];
            }

        },
        select(state, action) {
            if (action.payload === "KNOW") {
                state.knows++;
            } else if (action.payload === "DONT_KNOW") {
                nextTime.push(questions[current]);
                state.dontKnows++;
            }
        },
        init(state) {
            questions = [...base];
            nextTime = [];
            current = 0;
            state.partEnded = false;
            state.answer = questions[current].options[0];
            state.question = questions[current].question;
            state.knows = 0;
            state.dontKnows = 0;
        }
    }
});


export const theoryActions = theorySlice.actions;
export const theoryReducer = theorySlice.reducer;