import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { Button } from "../../styles/button/button.styles";
import { TopMarginDiv } from "../../styles/div/div.styles";
// import { StyledLink } from "../../styles/link/link.styles";

// import { forgotPasswordRequestRoute } from "../../strings/routes/routes-strings";

const SignInButtons = () => {
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <TopMarginDiv>
          <Button type="submit">Sign In</Button>

          {/* <ForgotPasswordDiv>
            <StyledLink to={forgotPasswordRequestRoute}>
              forgot password?
            </StyledLink>
          </ForgotPasswordDiv> */}
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButtons;
