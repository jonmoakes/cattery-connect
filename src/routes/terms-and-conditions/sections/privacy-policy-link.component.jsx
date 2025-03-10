import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Button } from "../../../styles/button/button.styles";
import { privacyPolicyRoute } from "../../../strings/routes";

const PrivacyPolicyLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <Button
        className="teal"
        onClick={() => hamburgerHandlerNavigate(privacyPolicyRoute)}
      >
        view privacy policy
      </Button>
    </ParentDiv>
  );
};

export default PrivacyPolicyLink;
