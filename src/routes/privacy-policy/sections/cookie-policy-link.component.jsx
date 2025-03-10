import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Button } from "../../../styles/button/button.styles";
import { cookiesRoute } from "../../../strings/routes";

const CookiePolicyLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <Button
        className="teal"
        onClick={() => hamburgerHandlerNavigate(cookiesRoute)}
      >
        view cookie policy
      </Button>
    </ParentDiv>
  );
};

export default CookiePolicyLink;
