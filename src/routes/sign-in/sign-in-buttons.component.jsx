import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { Button } from "../../styles/button/button.styles";
import { ForgotPasswordDiv, AuthButtonDiv } from "../../styles/div/div.styles";
import { WhiteLink } from "../../styles/link/link.styles";

import { forgotPasswordRequestRoute } from "../../strings/routes";
import { BlackHr } from "../../styles/hr/hr.styles";

const SignInButtons = () => {
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <AuthButtonDiv>
          <Button type="submit">Sign In</Button>

          <BlackHr />
          <ForgotPasswordDiv>
            <WhiteLink to={forgotPasswordRequestRoute}>
              forgot password?
            </WhiteLink>
          </ForgotPasswordDiv>
        </AuthButtonDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButtons;
