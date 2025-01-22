import { Outlet } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

const PrivateRoutes = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  return <>{currentUser ? <Outlet /> : null}</>;
};

export default PrivateRoutes;
