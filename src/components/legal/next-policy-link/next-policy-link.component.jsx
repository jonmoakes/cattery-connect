import { useLocation } from "react-router-dom";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Button } from "../../../styles/button/button.styles";

import { nextPolicyData } from "./next-policy-data";

const NextPolicyLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const location = useLocation();
  const path = location.pathname;

  const { nextRoute, buttonText } = nextPolicyData[path] || {};

  return (
    <>
      {!nextRoute || !buttonText ? null : (
        <ParentDiv>
          <Button
            className="teal"
            onClick={() => hamburgerHandlerNavigate(nextRoute)}
          >
            view {buttonText}
          </Button>
        </ParentDiv>
      )}
    </>
  );
};

export default NextPolicyLink;
