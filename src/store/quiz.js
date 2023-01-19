import { createSlice } from "@reduxjs/toolkit";
import kzbase from '../data/base.json';
const questions = kzbase;
const userAnswers = new Array(35);
userAnswers.fill("");
const answers = new Array(35);
for (let i = 0; i < answers.length; i++) {
    answers[i] = { value: `${i % 4}`, description: 'full' };
    if (i > 25) {
        answers[i].value += `${i % 3}`;
        if (i % 4 === 0) {
            answers[i].description = 'half'
        } else if (i % 3 === 0) {
            answers[i].description = 'null'
        }
    }
}
const initialState = {
    questions: questions,
    userAnswers: userAnswers,
    current: 0,
    timeLeft: 6000000,
    answers: answers
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
                if (state.userAnswers[index].length < 3) {
                    if (index < 25) {
                        state.userAnswers[index] = option;
                    } else {
                        state.userAnswers[index] += option;
                    }
                }
            }
        },
        countDown(state) {
            state.timeLeft -= 1000;
        }
    }
});


export const quizActions = quizSlice.actions;
export const quizReducer = quizSlice.reducer;