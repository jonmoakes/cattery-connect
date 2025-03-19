import { useSelector } from "react-redux";
import { selectCurrentUserSelectors } from "../../store/user/selectors";

const useGetCurrentUserSelectors = () => {
  const {
    currentUser,
    currentUserIsLoading,
    currentUserError,
    signOutIsLoading,
  } = useSelector(selectCurrentUserSelectors);

  const { email, id, name, role, catteryId, customerId } = currentUser ?? {};

  return {
    currentUser,
    currentUserIsLoading,
    currentUserError,
    email,
    id,
    name,
    role,
    catteryId,
    customerId,
    signOutIsLoading,
  };
};

export default useGetCurrentUserSelectors;
