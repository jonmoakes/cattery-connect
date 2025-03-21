import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";

import { attemptPaymentAsync } from "../../../store/handle-payment/handle-payment-thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { getCatteryName } from "../../../functions/get-cattery-name";
import { confirmMakePaymentMessage } from "../../../strings/confirms";

const useConfirmPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const confirmPayment = async (catteryId, totalCost, name, email) => {
    const confirmResult = () => {
      dispatch(
        attemptPaymentAsync({
          stripe,
          elements,
          catteryId,
          amount: totalCost,
          name,
          email,
        })
      );
    };

    const priceForUi = (totalCost / 100).toFixed(2);
    const catteryName = getCatteryName(catteryId);

    confirmSwal(
      confirmMakePaymentMessage(priceForUi, catteryName),
      "",
      `yes, pay £${priceForUi}`,
      "",
      confirmResult,
      null
    );
  };

  return { confirmPayment };
};

export default useConfirmPayment;
