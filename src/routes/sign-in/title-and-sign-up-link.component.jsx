import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv, UnderTitleContainer } from "../../styles/div/div.styles";

import { signUpRoute } from "../../strings/routes";

const TitleAndSignUpLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <CustomBalancedText type="h1">sign in</CustomBalancedText>
      <UnderTitleContainer>
        <CustomBalancedText>don't have an account?</CustomBalancedText>
        <MinimalButton
          className="teal"
          onClick={() => hamburgerHandlerNavigate(signUpRoute)}
        >
          sign up
        </MinimalButton>
      </UnderTitleContainer>
    </ParentDiv>
  );
};

export default TitleAndSignUpLink;
