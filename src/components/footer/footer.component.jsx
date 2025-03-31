import useFooterHooks from "./footer-hooks/use-footer-hooks";

import Copyright from "./copyright.component";
import LinksMap from "./links-map.component";
import { FooterContainer, ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Button } from "../../styles/button/button.styles";
import { useState } from "react";

const Footer = () => {
  const { shouldShowFooter } = useFooterHooks();
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      {shouldShowFooter ? (
        <FooterContainer>
          <BlackHr />
          <ParentDiv>
            <Button className="teal" onClick={() => setShowLinks(!showLinks)}>
              {showLinks ? "hide" : ""} legal links
            </Button>
            {showLinks ? (
              <>
                <BlackHr />
                <LinksMap />
              </>
            ) : null}
            <Copyright />
          </ParentDiv>
        </FooterContainer>
      ) : null}
    </>
  );
};

export default Footer;
