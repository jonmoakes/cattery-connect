import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { WhiteText } from "../../../../../styles/p/p.styles";
import { YellowSpan } from "../../../../../styles/span/span.styles";
import { OrangeLink } from "../../../../../styles/link/link.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";

const OneCatInfo = ({ catsToRender }) => {
  const { customerName } = useGetDbManageAddBookingSelectors();

  return (
    <>
      <WhiteText>
        <Balancer>
          <YellowSpan>{catsToRender[0].catsName}</YellowSpan> is the only cat
          found for {getFirstNameFromString(customerName)}.
        </Balancer>
      </WhiteText>
      <BlackHr />

      <WhiteText>
        <Balancer>
          if this is correct, please continue to fill out the rest of the form.
        </Balancer>
      </WhiteText>

      <BlackHr />

      <WhiteText>
        <Balancer>
          if {getFirstNameFromString(customerName)} needs more cats adding,
          please go to the
          <br />
          <OrangeLink>Add Cat</OrangeLink>
          <br /> page and add them there.
        </Balancer>
      </WhiteText>
    </>
  );
};

export default OneCatInfo;
