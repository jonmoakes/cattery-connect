import { useDispatch } from "react-redux";

import useFireSwal from "./use-fire-swal";
import useResetAllStoreOnSignOut from "./use-reset-all-store-on-sign-out";
import useHamburgerHandlerNavigate from "./use-hamburger-handler-navigate";
import { signOutAsync } from "../store/user/user.thunks";

import { errorReceivedMessage } from "../strings/errors";
import { signInRoute } from "../strings/routes";

const useSignOutSubmitThunk = () => {
  const { fireSwal } = useFireSwal();

  const { resetAllStoreOnSignOut } = useResetAllStoreOnSignOut();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const signOutSubmitThunk = () => {
    dispatch(signOutAsync()).then((resultAction) => {
      if (signOutAsync.fulfilled.match(resultAction)) {
        hamburgerHandlerNavigate(signInRoute);
        fireSwal(
          "success",
          "successfully signed out!",
          "",
          2000,
          "",
          false,
          "",
          true
        );
        resetAllStoreOnSignOut();
      } else if (signOutAsync.rejected.match(resultAction)) {
        if (resultAction.error.message === "Rejected") {
          const error = resultAction.payload;
          fireSwal(
            "error",
            errorReceivedMessage(
              "sorry, there was an error signing out.",
              error
            ),
            "",
            0,
            "",
            false,
            "",
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              window.location.reload();
            }
          });
        }
      }
    });
  };

  return { signOutSubmitThunk };
};

export default useSignOutSubmitThunk;
