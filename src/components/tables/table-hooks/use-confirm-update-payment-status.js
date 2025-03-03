import { useDispatch } from "react-redux";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { updateBookingPaymentStatusAsync } from "../../../store/bookings/bookings.thunks";
import { confirmUpdatePaymentStatusMessage } from "../../../strings/confirms";

const useConfirmUpdatePaymentStatus = () => {
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmUpdatePaymentStatus = (value, documentId, setShowButton) => {
    const valueToUpdateTo = value === "complete" ? "incomplete" : "complete";

    const confirmResult = () => {
      dispatch(updateBookingPaymentStatusAsync({ documentId }));
      if (value === "complete") {
        setShowButton(false);
      }
    };

    confirmSwal(
      confirmUpdatePaymentStatusMessage(value, valueToUpdateTo),
      "",
      "yes, change it!",
      "",
      confirmResult,
      null
    );
  };

  return { confirmUpdatePaymentStatus };
};

export default useConfirmUpdatePaymentStatus;
