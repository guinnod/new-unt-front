import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { languageReducer } from "./language";
import { quizActionsReducer } from "./quiz/quizActions";

const store = configureStore({
    reducer: {
        language: languageReducer, 
        auth: authReducer, 
        quizActions: quizActionsReducer
    }
});

export default store;