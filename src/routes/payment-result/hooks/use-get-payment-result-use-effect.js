import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";

import useErrorMakingPaymentSwal from "./swals/use-error-making-payment-swal";
import usePaymentSuccessfulSwal from "./swals/use-payment-successful-swal";

const useGetPaymentResultUseEffect = () => {
  const { noPaymentStatusAndError, errorObject, documentIdOfBooking } =
    useGetHandlePaymentSelectors();
  const { errorMakingPaymentSwal } = useErrorMakingPaymentSwal();
  const { paymentSuccessfulSwal } = usePaymentSuccessfulSwal();

  const dispatch = useDispatch();

  useEffect(() => {
    if (noPaymentStatusAndError) return;
    if (errorObject) {
      errorMakingPaymentSwal(errorObject);
    } else {
      paymentSuccessfulSwal();
    }
  }, [
    paymentSuccessfulSwal,
    dispatch,
    documentIdOfBooking,
    noPaymentStatusAndError,
    errorObject,
    errorMakingPaymentSwal,
  ]);
};

export default useGetPaymentResultUseEffect;
