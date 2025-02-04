import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { WhiteText } from "../../../../../styles/p/p.styles";
import { YellowSpan } from "../../../../../styles/span/span.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";

const OneCatInfo = ({ catsToRender }) => {
  const { customerName } = useGetDbManageAddBookingSelectors();

  return (
    <>
      <BlackHr />
      <WhiteText>
        <Balancer>
          <YellowSpan>{catsToRender[0].catsName}</YellowSpan> is the only cat
          found for {getFirstNameFromString(customerName)}.
        </Balancer>
      </WhiteText>
      <WhiteText>
        <Balancer>continue filling out the form if this is correct.</Balancer>
      </WhiteText>
    </>
  );
};

export default OneCatInfo;
