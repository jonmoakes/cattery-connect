import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCatsAsync,
  fetchCatsOwnerDetailsAsync,
} from "./get-all-cats.thunks";

const INITIAL_STATE = {
  getAllCatsIsLoading: false,
  fetchOwnerDetailsIsLoading: false,
  allCats: [],
  selectedCatsName: "",
  selectedCatsOwnerCustomerDocumentId: "",
  selectedCatsOwnerCustomerId: "",
  selectedCatsOwnerDetails: [],
  getAllCatsError: null,
  getCatsOwnerDetailsError: null,
};

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
    setSelectedCatsOwnerCustomerDocumentId(state, action) {
      state.selectedCatsOwnerCustomerDocumentId = action.payload;
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
  selectors: {
    selectGetAllCatsSelectors: createSelector(
      (state) => state.getAllCatsIsLoading,
      (state) => state.fetchOwnerDetailsIsLoading,
      (state) => state.allCats,
      (state) => state.selectedCatsName,
      (state) => state.selectedCatsOwnerCustomerDocumentId,
      (state) => state.selectedCatsOwnerCustomerId,
      (state) => state.selectedCatsOwnerDetails,
      (state) => state.getAllCatsError,
      (state) => state.getCatsOwnerDetailsError,
      (
        getAllCatsIsLoading,
        fetchOwnerDetailsIsLoading,
        allCats,
        selectedCatsName,
        selectedCatsOwnerCustomerDocumentId,
        selectedCatsOwnerCustomerId,
        selectedCatsOwnerDetails,
        getAllCatsError,
        getCatsOwnerDetailsError
      ) => {
        return {
          getAllCatsIsLoading,
          fetchOwnerDetailsIsLoading,
          allCats,
          selectedCatsName,
          selectedCatsOwnerCustomerDocumentId,
          selectedCatsOwnerCustomerId,
          selectedCatsOwnerDetails,
          getAllCatsError,
          getCatsOwnerDetailsError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCatsAsync.pending, (state) => {
        state.getAllCatsIsLoading = true;
      })
      .addCase(fetchAllCatsAsync.fulfilled, (state, action) => {
        state.getAllCatsIsLoading = false;
        state.allCats = action.payload;
        state.getAllCatsError = null;
      })
      .addCase(fetchAllCatsAsync.rejected, (state, action) => {
        state.getAllCatsIsLoading = false;
        state.allCats = [];
        state.getAllCatsError = action.payload;
      })
      .addCase(fetchCatsOwnerDetailsAsync.pending, (state) => {
        state.fetchOwnerDetailsIsLoading = true;
      })
      .addCase(fetchCatsOwnerDetailsAsync.fulfilled, (state, action) => {
        state.fetchOwnerDetailsIsLoading = false;
        state.selectedCatsOwnerDetails = action.payload;
        state.getCatsOwnerDetailsError = null;
      })
      .addCase(fetchCatsOwnerDetailsAsync.rejected, (state, action) => {
        state.fetchOwnerDetailsIsLoading = false;
        state.selectedCatsOwnerDetails = [];
        state.getCatsOwnerDetailsError = action.payload;
      });
  },
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
export const { selectGetAllCatsSelectors } = getAllCatsSlice.selectors;

export const getAllCatsReducer = getAllCatsSlice.reducer;
