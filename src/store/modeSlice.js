import { createSlice } from "@reduxjs/toolkit";
import translations from "./translations";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    darkMode: false,
    language: "en",
    translations: translations.en,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.translations = translations[action.payload];
      document.documentElement.lang = action.payload;
    },
    setInitialState: (state, action) => {
      const { darkMode, language } = action.payload;
      state.darkMode = darkMode;
      state.language = language;
      state.translations = translations[language];
      document.documentElement.lang = language;
    },
  },
});

export const { toggleDarkMode, setLanguage, setInitialState } = modeSlice.actions;
export default modeSlice.reducer;