import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import parseContent from "./parse-content.component";

import { AccordionDetails } from "../../styles/div/div.styles";

const HelpAccordionContent = ({ data }) => (
  <>
    {data ? (
      data.map((section) => {
        const { id, title, content } = section;
        return (
          <AccordionDetails key={id}>
            {title && (
              <CustomBalancedText type="h2">{title}</CustomBalancedText>
            )}
            <CustomBalancedText>{parseContent(content)}</CustomBalancedText>
          </AccordionDetails>
        );
      })
    ) : (
      <CustomBalancedText>error fetching help...</CustomBalancedText>
    )}
  </>
);

export default HelpAccordionContent;
