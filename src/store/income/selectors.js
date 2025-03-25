import { createSelector } from "@reduxjs/toolkit";

export const selectIncomeDataSelectors = createSelector(
  (state) => state.income,
  (income) => {
    const { incomeData, monthOffset } = income;
    const formattedIncomeData =
      incomeData &&
      incomeData.length &&
      incomeData.map((income) => {
        const createdDate = new Date(income.created * 1000);

        return {
          ...income,
          createdAtAsDateObjectForSearching: createdDate,
        };
      });

    let sortedIncomeData = null;
    if (formattedIncomeData && formattedIncomeData.length > 0) {
      sortedIncomeData = [...formattedIncomeData].sort((dataA, dataB) => {
        const createdA = dataA.created;
        const createdB = dataB.created;
        return createdB - createdA;
      });
    }

    return {
      incomeDataIsLoading: income.incomeDataIsLoading,
      sortedIncomeData,
      incomeDataError: income.incomeDataError,
      monthOffset,
    };
  }
);
