import { configureStore } from "@reduxjs/toolkit";
import { languageReducer } from "./language";

const store = configureStore({
    reducer: {
        language: languageReducer
    }
});

export default store;