import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import useGetAllUsersSelectors from "./selectors/use-get-all-users-selectors";
import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetGetAllCustomersState } from "../store/get-all-customers/get-all-customers.slice";
import { resetGetAllCatsState } from "../store/get-all-cats/get-all-cats.slice";
import { resetGenerateNewPasswordRequestState } from "../store/generate-new-password-request/generate-new-password-request.slice";
import { resetChooseNewPasswordState } from "../store/choose-new-password/choose-new-password.slice";
import {
  resetAllUsersCatteryIdsAndOwnerName,
  resetAllUsersCatteryIdsAndOwnerNameError,
  resetGetAllUsersState,
} from "../store/get-all-users/get-all-users.slice";
import {
  resetContactFormDetails,
  resetSendEmailState,
} from "../store/send-email/send-email.slice";

import {
  addCatChooseOwnerRoute,
  allCatsRoute,
  allCustomersRoute,
  chooseNewPasswordRoute,
  addBookingRoute,
  forgotPasswordRequestRoute,
  signInRoute,
  uploadDatesAndPensDataRoute,
  allUsersRoute,
  bookingsRoute,
  cancelBookingRoute,
  contactRoute,
  viewCustomersCatsRoute,
  addCatRoute,
  editCatRoute,
  editCustomerRoute,
  addCustomerRoute,
  dailyScheduleRoute,
  penDataRoute,
  signUpRoute,
  signedInCustomersDetailsRoute,
  catteryDetailsRoute,
  signedInCustomersCatsRoute,
  settleBookingPaymentRoute,
  paymentResultRoute,
} from "../strings/routes";
import useResetAddBookingState from "./use-reset-add-booking-state";
import { resetBookingsState } from "../store/bookings/bookings.slice";
import { resetCancelBookingState } from "../store/cancel-booking/cancel-booking.slice";
import { resetRequiredCatteryDataForBookingState } from "../store/required-cattery-data/required-cattery-data-for-booking.slice";
import { resetIndividualCustomersCatsState } from "../store/get-individual-customers-cats/get-individual-customers-cats.slice";
import {
  resetCatDetails,
  resetCatDetailsManagementState,
} from "../store/cat-details-management/cat-details-management.slice";
import {
  resetCustomerDetails,
  resetCustomerDetailsManagementState,
} from "../store/customer-details-management/customer-details-management.slice";
import { resetUpdatePensDataState } from "../store/update-pens-data/update-pens-data.slice";
import { resetDailyScheduleState } from "../store/daily-schedule/daily-schedule.slice";
import { resetViewPenDataState } from "../store/view-pen-data/view-pen-data.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetSignedInCustomersDetailsState } from "../store/signed-in-customers-details/signed-in-customer-details.slice";
import { resetCatteryDetailsState } from "../store/cattery-details/cattery-details-slice";
import { setBookingConfirmationDetailsInfo } from "../store/signed-in-customers-bookings/signed-in-customers-bookings.slice";
import { resetCardInputState } from "../store/card-input/card-input.slice";
import { resetHandlePaymentState } from "../store/handle-payment/handle-payment-slice";

const useResetStoreOnRouteChangeUseEffect = () => {
  const { allUsersCatteryIdsAndOwnerNameError } = useGetAllUsersSelectors();

  const { resetAddBookingState } = useResetAddBookingState();
  const location = useLocation();
  const dispatch = useDispatch();
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      switch (prevLocation.current) {
        case signInRoute:
          dispatch(resetSignInFormState());
          break;
        case signUpRoute:
          dispatch(resetSignUpFormState());
          break;
        case forgotPasswordRequestRoute:
          dispatch(resetGenerateNewPasswordRequestState());
          break;
        case chooseNewPasswordRoute:
          dispatch(resetChooseNewPasswordState());
          break;
        case uploadDatesAndPensDataRoute:
          dispatch(resetUploadDatesAndPensDataState());
          dispatch(resetAllUsersCatteryIdsAndOwnerName());
          if (allUsersCatteryIdsAndOwnerNameError) {
            dispatch(resetAllUsersCatteryIdsAndOwnerNameError());
          }
          break;
        case allCustomersRoute:
          dispatch(resetGetAllCustomersState());
          break;
        case addCustomerRoute:
          dispatch(resetCustomerDetails());
          break;
        case editCustomerRoute:
          dispatch(resetCustomerDetailsManagementState());
          break;
        case allUsersRoute:
          dispatch(resetGetAllUsersState());
          break;
        case allCatsRoute:
          dispatch(resetGetAllCatsState());
          break;
        case viewCustomersCatsRoute:
        case signedInCustomersCatsRoute:
          dispatch(resetIndividualCustomersCatsState());
          break;
        case addCatChooseOwnerRoute:
          dispatch(resetGetAllCustomersState());
          break;
        case addCatRoute:
          dispatch(resetCatDetails());
          break;
        case editCatRoute:
          dispatch(resetCatDetailsManagementState());
          break;
        case addBookingRoute:
          resetAddBookingState();
          break;
        case bookingsRoute:
          dispatch(resetBookingsState());
          break;
        case cancelBookingRoute:
          dispatch(resetCancelBookingState());
          dispatch(resetRequiredCatteryDataForBookingState());
          dispatch(resetSendEmailState());
          dispatch(resetUpdatePensDataState());
          break;
        case contactRoute:
          dispatch(resetContactFormDetails());
          dispatch(resetSendEmailState());
          break;
        case dailyScheduleRoute:
          dispatch(resetDailyScheduleState());
          break;
        case penDataRoute:
          dispatch(resetViewPenDataState());
          break;
        case signedInCustomersDetailsRoute:
          dispatch(resetSignedInCustomersDetailsState());
          break;
        case catteryDetailsRoute:
          dispatch(resetCatteryDetailsState());
          break;
        case settleBookingPaymentRoute:
          dispatch(setBookingConfirmationDetailsInfo({}));
          dispatch(resetCardInputState());
          break;
        case paymentResultRoute:
          dispatch(resetHandlePaymentState());
          break;
        default:
          break;
      }

      prevLocation.current = location.pathname;
    }
  }, [
    location,
    dispatch,
    allUsersCatteryIdsAndOwnerNameError,
    resetAddBookingState,
  ]);
};

export default useResetStoreOnRouteChangeUseEffect;
