import { createSlice } from "@reduxjs/toolkit";
import { ProductListType } from "../types";

const initialState: ProductListType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const hasId = state.some((item) => item.id === action.payload.id);

      if (hasId) {
        state = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      } else {
        state.push({
          ...action.payload,
          cartQuantity: action.payload.cartQuantity + 1,
        });
      }
    },
    increment: (state, action) => {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item;
      });
    },
    decrement: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              cartQuantity: item.cartQuantity > 1 ? item.cartQuantity - 1 : 1,
            }
          : item
      );
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
