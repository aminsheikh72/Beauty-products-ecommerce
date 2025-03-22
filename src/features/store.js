import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import products from "./slices/productsSlice";
import cart from './slices/cartSlice'

const store = configureStore({
  reducer: { auth, products,cart },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export default store;
