import { createSlice } from "@reduxjs/toolkit";

const questions = [];
const userAnswers = new Array(35);
userAnswers.fill(0, 0, 35);

const initialState = {
    questions: questions,
    userAnswers: userAnswers,
    current: 0,
    timeLeft: 40000
}



const quizActionsSlice = createSlice({
    name: "quizActions",
    initialState: initialState,
    reducers: {

    }
});


export const quizActionsActions = quizActionsSlice.actions;
export const quizActionsReducer = quizActionsSlice.reducer;