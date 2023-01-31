import { createSlice } from "@reduxjs/toolkit";
import kazakh from '../data/kazakh.json';
import russian from '../data/russian.json';
import { Flag_of_Kazakhstan, Flag_of_Russia } from "../media";
const currentLanguage = localStorage.getItem('language') === 'ru' ? russian : kazakh;
const currentFlag = localStorage.getItem('language') === 'ru' ? Flag_of_Kazakhstan : Flag_of_Russia;
const initialState = {
    value: currentLanguage,
    flag: currentFlag
}
const languageSlice = createSlice({
    name: "language",
    initialState: initialState,
    reducers: {
        change(state) {
            let tempLanguage = localStorage.getItem('language');

            if (tempLanguage === 'ru') {
                state.value = kazakh;
                state.flag = Flag_of_Russia;
                localStorage.setItem('language', 'kz');
            }
            else {
                state.value = russian;
                state.flag = Flag_of_Kazakhstan;
                localStorage.setItem('language', 'ru');
            }
        }
    }
});


export const languageActions = languageSlice.actions;
export const languageReducer = languageSlice.reducer;