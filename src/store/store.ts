import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { themeReducer } from "../slice/shared/theme.slice";

const reducer = combineReducers({
    theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["auth", "user", "theme", "token"], // Specify the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true, //change when deploying
});

export type IRootState = ReturnType<typeof reducer>;
export type AppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;


export const persistor = persistStore(store);
export default store;
