import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllUsersDocumentsAsync,
  fetchCatteryIdsAndOwnerNameArrayAsync,
} from "./get-all-users.thunks";

const INITIAL_STATE = {
  allUsersIsLoading: false,
  allUsers: [],
  allUsersError: null,
  allUsersCatteryIdsAndOwnerName: [],
  allUsersCatteryIdsAndOwnerNameError: null,
};

export const getAllUsersSlice = createSlice({
  name: "getAllUsers",
  initialState: INITIAL_STATE,
  reducers: {
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    resetAllUsersError(state) {
      state.allUsersError = null;
    },
    resetAllUsersCatteryIdsAndOwnerName(state) {
      state.allUsersCatteryIdsAndOwnerName = [];
    },
    resetAllUsersCatteryIdsAndOwnerNameError(state) {
      state.allUsersCatteryIdsAndOwnerNameError = null;
    },
    resetGetAllUsersState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectGetAllUsersSelectors: createSelector(
      (state) => state.getAllUsersIsLoading,
      (state) => state.allUsers,
      (state) => state.allUsersError,
      (state) => state.allUsersCatteryIdsAndOwnerName,
      (state) => state.allUsersCatteryIdsAndOwnerNameError,
      (
        allUsersIsLoading,
        allUsers,
        allUsersError,
        allUsersCatteryIdsAndOwnerName,
        allUsersCatteryIdsAndOwnerNameError
      ) => {
        return {
          allUsersIsLoading,
          allUsers,
          allUsersError,
          allUsersCatteryIdsAndOwnerName,
          allUsersCatteryIdsAndOwnerNameError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
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
  },
});

export const {
  setAllUsers,
  resetAllUsersError,
  resetAllUsersCatteryIdsAndOwnerName,
  resetAllUsersCatteryIdsAndOwnerNameError,
  resetGetAllUsersState,
} = getAllUsersSlice.actions;
export const { selectGetAllUsersSelectors } = getAllUsersSlice.selectors;

export const getAllUsersReducer = getAllUsersSlice.reducer;
