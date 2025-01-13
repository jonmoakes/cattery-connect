import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetCustomerState } from "../../../store/customer/customer.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetUploadDatesAndPensDataState());
    dispatch(resetCustomerState());
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
