import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John Doe",
    xp: 0,
  },
  reducers: {
    increaseXp: (state) => {
      state.xp += 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { increaseXp, setName } = userSlice.actions;

export default userSlice.reducer;
