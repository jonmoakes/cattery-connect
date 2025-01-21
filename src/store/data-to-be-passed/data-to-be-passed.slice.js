import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  dataToBePassed: {},
};

export const dataToBePassedSlice = createSlice({
  name: "dataToBePassed",
  initialState: INITIAL_STATE,
  reducers: {
    setDataToBePassed(state, action) {
      state.dataToBePassed = action.payload;
    },
    resetDataToBePassedState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDataToBePassedSelectors: createSelector(
      (state) => state.dataToBePassed,
      (dataToBePassed) => {
        return {
          dataToBePassed,
        };
      }
    ),
  },
});

export const { setDataToBePassed, resetDataToBePassedState } =
  dataToBePassedSlice.actions;
export const { selectDataToBePassedSelectors } = dataToBePassedSlice.selectors;

export const dataToBePassedReducer = dataToBePassedSlice.reducer;
