import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { Action, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { GetBoxesReducer } from "./boxSlices";

const reducers = combineReducers({
  boxes: GetBoxesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
