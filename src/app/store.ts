import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import clientsReducer from "@/features/clients/clientsSlice";
import productsReducer from "@/features/products/productsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    clients: clientsReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type unknownT = ReturnType<typeof store.dispatch>;
