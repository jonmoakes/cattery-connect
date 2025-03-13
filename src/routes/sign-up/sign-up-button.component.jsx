import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { AuthButtonDiv } from "../../styles/div/div.styles";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import { signInRoute } from "../../strings/routes";

const SignUpButton = () => {
  const { isOnline } = useIsOnline();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {isOnline ? (
        <AuthButtonDiv>
          <BlackHr />
          <Button type="submit">Sign up</Button>
          <BlackHr />
          <CustomBalancedText>already have an account?</CustomBalancedText>
          <Button
            onClick={() => hamburgerHandlerNavigate(signInRoute)}
            type="button"
          >
            Sign In!
          </Button>
          <BlackHr />
        </AuthButtonDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignUpButton;
