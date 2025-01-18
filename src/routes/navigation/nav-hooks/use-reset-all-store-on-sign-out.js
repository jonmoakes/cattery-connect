import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetUploadDatesAndPensDataState } from "../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import { resetAddCustomerState } from "../../../store/add-customer/add-customer.slice";
import { resetCatDetailsManagementState } from "../../../store/cat-details-management/cat-details-management.slice";
import { resetGetAllCustomersState } from "../../../store/get-all-customers/get-all-customers.slice";
import { resetDeleteCustomerState } from "../../../store/delete-customer/delete-customer.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetUploadDatesAndPensDataState());
    dispatch(resetAddCustomerState());
    dispatch(resetCatDetailsManagementState());
    dispatch(resetGetAllCustomersState());
    dispatch(resetDeleteCustomerState());
    localStorage.clear();
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
