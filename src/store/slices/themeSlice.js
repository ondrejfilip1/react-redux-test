import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      if (action.payload === "dark") document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
