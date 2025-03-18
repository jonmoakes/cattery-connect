import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { AuthButtonDiv } from "../../styles/div/div.styles";

const SignUpButton = () => {
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <AuthButtonDiv>
          <BlackHr />
          <Button type="submit">Sign up</Button>
        </AuthButtonDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignUpButton;
