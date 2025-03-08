import useFooterHooks from "./footer-hooks/use-footer-hooks";

import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { FooterLinkButton } from "../../styles/button/button.styles";
import { FooterLinksDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { links } from "./link-data";

const LinksMap = () => {
  const { confirmChange } = useFooterHooks();

  return (
    <>
      <CustomBalancedText type="h3">legal</CustomBalancedText>

      {links.map((link) => {
        const { id, text, route } = link;
        return (
          <FooterLinksDiv key={id}>
            <FooterLinkButton
              type="button"
              onClick={() => confirmChange(route)}
            >
              {text}
            </FooterLinkButton>
            <BlackHr />
          </FooterLinksDiv>
        );
      })}
    </>
  );
};

export default LinksMap;
