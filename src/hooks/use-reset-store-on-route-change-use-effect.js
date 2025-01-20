import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetCustomerDetailsManagementState } from "../store/customer-details-management/customer-details-management.slice";
import { resetGetAllCustomersState } from "../store/get-all-customers/get-all-customers.slice";
import { resetCatDetailsManagementState } from "../store/cat-details-management/cat-details-management.slice";

import {
  addCatRoute,
  addCustomerRoute,
  allCustomersRoute,
  editCatRoute,
  editCustomerRoute,
  signInRoute,
  uploadDatesAndPensDataRoute,
  viewCustomersCatsRoute,
} from "../strings/routes";
import { resetDataToBePassedState } from "../store/data-to-be-passed/data-to-be-passed.slice";

const useResetStoreOnRouteChangeUseEffect = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      switch (prevLocation.current) {
        case signInRoute:
          dispatch(resetSignInFormState());
          break;
        case uploadDatesAndPensDataRoute:
          dispatch(resetUploadDatesAndPensDataState());
          break;
        case addCustomerRoute:
          dispatch(resetCustomerDetailsManagementState());
          break;
        case editCustomerRoute:
          dispatch(resetDataToBePassedState());
          dispatch(resetCustomerDetailsManagementState());
          break;
        case addCatRoute:
        case editCatRoute:
        case viewCustomersCatsRoute:
          dispatch(resetDataToBePassedState());
          dispatch(resetCatDetailsManagementState());
          break;
        case allCustomersRoute:
          dispatch(resetGetAllCustomersState());
          break;
        default:
          break;
      }

      // Update the ref to the current location
      prevLocation.current = location.pathname;
    }
  }, [location, dispatch]);
};

export default useResetStoreOnRouteChangeUseEffect;
