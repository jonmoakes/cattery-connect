import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

import {
  addCustomerRoute,
  signInRoute,
  uploadDatesAndPensDataRoute,
} from "../strings/routes";
import { resetCustomerState } from "../store/customer/customer.slice";

const useResetStore = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      case signInRoute:
        dispatch(resetSignInFormState());
        break;
      case uploadDatesAndPensDataRoute:
        dispatch(resetUploadDatesAndPensDataState());
        break;
      case addCustomerRoute:
        dispatch(resetCustomerState());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
