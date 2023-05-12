import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./reducers";

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#correct-typings-for-the-dispatch-type
 */

export const store = configureStore({
  reducer: rootReducer,
});
