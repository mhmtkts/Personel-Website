import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  language: 'en',
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      document.documentElement.lang = action.payload;
    },
  },
});

export const { toggleDarkMode, setLanguage } = modeSlice.actions;
export default modeSlice.reducer;
