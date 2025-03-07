import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

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
  extraReducers,
});

export const {
  setAllUsers,
  resetAllUsersError,
  resetAllUsersCatteryIdsAndOwnerName,
  resetAllUsersCatteryIdsAndOwnerNameError,
  resetGetAllUsersState,
} = getAllUsersSlice.actions;

export const getAllUsersReducer = getAllUsersSlice.reducer;
