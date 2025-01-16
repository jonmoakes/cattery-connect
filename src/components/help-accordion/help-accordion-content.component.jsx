import Balancer from "react-wrap-balancer";

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
            <p>
              <Balancer>{parseContent(content)}</Balancer>
            </p>
          </AccordionDetails>
        );
      })
    ) : (
      <p>error fetching help...</p>
    )}
  </>
);

export default HelpAccordionContent;
