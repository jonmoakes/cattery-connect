import { CardElement } from "@stripe/react-stripe-js";

import useGetCardInputSelectors from "../../hooks/selectors/use-get-card-input-selectors";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";

import useHandleCardInputChange from "./hooks/use-handle-card-input-change";
import useIsOnline from "../../hooks/use-is-online";
import useConfirmPayment from "./hooks/use-confirm-payment";

import NetworkError from "../../components/errors/network-error.component";
import CardInputErrors from "./card-input-errors.component";
import Instructions from "./instructions.component";
import StripeLogo from "./stripe-logo.component";

import { CardInputDiv } from "../../styles/div/div.styles";
import { options } from "./card-input-styles";
import { Button } from "../../styles/button/button.styles";

const CardInput = ({ totalCost }) => {
  const { showConfirmButton } = useGetCardInputSelectors();
  const { catteryId, name, email } = useGetCurrentUserSelectors();
  const { attemptPaymentIsLoading } = useGetHandlePaymentSelectors();
  const { isOnline } = useIsOnline();
  const { handleCardInputChange } = useHandleCardInputChange();
  const { confirmPayment } = useConfirmPayment();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : totalCost ? (
        <>
          <CardInputErrors />
          <Instructions {...{ totalCost }} />

          <CardInputDiv>
            <CardElement {...{ options }} onChange={handleCardInputChange} />
          </CardInputDiv>

          {showConfirmButton ? (
            <Button
              type="button"
              className="teal confirm-payment"
              onClick={() => confirmPayment(catteryId, totalCost, name, email)}
              disabled={attemptPaymentIsLoading ? true : false}
            >
              settle payment
            </Button>
          ) : null}
          <StripeLogo />
        </>
      ) : null}
    </>
  );
};

export default CardInput;
