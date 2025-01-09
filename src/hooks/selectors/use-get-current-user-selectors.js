import { useSelector } from "react-redux";
import { selectCurrentUserSelectors } from "../../store/user/user.slice";

const useGetCurrentUserSelectors = () => {
  const { currentUser, currentUserIsLoading, currentUserError } = useSelector(
    selectCurrentUserSelectors
  );

  const {
    email,
    id,
    name,
    phoneNumber,
    provider,
    role,
    catteryId,
    address,
    createdAt,
  } = currentUser ?? {};

  return {
    currentUser,
    currentUserIsLoading,
    currentUserError,
    email,
    id,
    name,
    phoneNumber,
    provider,
    role,
    catteryId,
    address,
    createdAt,
  };
};

export default useGetCurrentUserSelectors;
