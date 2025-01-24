import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import useSignOutSubmitThunk from "../../hooks/use-sign-out-submit-thunk";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useFireSwal from "../../hooks/use-fire-swal";
import useIsOnline from "../../hooks/use-is-online";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { noNetworkMessage } from "../../strings/errors";
import {
  confirmSignOutMessage,
  yesSignOutMessage,
} from "../../strings/confirms";

const NavSignOut = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  const { signOutSubmitThunk } = useSignOutSubmitThunk();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { isOnline } = useIsOnline();

  const confirmSignOut = () => {
    confirmSwal(
      confirmSignOutMessage,
      "",
      yesSignOutMessage,
      "",
      () => signOutSubmitThunk(),
      null
    );
  };

  const showNetworkErrorSwal = () => {
    fireSwal("error", noNetworkMessage, "", 0, "", false, "", false);
  };

  return (
    <>
      {!isOnline ? (
        <NavLink onClick={showNetworkErrorSwal}>
          <BorderLink>sign out</BorderLink>
        </NavLink>
      ) : currentUser ? (
        <NavLink onClick={confirmSignOut}>
          <BorderLink>sign out</BorderLink>
        </NavLink>
      ) : null}
    </>
  );
};

export default NavSignOut;
