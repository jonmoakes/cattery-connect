import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import useGetAllUsersSelectors from "./selectors/use-get-all-users-selectors";
import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetGetAllCustomersState } from "../store/get-all-customers/get-all-customers.slice";
import { resetCatDetailsManagementState } from "../store/cat-details-management/cat-details-management.slice";
import { resetGetAllCatsState } from "../store/get-all-cats/get-all-cats.slice";
import { resetGenerateNewPasswordRequestState } from "../store/generate-new-password-request/generate-new-password-request.slice";
import { resetChooseNewPasswordState } from "../store/choose-new-password/choose-new-password.slice";
import {
  resetAllUsersCatteryIdsAndOwnerName,
  resetAllUsersCatteryIdsAndOwnerNameError,
  resetGetAllUsersState,
} from "../store/get-all-users/get-all-users.slice";
import { resetSendEmailState } from "../store/send-email/send-email.slice";

import {
  addCatChooseOwnerRoute,
  addCatRoute,
  allCatsRoute,
  allCustomersRoute,
  chooseNewPasswordRoute,
  dbManageAddBookingRoute,
  editCatRoute,
  forgotPasswordRequestRoute,
  signInRoute,
  uploadDatesAndPensDataRoute,
  allUsersRoute,
} from "../strings/routes";
import useResetAddBookingState from "./use-reset-add-booking-state";

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
        case allUsersRoute:
          dispatch(resetGetAllUsersState());
          break;
        case addCatRoute:
        case editCatRoute:
          dispatch(resetCatDetailsManagementState());
          break;
        case allCatsRoute:
          dispatch(resetGetAllCatsState());
          break;
        case addCatChooseOwnerRoute:
          dispatch(resetGetAllCustomersState());
          break;
        case dbManageAddBookingRoute:
          resetAddBookingState();
          dispatch(resetSendEmailState());
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
