import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { DataType } from "../../component/Type/ProductType";
import { RootState } from "../store/store";
interface ProductList {
  ProductList: DataType[];
  Product: DataType;
}
const initialState: ProductList = {
  ProductList: [],
  Product: null,
};

const ProductsList = createSlice({
  name: "ProductsList",
  initialState,
  reducers: {
    addProductList: (state, action: PayloadAction<DataType[]>) => {
      state.ProductList = action.payload;
    },
    getProductById: (state, action: PayloadAction<DataType>) => {
      state.Product = action.payload;
    },
  },
});
export const { addProductList, getProductById } = ProductsList.actions;
export default ProductsList.reducer;
export const ProductList = (state: RootState) => state.ProductList.ProductList;
export const Product = (state: RootState) => state.ProductList.Product;
