import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AllProductListType,
  type FinalProductListType,
  type ProductListType,
} from "../types";

const INITIAL_STATE = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

interface ProductState {
  data: FinalProductListType; // Replace 'any' with the actual type of your product data
  status: string;
}

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: {},
    status: INITIAL_STATE.IDLE,
  } as ProductState,
  reducers: {
    addProducts: (state, action: PayloadAction<FinalProductListType>) => {
      state.data = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { addProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = (limit: number) => async (dispatch: Dispatch) => {
  dispatch(setStatus(INITIAL_STATE.LOADING));

  try {
    const res = await fetch(`https://dummyjson.com/carts?limit=${limit}`);
    const data: AllProductListType = await res.json();
    const dataList: ProductListType[] = [];

    data.carts.forEach((item) => {
      dataList.push(
        ...item.products.map((product) => {
          return {
            ...product,
            cartQuantity: 0,
          };
        })
      );
    });

    const payload = {
      products: dataList,
      total: data.total,
      skip: data.skip,
      limit: data.limit,
    };

    dispatch(addProducts(payload));
    dispatch(setStatus(INITIAL_STATE.IDLE));
  } catch (err) {
    dispatch(setStatus(INITIAL_STATE.ERROR));
  }
};
