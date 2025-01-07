import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { TopMarginDiv } from "../../styles/div/div.styles";

const SignUpButton = () => {
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <TopMarginDiv>
          <BlackHr />
          <Button type="submit">Sign Up</Button>

          <BlackHr />
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignUpButton;
