import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetUpdateEmailSelectors from "../../../hooks/selectors/use-get-update-email-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/selectors/use-get-password-is-visible-selectors";
import { hideUpdateEmailPasswordIsVisible } from "../../../store/password-is-visible/password-is-visible.slice";

const useHideUpdateEmailPasswordOnEmpty = () => {
  const { updateEmailPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { password } = useGetUpdateEmailSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (updateEmailPasswordIsVisible && !password.length) {
      dispatch(hideUpdateEmailPasswordIsVisible());
    }
  }, [password, updateEmailPasswordIsVisible, dispatch]);
};

export default useHideUpdateEmailPasswordOnEmpty;
