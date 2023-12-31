import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { themeReducer } from "../slice/shared/theme.slice";
import sessionStorage from 'redux-persist/lib/storage';
import { tokenReducer } from "../slice/token.slice";
import { episodeReducer } from "../slice/episode.slice";

const reducer = combineReducers({
    theme: themeReducer,
    token: tokenReducer,
    episode: episodeReducer
});

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["theme"], // Specify the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true, //change when deploying
});

export type IRootState = ReturnType<typeof reducer>;
export type AppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;


export const persistor = persistStore(store);
export default store;
