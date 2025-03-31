import { useDispatch } from "react-redux";

import useGetMoveCustomerToNewCatterySelectors from "../../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";
import { updateCustomersCatteryIdAsync } from "../../../store/move-customer-to-new-cattery/move-customer-to-new-cattery-thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { updateCustomersCatteryIdMessage } from "../../../strings/confirms";

const useUpdateCustomersCatteryId = () => {
  const { customerDocumentId, newCatteryId } =
    useGetMoveCustomerToNewCatterySelectors();
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const updateCustomersCatteryId = (e) => {
    e.preventDefault();

    const confirmResult = () => {
      dispatch(
        updateCustomersCatteryIdAsync({ customerDocumentId, newCatteryId })
      );
    };

    confirmSwal(
      updateCustomersCatteryIdMessage(newCatteryId),
      "",
      "yes, update it!",
      "",
      confirmResult,
      null
    );
  };

  return { updateCustomersCatteryId };
};

export default useUpdateCustomersCatteryId;
