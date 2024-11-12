import { dataCart } from '@/app/components/cart-block/data';
import { CartState } from '@/app/types/cart-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  items: dataCart,
  checked: false,
  totalQuantity: 3,
  totalPrice: 37932,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem(state, action: PayloadAction<string>) {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.checked = false;
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 0) + 1;
        state.totalPrice += item.price;
        state.totalQuantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && typeof item.quantity === 'number' && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
        state.totalQuantity -= 1;
      }
    },
    toggleChecked(state) {
      state.checked = !state.checked;
    },

  },
});

export const { removeItem, clearCart, increaseQuantity, decreaseQuantity, toggleChecked } = cartSlice.actions;

export default cartSlice.reducer;
