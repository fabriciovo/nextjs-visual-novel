import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "compilationController",
  initialState: {
    center_game_screen: "display:flex;\njustifycontent:center",
  },
  reducers: {
    changeCenterGame(state, { payload }) {
      return { ...state, center_game_screen: payload };
    },

  },
});

export const {
  changeCenterGame,
} = slice.actions;

export const selectCompilation = (state) => state.compilationController;

export default slice.reducer;
