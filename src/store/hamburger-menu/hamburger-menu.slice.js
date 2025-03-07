import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";

export const hamburgerMenuSlice = createSlice({
  name: "hamburgerMenu",
  initialState: INITIAL_STATE,
  reducers: {
    hideHamburgerMenu(state) {
      state.showHamburgerMenu = false;
    },
    toggleHamburgerMenu(state) {
      state.showHamburgerMenu = !state.showHamburgerMenu;
    },
  },
});

export const { hideHamburgerMenu, toggleHamburgerMenu } =
  hamburgerMenuSlice.actions;

export const hamburgerMenuReducer = hamburgerMenuSlice.reducer;
