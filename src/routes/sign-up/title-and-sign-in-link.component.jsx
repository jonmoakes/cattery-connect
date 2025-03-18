import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv, UnderTitleContainer } from "../../styles/div/div.styles";

import { signInRoute } from "../../strings/routes";

const TitleAndSignInLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <CustomBalancedText type="h1">sign up</CustomBalancedText>
      <UnderTitleContainer>
        <CustomBalancedText>already have an account?</CustomBalancedText>
        <MinimalButton
          className="teal"
          onClick={() => hamburgerHandlerNavigate(signInRoute)}
        >
          sign in
        </MinimalButton>
      </UnderTitleContainer>
    </ParentDiv>
  );
};

export default TitleAndSignInLink;
