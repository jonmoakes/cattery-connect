import { useSelector } from "react-redux";

import { selectGetAllUsersSelectors } from "../../store/get-all-users/get-all-users.slice";

const useGetAllUsersSelectors = () => {
  const {
    allUsersIsLoading,
    allUsers,
    allUsersError,
    allUsersCatteryIdsAndOwnerName,
    allUsersCatteryIdsAndOwnerNameError,
  } = useSelector(selectGetAllUsersSelectors);

  return {
    allUsersIsLoading,
    allUsers,
    allUsersError,
    allUsersCatteryIdsAndOwnerName,
    allUsersCatteryIdsAndOwnerNameError,
  };
};

export default useGetAllUsersSelectors;
