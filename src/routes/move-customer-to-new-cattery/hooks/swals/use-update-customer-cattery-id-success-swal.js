import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { updateCustomersCatsCatteryIdsAsync } from "../../../../store/move-customer-to-new-cattery/move-customer-to-new-cattery-thunks";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { updateCatsCatteryIdsMessage } from "../../../../strings/info";

const useUpdateCustomerCatteryIdSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const updateCustomerCatteryIdSuccessSwal = useCallback(
    (setSwalConfirmed, customerId, newCatteryId) => {
      fireSwal(
        "success",
        updateCatsCatteryIdsMessage,
        "",
        0,
        "continue",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          dispatch(
            updateCustomersCatsCatteryIdsAsync({ customerId, newCatteryId })
          );
        }
      });
    },
    [dispatch, fireSwal]
  );

  return { updateCustomerCatteryIdSuccessSwal };
};

export default useUpdateCustomerCatteryIdSuccessSwal;
