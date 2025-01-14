import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { passwordIsVisibleReducer } from "./password-is-visible/password-is-visible.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { userReducer } from "./user/user.slice";
import { uploadDatesAndPensDataReducer } from "./upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { catsReducer } from "./cats/cats.slice";
import { addCustomerReducer } from "./add-customer/add-customer.slice";
import { getAllCustomersReducer } from "./get-all-customers/get-all-customers.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  passwordIsVisible: passwordIsVisibleReducer,
  signInForm: signInFormReducer,
  user: userReducer,
  uploadDatesAndPensData: uploadDatesAndPensDataReducer,
  cats: catsReducer,
  addCustomer: addCustomerReducer,
  getAllCustomers: getAllCustomersReducer,
});
