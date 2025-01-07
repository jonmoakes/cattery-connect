import { useSelector } from "react-redux";
import { selectCurrentUserSelectors } from "../../store/user/user.slice";

const useGetCurrentUserSelectors = () => {
  const { currentUser, currentUserIsLoading, currentUserError } = useSelector(
    selectCurrentUserSelectors
  );

  const { email, id, name, phoneNumber, provider } = currentUser ?? {};

  return {
    currentUser,
    currentUserIsLoading,
    currentUserError,
    id,
    name,
    email,
    phoneNumber,
    provider,
  };
};

export default useGetCurrentUserSelectors;
