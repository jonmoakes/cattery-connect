import { useDispatch } from "react-redux";

import useGetSignedInCustomersBookingsSelectors from "../../../hooks/selectors/use-get-signed-in-customers-bookings-selectors";

import { setShowPaymentForm } from "../../../store/card-input/card-input.slice";
import { setDocumentIdOfBooking } from "../../../store/handle-payment/handle-payment-slice";

const useSettleBookingPaymentFunctions = () => {
  const { $id } = useGetSignedInCustomersBookingsSelectors();
  const dispatch = useDispatch();

  const showPaymentFormAndPassDocumentId = () => {
    const documentIdOfBooking = $id;
    dispatch(setShowPaymentForm(true));
    dispatch(setDocumentIdOfBooking(documentIdOfBooking));
  };

  return { showPaymentFormAndPassDocumentId };
};

export default useSettleBookingPaymentFunctions;
