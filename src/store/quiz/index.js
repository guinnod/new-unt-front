import { configureStore } from "@reduxjs/toolkit";
import { quizActionsReducer } from "./quizActions";

const store = configureStore({
    reducer: {
        quizActions: quizActionsReducer
    }
});

export default store;