import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetCustomerDetailsManagementState } from "../../../store/customer-details-management/customer-details-management.slice";
import { resetCatDetailsManagementState } from "../../../store/cat-details-management/cat-details-management.slice";
import { resetGetAllCustomersState } from "../../../store/get-all-customers/get-all-customers.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetUploadDatesAndPensDataState());
    dispatch(resetCustomerDetailsManagementState());
    dispatch(resetCatDetailsManagementState());
    dispatch(resetGetAllCustomersState());
    localStorage.clear();
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
