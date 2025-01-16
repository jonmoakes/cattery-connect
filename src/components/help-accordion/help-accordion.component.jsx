import { useState } from "react";

import HelpAccordionContent from "./help-accordion-content.component";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes";

const HelpAccordion = ({ openText, data }) => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <Accordion {...{ showHelp }}>
        <>
          <AccordionTitle
            {...{ showHelp }}
            onClick={() => setShowHelp(!showHelp)}
          >
            <div>{showHelp ? "ok, close" : openText}</div>
            <>{showHelp ? "-" : "+"}</>
          </AccordionTitle>

          {showHelp ? (
            <AccordionContent>
              <HelpAccordionContent {...{ data }} />

              <p>
                please <StyledLink to={contactRoute}>contact us</StyledLink> if
                you need any help!
              </p>
              <MinimalButton
                className="accordion"
                onClick={() => setShowHelp(false)}
              >
                Ok, Close
              </MinimalButton>
            </AccordionContent>
          ) : null}
        </>
      </Accordion>
    </>
  );
};

export default HelpAccordion;
