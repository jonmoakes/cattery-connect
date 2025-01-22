import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetGetAllCustomersState } from "../store/get-all-customers/get-all-customers.slice";

import {
  addCatRoute,
  allCatsRoute,
  allCustomersRoute,
  editCatRoute,
  signInRoute,
  uploadDatesAndPensDataRoute,
} from "../strings/routes";
import { resetCatDetailsManagementState } from "../store/cat-details-management/cat-details-management.slice";
import { resetGetAllCatsState } from "../store/get-all-cats/get-all-cats.slice";

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
        case allCustomersRoute:
          dispatch(resetGetAllCustomersState());
          break;
        case addCatRoute:
        case editCatRoute:
          dispatch(resetCatDetailsManagementState());
          break;
        case allCatsRoute:
          dispatch(resetGetAllCatsState());
          break;
        default:
          break;
      }

      prevLocation.current = location.pathname;
    }
  }, [location, dispatch]);
};

export default useResetStoreOnRouteChangeUseEffect;
