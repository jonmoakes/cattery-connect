import { Navigate, useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import SkeletonBox from "../skeleton-box/skeleton-box.component";

import { accountRoute, signInRoute } from "../../strings/routes";

const AuthNavAndLoader = () => {
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();
  const location = useLocation();

  return (
    <>
      {currentUser && <Navigate replace to={accountRoute} />}
      {currentUserIsLoading ? (
        <SkeletonBox
          loadingText={
            location.pathname === signInRoute
              ? "Signing You In..."
              : "Signing You Up..."
          }
        />
      ) : null}
    </>
  );
};

export default AuthNavAndLoader;
