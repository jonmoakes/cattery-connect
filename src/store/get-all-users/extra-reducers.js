import {
  fetchAllUsersDocumentsAsync,
  fetchCatteryIdsAndOwnerNameArrayAsync,
} from "./get-all-users.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(fetchAllUsersDocumentsAsync.pending, (state) => {
      state.allUsersIsLoading = true;
    })
    .addCase(fetchAllUsersDocumentsAsync.fulfilled, (state, action) => {
      state.allUsersIsLoading = false;
      state.allUsers = action.payload;
      state.allUsersError = null;
    })
    .addCase(fetchAllUsersDocumentsAsync.rejected, (state, action) => {
      state.allUsersIsLoading = false;
      state.allUsers = [];
      state.allUsersError = action.payload;
    })
    .addCase(fetchCatteryIdsAndOwnerNameArrayAsync.pending, (state) => {
      state.allUsersIsLoading = true;
    })
    .addCase(
      fetchCatteryIdsAndOwnerNameArrayAsync.fulfilled,
      (state, action) => {
        state.allUsersIsLoading = false;
        state.allUsersCatteryIdsAndOwnerName = action.payload;
        state.allUsersCatteryIdsAndOwnerNameError = null;
      }
    )
    .addCase(
      fetchCatteryIdsAndOwnerNameArrayAsync.rejected,
      (state, action) => {
        state.allUsersIsLoading = false;
        state.allUsersCatteryIdsAndOwnerName = [];
        state.allUsersCatteryIdsAndOwnerNameError = action.payload;
      }
    );
};
