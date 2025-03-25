import { requestIncomeDataAsync } from "./income.thunks";
export const extraReducers = (builder) => {
  builder
    .addCase(requestIncomeDataAsync.pending, (state) => {
      state.incomeDataIsLoading = true;
    })
    .addCase(requestIncomeDataAsync.fulfilled, (state, action) => {
      state.incomeDataIsLoading = false;
      state.incomeData = action.payload.filteredIncomeData;
      state.monthOffset = action.payload.monthOffset;
      state.incomeDataError = null;
    })
    .addCase(requestIncomeDataAsync.rejected, (state, action) => {
      state.incomeDataIsLoading = false;
      state.incomeData = null;
      state.monthOffset = 0;
      state.incomeDataError = action.payload;
    });
};
