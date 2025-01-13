import { Navigate } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import SkeletonBox from "../skeleton-box/skeleton-box.component";

import { accountRoute } from "../../strings/routes";

const AuthNavAndLoader = () => {
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();

  return (
    <>
      {currentUser && <Navigate replace to={accountRoute} />}
      {currentUserIsLoading ? (
        <SkeletonBox loadingText={"Signing You In..."} />
      ) : null}
    </>
  );
};

export default AuthNavAndLoader;
