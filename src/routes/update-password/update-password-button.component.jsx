import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useConfirmUpdatePassword from "./update-password-hooks/use-confirm-update-password";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { BlackHr } from "../../styles/hr/hr.styles";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { Button } from "../../styles/button/button.styles";

const UpdatePasswordButton = () => {
  const { email } = useGetCurrentUserSelectors();
  const { isOnline } = useIsOnline();
  const { confirmUpdatePassword } = useConfirmUpdatePassword();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : email ? (
        <>
          <CustomBalancedText>
            the email address that we will send your password reset link to is:
          </CustomBalancedText>
          <CustomBalancedText>
            <CustomSpan type="lowercase">{email}</CustomSpan>
          </CustomBalancedText>
          <BlackHr />

          <Button
            className="teal"
            type="button"
            onClick={confirmUpdatePassword}
          >
            update password
          </Button>

          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default UpdatePasswordButton;
