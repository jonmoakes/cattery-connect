import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { passwordIsVisibleReducer } from "./password-is-visible/password-is-visible.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { userReducer } from "./user/user.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  passwordIsVisible: passwordIsVisibleReducer,
  signInForm: signInFormReducer,
  signUpForm: signUpFormReducer,
  user: userReducer,
});
