import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { DataType } from "../../component/Type/ProductType";
interface Cartslice {
  numberCart: number;
  Carts: any[];
  totalPrices: number;
}
const initialState: Cartslice = {
  numberCart: 0,
  Carts: [],
  totalPrices: 0,
};

export const AddToCart = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<DataType>) => {
      const exist = state.Carts.find(
        (item: DataType) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      if (exist) {
        state.Carts.find((cart) => cart._id === action.payload._id).quantity++;
        state.numberCart++;
      } else {
        const _cart = {
          _id: action.payload._id,
          img: action.payload.img,
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
          size: action.payload.size,
        };
        state.Carts.push(_cart);
        state.numberCart++;
      }

      let xtotalPrice = 0;
      const cartQuantity = state.Carts.map((item: DataType) => item.quantity);
      const cartPrice = state.Carts.map((item: DataType) =>
        parseInt(item.price)
      );

      for (let i = 0; i < cartQuantity.length; i++) {
        xtotalPrice += cartQuantity[i] * cartPrice[i];
      }
      state.totalPrices = xtotalPrice;
      //state.totalPrices = TotalPrice;
    },
    adjustCart: (state, action: PayloadAction<DataType>) => {
      state.Carts = state.Carts.map((item: DataType) =>
        item._id === action.payload._id && item.size === action.payload.size
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
      );
      const exist = state.Carts.find(
        (item: DataType) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      //update totalPrice
      let xtotalPrice = 0;
      const cartPrice = state.Carts.map((item: DataType) =>
        parseInt(item.price)
      );

      const cartQuantity = state.Carts.map((item: DataType) => item.quantity);
      for (let i = 0; i < cartQuantity.length; i++) {
        xtotalPrice += cartQuantity[i] * cartPrice[i];
      }
      state.totalPrices = xtotalPrice;

      //updata numberCart
      const cart = state.Carts.map((item: DataType) => item.quantity);
      let numbercart = 0;
      for (let i = 0; i < cart.length; i++) {
        numbercart += cart[i];
      }
      state.numberCart = numbercart;

      //update totalprice

      //if cartquantity = 0 then update totalPrices
      if (exist.quantity === 0) {
        state.Carts = state.Carts.filter((item: DataType) => item !== exist);

        state.totalPrices = xtotalPrice;
      }
    },

    deleteCart: (state, action: PayloadAction<DataType>) => {
      const exist: DataType = state.Carts.find(
        (item: DataType) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      if (exist) {
        state.Carts = state.Carts.filter((item: DataType) => item !== exist);
      }

      const cart: number[] = state.Carts.map((item) => item.quantity);
      let numbercart = 0;
      for (let i = 0; i < cart.length; i++) {
        numbercart += cart[i];
      }
      state.numberCart = numbercart;

      let xtotalPrice = 0;
      const cartQuantity: number[] = state.Carts.map(
        (item: DataType) => item.quantity
      );
      const cartPrice = state.Carts.map((item: DataType) =>
        parseInt(item.price)
      );

      for (let i = 0; i < cartQuantity.length; i++) {
        xtotalPrice += cartQuantity[i] * cartPrice[i];
      }
      state.totalPrices = xtotalPrice;
    },
  },
});

export const { addCart, deleteCart, adjustCart } = AddToCart.actions;
export const Carts = (state: RootState) => state.CartReducer.Carts;
export const numberCart = (state: RootState) => state.CartReducer.numberCart;
export const totalPrices = (state: RootState) => state.CartReducer.totalPrices;
export default AddToCart.reducer;
