import {
  fetchAllCatsAsync,
  fetchCatsOwnerDetailsAsync,
} from "./get-all-cats.thunks";

export const extraReducers = (builder) => {
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
};
