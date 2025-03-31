import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  resetUpdateCustomerCatteryIdError,
  resetUpdateCustomerCatteryIdResult,
} from "../../../../store/move-customer-to-new-cattery/move-customer-to-new-cattery-slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

const useUpdateCustomerCatteryIdFailedSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const updateCustomerCatteryIdFailedSwal = useCallback(
    (updateCustomerCatteryIdError) => {
      fireSwal(
        "error",
        "the customers Cattery ID could not be updated",
        updateCustomerCatteryIdError,
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdateCustomerCatteryIdResult());
          dispatch(resetUpdateCustomerCatteryIdError());
        }
      });
    },
    [dispatch, fireSwal]
  );

  return { updateCustomerCatteryIdFailedSwal };
};

export default useUpdateCustomerCatteryIdFailedSwal;
