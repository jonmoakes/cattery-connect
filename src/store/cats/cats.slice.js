import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultCatsDetails = {
  catsName: "",
  catsBreed: "",
  catsAge: "",
  catsGender: "",
};

const INITIAL_STATE = {
  catsDetails: defaultCatsDetails,
};

export const catsSlice = createSlice({
  name: "cats",
  initialState: INITIAL_STATE,
  reducers: {
    setCatsDetails(state, action) {
      state.catsDetails = action.payload;
    },
    resetCatsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectCatsDetailsSelectors: createSelector(
      (state) => state.catsDetails,
      (catsDetails) => {
        return {
          catsDetails,
        };
      }
    ),
  },
});

export const { setCatsDetails, resetCatsState } = catsSlice.actions;
export const { selectCatsDetailsSelectors } = catsSlice.selectors;

export const catsReducer = catsSlice.reducer;
