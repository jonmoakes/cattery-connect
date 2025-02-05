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
            {title && <h2>{title}</h2>}
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
