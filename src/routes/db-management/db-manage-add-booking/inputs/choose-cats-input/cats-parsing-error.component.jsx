import useAddBookingVariables from "../../db-manage-add-booking-hooks/use-add-booking-variables";

import CustomBalancedText from "../../../../../components/custom-balanced-text/custom-balanced-text.component";

import { ErrorDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { MinimalButton } from "../../../../../styles/button/button.styles";

const CatsParsingError = () => {
  const { error } = useAddBookingVariables();

  return (
    <ErrorDiv className="parse-error">
      <CustomBalancedText>
        there was an error fetching the customers cats.
      </CustomBalancedText>
      <CustomBalancedText>the error received was:</CustomBalancedText>
      <BlackHr />
      <CustomBalancedText>{error}</CustomBalancedText>
      <BlackHr />
      <CustomBalancedText>
        tap the button below to reload the page and if the error persists,
        please contact jonathan.
      </CustomBalancedText>
      <MinimalButton
        className="margin-bottom"
        type="button"
        onClick={() => window.location.reload()}
      >
        reload
      </MinimalButton>
    </ErrorDiv>
  );
};

export default CatsParsingError;
