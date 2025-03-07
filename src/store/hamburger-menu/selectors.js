import { createSelector } from "@reduxjs/toolkit";

export const selectHamburgerMenuSelectors = createSelector(
  (state) => state.hamburgerMenu,
  (hamburgerMenu) => ({
    showHamburgerMenu: hamburgerMenu.showHamburgerMenu,
  })
);
