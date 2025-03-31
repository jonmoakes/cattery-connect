import { useEffect, useState } from "react";

import useGetMoveCustomerToNewCatterySelectors from "../../../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";

import useUpdateCustomerCatteryIdSuccessSwal from "../swals/use-update-customer-cattery-id-success-swal";
import useUpdateCustomerCatteryIdFailedSwal from "../swals/use-update-customer-cattery-id-failed-swal";

const useUpdateCustomerCatteryIdResultSwalUseEffect = () => {
  const {
    updateCustomerCatteryIdResult,
    updateCustomerCatteryIdError,
    customerId,
    newCatteryId,
  } = useGetMoveCustomerToNewCatterySelectors();
  const { updateCustomerCatteryIdSuccessSwal } =
    useUpdateCustomerCatteryIdSuccessSwal();
  const { updateCustomerCatteryIdFailedSwal } =
    useUpdateCustomerCatteryIdFailedSwal();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  useEffect(() => {
    if (
      (!updateCustomerCatteryIdResult && !updateCustomerCatteryIdError) ||
      swalConfirmed
    )
      return;

    if (updateCustomerCatteryIdResult === "fulfilled") {
      updateCustomerCatteryIdSuccessSwal(
        setSwalConfirmed,
        customerId,
        newCatteryId
      );
    } else if (updateCustomerCatteryIdResult === "rejected") {
      updateCustomerCatteryIdFailedSwal(updateCustomerCatteryIdError);
    }
  }, [
    customerId,
    newCatteryId,
    swalConfirmed,
    updateCustomerCatteryIdError,
    updateCustomerCatteryIdFailedSwal,
    updateCustomerCatteryIdResult,
    updateCustomerCatteryIdSuccessSwal,
  ]);
};

export default useUpdateCustomerCatteryIdResultSwalUseEffect;
