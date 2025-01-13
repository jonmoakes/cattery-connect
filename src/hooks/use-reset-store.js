import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

import { signInRoute, uploadDatesAndPensDataRoute } from "../strings/routes";

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
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
