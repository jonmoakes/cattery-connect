import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import HelpAccordion from "../../../../../components/help-accordion/help-accordion.component";

import { WhiteText } from "../../../../../styles/p/p.styles";
import { YellowSpan } from "../../../../../styles/span/span.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";
import { addMoreCatsAccordionData } from "./add-more-cats-accordion-data";

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
      <BlackHr />

      <WhiteText>
        <Balancer>
          if this is correct, please continue to fill out the rest of the form.
        </Balancer>
      </WhiteText>

      <HelpAccordion openText="missing cats?" data={addMoreCatsAccordionData} />
    </>
  );
};

export default OneCatInfo;
