import { createSlice } from "@reduxjs/toolkit";
import kzbase from '../../data/kzbase';
const questions = kzbase;
const userAnswers = new Array(35);
userAnswers.fill("");

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
        toQuestion(state, action) {
            state.current = action.payload;
        },
        selectOption(state, action) {
            const index = action.payload.index;
            const option = `${action.payload.option}`;
            if (index < 25) {
                state.userAnswers[index] = state.userAnswers[index].includes(option) ? '' : option;
            } else {
                if (state.userAnswers[index].includes(option)) {
                    let temp = '';
                    let string = state.userAnswers[index];
                    for (let i = 0; i < string.length; i++) {
                        if (string.charAt(i) !== option.charAt(0)) {
                            temp += `${string.charAt(i)}`;
                        }
                    }
                    state.userAnswers[index] = temp;
                } else {
                    state.userAnswers[index] += option;
                }
            }
        }
    }
});


export const quizActionsActions = quizActionsSlice.actions;
export const quizActionsReducer = quizActionsSlice.reducer;