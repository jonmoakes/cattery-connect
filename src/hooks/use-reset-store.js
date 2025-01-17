import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetAddCustomerState } from "../store/add-customer/add-customer.slice";
import { resetAddCatState } from "../store/add-cat/add-cat.slice";
import { resetGetAllCustomersState } from "../store/get-all-customers/get-all-customers.slice";

import {
  addCatRoute,
  addCustomerRoute,
  allCustomersRoute,
  signInRoute,
  uploadDatesAndPensDataRoute,
} from "../strings/routes";
import { resetDeleteCustomerState } from "../store/delete-customer/delete-customer.slice";

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
        dispatch(resetAddCustomerState());
        break;
      case addCatRoute:
        dispatch(resetAddCatState());
        break;
      case allCustomersRoute:
        dispatch(resetGetAllCustomersState());
        dispatch(resetDeleteCustomerState());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
