import useGetCardInputSelectors from "../../hooks/selectors/use-get-card-input-selectors";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { PaymentErrorDiv, WarningDiv } from "../../styles/div/div.styles";

const CardInputErrors = () => {
  const { warning, error } = useGetCardInputSelectors();

  return (
    <>
      {warning ? (
        <WarningDiv>
          <CustomBalancedText>{warning}</CustomBalancedText>
        </WarningDiv>
      ) : (
        error && (
          <PaymentErrorDiv>
            <CustomBalancedText>{error}</CustomBalancedText>
          </PaymentErrorDiv>
        )
      )}
    </>
  );
};

export default CardInputErrors;
