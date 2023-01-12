import { createSlice } from "@reduxjs/toolkit";
import kzbase from '../data/base.json';
const questions = kzbase;
const userAnswers = new Array(35);
userAnswers.fill("");
let start = +new Date() + 6000000;
const initialState = {
    questions: questions,
    userAnswers: userAnswers,
    current: 0,
    timeLeft: 6000000
}

const quizSlice = createSlice({
    name: "quiz",
    initialState: initialState,
    reducers: {
        toQuestion(state, action) {
            state.current = action.payload;
        },
        selectOption(state, action) {
            const index = action.payload.index;
            const option = `${action.payload.option}`;

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
                if (index < 25) {
                    state.userAnswers[index] = option;
                }
                state.userAnswers[index] += option;
            }

        },
        countDown(state) {
            state.timeLeft = start - +new Date();
        }
    }
});


export const quizActions = quizSlice.actions;
export const quizReducer = quizSlice.reducer;