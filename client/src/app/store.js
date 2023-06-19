import apiSlice from "../features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})

export const AppDispatch = store.dispatch;