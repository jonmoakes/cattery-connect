import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addCatToDbAsync } from "./add-cat.thunks";

const defaultCatDetails = {
  catsName: "",
  catsBreed: "",
  catsAge: "",
  catsGender: "",
  catsMedicalInfo: "",
  vaccinationStatus: "",
  catsFeedingInfo: "",
  catsBehaviourInfo: "",
};
const INITIAL_STATE = {
  addCatIsLoading: false,
  addCatDetails: defaultCatDetails,
  addCatResult: "",
  addCatError: null,
};

export const addCatSlice = createSlice({
  name: "addCat",
  initialState: INITIAL_STATE,
  reducers: {
    setAddCatDetails(state, action) {
      state.addCatDetails = action.payload;
    },
    resetAddCatResult(state) {
      state.addCatResult = "";
    },
    resetAddCatError(state) {
      state.addCatError = null;
    },
    resetAddCatState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCatToDbAsync.pending, (state) => {
        state.addCatIsLoading = true;
      })
      .addCase(addCatToDbAsync.fulfilled, (state) => {
        state.addCatIsLoading = false;
        state.addCatResult = "fulfilled";
        state.addCatError = null;
      })
      .addCase(addCatToDbAsync.rejected, (state, action) => {
        state.addCatIsLoading = false;
        state.addCatResult = "rejected";
        state.addCatError = action.payload;
      });
  },
  selectors: {
    selectAddCatDetailsSelectors: createSelector(
      (state) => state.addCatDetails,
      (state) => state.addCatIsLoading,
      (state) => state.addCatResult,
      (state) => state.addCatError,
      (addCatDetails, addCatIsLoading, addCatResult, addCatError) => {
        return {
          addCatDetails,
          addCatIsLoading,
          addCatResult,
          addCatError,
        };
      }
    ),
  },
});

export const {
  setAddCatDetails,
  resetAddCatResult,
  resetAddCatError,
  resetAddCatState,
} = addCatSlice.actions;
export const { selectAddCatDetailsSelectors } = addCatSlice.selectors;

export const addCatReducer = addCatSlice.reducer;
