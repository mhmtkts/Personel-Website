import { createSlice } from "@reduxjs/toolkit";
import translations from "./translations";

const initialState = {
  darkMode: false,
  language: "en",
  translations: translations.en,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.translations = translations[action.payload];
      document.documentElement.lang = action.payload;
    },
  },
});

export const { toggleDarkMode, setLanguage } = modeSlice.actions;
export default modeSlice.reducer;
