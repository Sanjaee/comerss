import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

store.subscribe(() => {});

export default store;
