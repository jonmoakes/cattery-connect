import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  showHamburgerMenu: false,
};

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
  selectors: {
    selectHamburgerMenuSelectors: createSelector(
      (state) => state.showHamburgerMenu,
      (showHamburgerMenu) => {
        return {
          showHamburgerMenu,
        };
      }
    ),
  },
});

export const { hideHamburgerMenu, toggleHamburgerMenu } =
  hamburgerMenuSlice.actions;
export const { selectHamburgerMenuSelectors } = hamburgerMenuSlice.selectors;

export const hamburgerMenuReducer = hamburgerMenuSlice.reducer;
