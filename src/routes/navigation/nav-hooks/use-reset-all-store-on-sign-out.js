import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetAddCustomerState } from "../../../store/add-customer/add-customer.slice";
import { resetAddCatState } from "../../../store/add-cat/add-cat.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetUploadDatesAndPensDataState());
    dispatch(resetAddCustomerState());
    dispatch(resetAddCatState());
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
