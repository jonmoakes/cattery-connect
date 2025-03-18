import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { Button } from "../../styles/button/button.styles";
import { ForgotPasswordDiv, AuthButtonDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { forgotPasswordRequestRoute } from "../../strings/routes";

const SignInButtons = () => {
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <AuthButtonDiv>
          <Button type="submit">Sign In</Button>
          <BlackHr />

          <ForgotPasswordDiv>
            <CustomSpan
              type="link"
              className="white"
              to={forgotPasswordRequestRoute}
            >
              forgot password?
            </CustomSpan>
          </ForgotPasswordDiv>
        </AuthButtonDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButtons;
