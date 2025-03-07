import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const getAllCatsSlice = createSlice({
  name: "getAllCats",
  initialState: INITIAL_STATE,
  reducers: {
    setAllCats(state, action) {
      state.allCats = action.payload;
    },
    setSelectedCatsName(state, action) {
      state.selectedCatsName = action.payload;
    },
    setSelectedCatsOwnerCustomerId(state, action) {
      state.selectedCatsOwnerCustomerId = action.payload;
    },
    setSelectedCatsOwnerDetails(state, action) {
      state.selectedCatsOwnerDetails = action.payload;
    },
    resetGetAllCatsError(state) {
      state.getAllCatsError = null;
    },
    resetGetCatsOwnerDetailsError(state) {
      state.getCatsOwnerDetailsError = null;
    },
    resetGetAllCatsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setAllCats,
  setSelectedCatsName,
  setSelectedCatsOwnerCustomerDocumentId,
  setSelectedCatsOwnerCustomerId,
  setSelectedCatsOwnerDetails,
  resetGetAllCatsError,
  resetGetCatsOwnerDetailsError,
  resetGetAllCatsState,
} = getAllCatsSlice.actions;

export const getAllCatsReducer = getAllCatsSlice.reducer;
