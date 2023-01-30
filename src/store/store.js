import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { languageReducer } from "./language";
import { practiceReducer } from "./practice";
import { quizReducer } from "./quiz";
import { theoryReducer } from "./theory";

const store = configureStore({
    reducer: {
        language: languageReducer,
        auth: authReducer,
        quiz: quizReducer, 
        theory: theoryReducer, 
        practice: practiceReducer
    }
});

export default store;