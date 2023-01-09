import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { languageReducer } from "./language";


const store = configureStore({
    reducer: {
        language: languageReducer, 
        auth: authReducer
    }
});

export default store;