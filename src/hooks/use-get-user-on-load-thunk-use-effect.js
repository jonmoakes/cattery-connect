import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";
import { getUserOnLoadAsync } from "../store/user/user.thunks";

import { signInRoute, signUpRoute } from "../strings/routes";
import { appwriteNoUserError } from "../strings/errors";

const useGetUserOnLoadThunkUseEffect = () => {
  const { currentUser, currentUserError } = useGetCurrentUserSelectors();

  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      currentUser ||
      path === signInRoute ||
      path === signUpRoute ||
      currentUserError === appwriteNoUserError
    )
      return;
    dispatch(getUserOnLoadAsync());
  }, [dispatch, currentUser, path, currentUserError]);
};

export default useGetUserOnLoadThunkUseEffect;
