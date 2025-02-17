import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";
import { rememberEnhancer, rememberReducer } from "redux-remember";

const middlewares = [import.meta.env.MODE === "development" && logger].filter(
  Boolean
);

const rememberedKeys = [
  "customerDetailsManagement",
  "catDetailsManagement",
  "cancelBooking",
];

export const store = configureStore({
  reducer: rememberReducer(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});
