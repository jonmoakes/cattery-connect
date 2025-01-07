import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";

const middlewares = [import.meta.env.MODE === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});
