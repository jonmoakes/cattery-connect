import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetGenerateNewPasswordRequestState } from "../store/generate-new-password-request/generate-new-password-request.slice";
import { resetChooseNewPasswordState } from "../store/choose-new-password/choose-new-password.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetCustomerDetailsManagementState } from "../store/customer-details-management/customer-details-management.slice";
import { resetCatDetailsManagementState } from "../store/cat-details-management/cat-details-management.slice";
import { resetGetAllCustomersState } from "../store/get-all-customers/get-all-customers.slice";
import { resetGetAllUsersState } from "../store/get-all-users/get-all-users.slice";
import { resetGetAllCatsState } from "../store/get-all-cats/get-all-cats.slice";
import {
  resetContactFormDetails,
  resetSendEmailState,
} from "../store/send-email/send-email.slice";
import useResetAddBookingState from "./use-reset-add-booking-state";
import { resetBookingsState } from "../store/bookings/bookings.slice";
import { resetCancelBookingState } from "../store/cancel-booking/cancel-booking.slice";
import { resetIndividualCustomersCatsState } from "../store/get-individual-customers-cats/get-individual-customers-cats.slice";
import { resetDailyScheduleState } from "../store/daily-schedule/daily-schedule.slice";
import { resetViewPenDataState } from "../store/view-pen-data/view-pen-data.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetSignedInCustomersDetailsState } from "../store/signed-in-customers-details/signed-in-customer-details.slice";
import { resetCatteryDetailsState } from "../store/cattery-details/cattery-details-slice";
import { resetCardInputState } from "../store/card-input/card-input.slice";
import { resetHandlePaymentState } from "../store/handle-payment/handle-payment-slice";
import { resetMoveCustomerToNewCatteryState } from "../store/move-customer-to-new-cattery/move-customer-to-new-cattery-slice";
import { resetUpdatePriceState } from "../store/update-price/update-price-slice";
import { resetDeletePastDatesState } from "../store/delete-dates/delete-dates-slice";

const useResetAllStoreOnSignOut = () => {
  const { resetAddBookingState } = useResetAddBookingState();
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetGenerateNewPasswordRequestState());
    dispatch(resetChooseNewPasswordState());
    dispatch(resetUploadDatesAndPensDataState());
    dispatch(resetCustomerDetailsManagementState());
    dispatch(resetCatDetailsManagementState());
    dispatch(resetGetAllCustomersState());
    dispatch(resetGetAllUsersState());
    dispatch(resetGetAllCatsState());
    dispatch(resetSendEmailState());
    resetAddBookingState();
    dispatch(resetBookingsState());
    dispatch(resetCancelBookingState());
    dispatch(resetContactFormDetails());
    dispatch(resetIndividualCustomersCatsState());
    dispatch(resetDailyScheduleState());
    dispatch(resetViewPenDataState());
    dispatch(resetSignedInCustomersDetailsState());
    dispatch(resetCatteryDetailsState());
    dispatch(resetCardInputState());
    dispatch(resetHandlePaymentState());
    dispatch(resetMoveCustomerToNewCatteryState());
    dispatch(resetUpdatePriceState());
    dispatch(resetDeletePastDatesState());
    localStorage.clear();
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
