import Balancer from "react-wrap-balancer";

import useAddBookingVariables from "../../db-manage-add-booking-hooks/use-add-booking-variables";

import { ErrorDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";

const CatsParsingError = () => {
  const { error } = useAddBookingVariables();

  return (
    <ErrorDiv className="parse-error">
      <p>
        <Balancer>there was an error fetching the customers cats.</Balancer>
      </p>
      <p>
        <Balancer>the error received was:</Balancer>
      </p>
      <BlackHr />
      <p>{error}</p>
      <BlackHr />
      <p>
        <Balancer>if the error persists, please contact jonathan</Balancer>
      </p>
    </ErrorDiv>
  );
};

export default CatsParsingError;
