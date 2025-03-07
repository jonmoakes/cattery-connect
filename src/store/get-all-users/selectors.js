import { createSelector } from "@reduxjs/toolkit";

export const selectGetAllUsersSelectors = createSelector(
  (state) => state.getAllUsers,
  (getAllUsers) => ({
    allUsersIsLoading: getAllUsers.allUsersIsLoading,
    allUsers: getAllUsers.allUsers,
    allUsersError: getAllUsers.allUsersError,
    allUsersCatteryIdsAndOwnerName: getAllUsers.allUsersCatteryIdsAndOwnerName,
    allUsersCatteryIdsAndOwnerNameError:
      getAllUsers.allUsersCatteryIdsAndOwnerNameError,
  })
);
