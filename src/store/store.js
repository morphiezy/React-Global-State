import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import TodoSlice from "./TodoSlice";
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
    todo: TodoSlice
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers)
const store = configureStore({ reducer: persistedReducer})
const persistor = persistStore(store);

export {store, persistor}