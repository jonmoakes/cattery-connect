import useGetCardInputSelectors from "../../hooks/selectors/use-get-card-input-selectors";
import useSettleBookingPaymentFunctions from "./hooks/use-settle-booking-payment-functions";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Button } from "../../styles/button/button.styles";

const ShowPaymentInputButton = () => {
  const { showPaymentForm } = useGetCardInputSelectors();
  const { showPaymentFormAndPassDocumentId } =
    useSettleBookingPaymentFunctions();

  return (
    <>
      {!showPaymentForm ? (
        <>
          <CustomBalancedText>
            if you are happy with these details, please tap the button below to
            continue.
          </CustomBalancedText>
          <Button
            className="teal"
            type="button"
            onClick={showPaymentFormAndPassDocumentId}
          >
            continue
          </Button>
        </>
      ) : null}
    </>
  );
};

export default ShowPaymentInputButton;
