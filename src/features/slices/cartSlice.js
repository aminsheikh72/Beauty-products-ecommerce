import { createSlice } from "@reduxjs/toolkit";

// ✅ Local Storage se cart data fetch kar raha hai
const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartFromStorage, 
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((p) => p.id === item.id);

      if (existItem) {
        existItem.quantity += 1; 
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); 
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems)); 
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems)); 
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.cartItems.find((item) => item.id === id);
        if (item && quantity > 0) {
          item.quantity = quantity;
        }
        localStorage.setItem("cart", JSON.stringify(state.cartItems)); 

      },
  },
});

export const { addToCart, removeFromCart, clearCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
