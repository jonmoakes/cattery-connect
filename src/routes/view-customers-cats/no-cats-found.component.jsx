import Balancer from "react-wrap-balancer";

import ViewCustomersAddCat from "./view-customers-add-cat.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { viewCatsAccordionData } from "./view-cats-accordion-data/view-cats-accordion-data";

const NoCatsFound = ({ customerDocumentId, data, customerName }) => (
  <>
    {!data.length ? (
      <ParentDiv>
        <p>
          <Balancer>no cats have been created for this customer yet.</Balancer>
        </p>

        <ViewCustomersAddCat {...{ customerDocumentId, customerName }} />

        <BlackHr />

        <HelpAccordion openText="missing data?" data={viewCatsAccordionData} />
        <BlackHr />
      </ParentDiv>
    ) : null}
  </>
);

export default NoCatsFound;
