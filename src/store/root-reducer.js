import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { passwordIsVisibleReducer } from "./password-is-visible/password-is-visible.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { generateNewPasswordRequestReducer } from "./generate-new-password-request/generate-new-password-request.slice";
import { chooseNewPasswordReducer } from "./choose-new-password/choose-new-password.slice";
import { userReducer } from "./user/user.slice";
import { uploadDatesAndPensDataReducer } from "./upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { getAllCustomersReducer } from "./get-all-customers/get-all-customers.slice";
import { customerDetailsManagementReducer } from "./customer-details-management/customer-details-management.slice";
import { catDetailsManagementReducer } from "./cat-details-management/cat-details-management.slice";
import { getAllCatsReducer } from "./get-all-cats/get-all-cats.slice";
import { getAllUsersReducer } from "./get-all-users/get-all-users.slice";
import { sendEmailReducer } from "./send-email/send-email.slice";
import { requiredDataForCatteryBookingReducer } from "./required-cattery-data/required-cattery-data-for-booking.slice";
import { isBookingAvailableReducer } from "./is-booking-available/is-booking-available.slice";
import { updatePensDataReducer } from "./update-pens-data/update-pens-data.slice";
import { uploadBookingDataReducer } from "./upload-booking-data/upload-booking-data.slice";
import { bookingsReducer } from "./bookings/bookings.slice";
import { cancelBookingReducer } from "./cancel-booking/cancel-booking.slice";
import { dailyScheduleReducer } from "./daily-schedule/daily-schedule.slice";
import { individualCustomersCatsReducer } from "./get-individual-customers-cats/get-individual-customers-cats.slice";
import { viewPenDataReducer } from "./view-pen-data/view-pen-data.slice";
import { signedInCustomersDetailsReducer } from "./signed-in-customers-details/signed-in-customer-details.slice";
import { catteryDetailsReducer } from "./cattery-details/cattery-details-slice";
import { signedInCustomersBookingsReducer } from "./signed-in-customers-bookings/signed-in-customers-bookings.slice";
import { cardInputReducer } from "./card-input/card-input.slice";
import { handlePaymentReducer } from "./handle-payment/handle-payment-slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  passwordIsVisible: passwordIsVisibleReducer,
  signInForm: signInFormReducer,
  signUpForm: signUpFormReducer,
  generateNewPasswordRequest: generateNewPasswordRequestReducer,
  chooseNewPassword: chooseNewPasswordReducer,
  user: userReducer,
  uploadDatesAndPensData: uploadDatesAndPensDataReducer,
  getAllCustomers: getAllCustomersReducer,
  customerDetailsManagement: customerDetailsManagementReducer,
  catDetailsManagement: catDetailsManagementReducer,
  getAllCats: getAllCatsReducer,
  getAllUsers: getAllUsersReducer,
  sendEmail: sendEmailReducer,
  requiredCatteryDataForBooking: requiredDataForCatteryBookingReducer,
  isBookingAvailable: isBookingAvailableReducer,
  updatePensData: updatePensDataReducer,
  uploadBookingData: uploadBookingDataReducer,
  bookings: bookingsReducer,
  cancelBooking: cancelBookingReducer,
  dailySchedule: dailyScheduleReducer,
  individualCustomersCats: individualCustomersCatsReducer,
  viewPenData: viewPenDataReducer,
  signedInCustomersDetails: signedInCustomersDetailsReducer,
  catteryDetails: catteryDetailsReducer,
  signedInCustomersBookings: signedInCustomersBookingsReducer,
  cardInput: cardInputReducer,
  handlePayment: handlePaymentReducer,
});
