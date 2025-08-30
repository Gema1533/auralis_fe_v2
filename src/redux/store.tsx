import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sidebarSlice from "./slices/sidebarSlice";
import loginSlice from "./slices/loginSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["sidebarSlice"],
};

const rootReducer = {
  sidebar: sidebarSlice,
  login: loginSlice,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
