import { useSelector } from "react-redux";
import { selectCurrentUserSelectors } from "../../store/user/user.slice";

const useGetCurrentUserSelectors = () => {
  const { currentUser, currentUserIsLoading, currentUserError } = useSelector(
    selectCurrentUserSelectors
  );

  const { email, id, name, role, catteryId } = currentUser ?? {};

  return {
    currentUser,
    currentUserIsLoading,
    currentUserError,
    email,
    id,
    name,
    role,
    catteryId,
  };
};

export default useGetCurrentUserSelectors;
