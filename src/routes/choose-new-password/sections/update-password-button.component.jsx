import useIsOnline from "../../../hooks/use-is-online";
import useChooseNewPasswordLogic from "../choose-new-password-hooks/use-choose-new-password-logic";

import NetworkError from "../../../components/errors/network-error.component";

import { AuthButtonDiv } from "../../../styles/div/div.styles";

import { Button } from "../../../styles/button/button.styles";

const ResetPasswordButton = () => {
  const { isOnline } = useIsOnline();
  const { newPassword, confirmNewPassword } = useChooseNewPasswordLogic();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : newPassword &&
        newPassword.length &&
        confirmNewPassword &&
        confirmNewPassword.length ? (
        <AuthButtonDiv className="new-password">
          <Button type="submit">update password</Button>
        </AuthButtonDiv>
      ) : null}
    </>
  );
};

export default ResetPasswordButton;
