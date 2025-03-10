import useFooterHooks from "./footer-hooks/use-footer-hooks";

import Copyright from "./copyright.component";
import LinksMap from "./links-map.component";
import { FooterContainer, ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const Footer = () => {
  const { shouldShowFooter } = useFooterHooks();

  return (
    <>
      {shouldShowFooter ? (
        <FooterContainer>
          <BlackHr />
          <ParentDiv>
            <LinksMap />
            <Copyright />
          </ParentDiv>
        </FooterContainer>
      ) : null}
    </>
  );
};

export default Footer;
