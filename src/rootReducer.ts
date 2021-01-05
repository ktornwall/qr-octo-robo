import { combineReducers } from "@reduxjs/toolkit";
import barcodesReducer from "./reducers/barcodesSlice";

const rootReducer = combineReducers({
  barcodes: barcodesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
