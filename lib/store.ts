import { configureStore } from '@reduxjs/toolkit';  
import cartReducer from '@/lib/features/cart/cartSlice';

export type RootState = {
	cart: ReturnType<typeof cartReducer> 
};
const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default store;