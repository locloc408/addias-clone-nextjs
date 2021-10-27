import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ProductList from "../slice/ProductList";
import NavReducer from "../slice/Nav";
import CartReducer from "../slice/Cart";
import UserReducer from "../slice/User";
import Collection4D from "../slice/Collection4D";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["NavReducer"],
};
const reducers = combineReducers({
  ProductList,
  NavReducer,
  CartReducer,
  UserReducer,
  Collection4D,
});
const _persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "your/action/type",
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch; // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;
export default store;
