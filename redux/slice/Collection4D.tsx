import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataType } from "../../component/Type/ProductType";
import { RootState } from "../store/store";
interface Collection4dType {
  Collection4dList: DataType[];
  Collection4d: DataType;
}
const initialState: Collection4dType = {
  Collection4dList: [],
  Collection4d: null,
};
const Collection4D = createSlice({
  name: "collection4dList",
  initialState: initialState,
  reducers: {
    setCollection4dList: (state, action: PayloadAction<DataType[]>) => {
      state.Collection4dList = action.payload;
    },
    setCollection4d: (state, action: PayloadAction<DataType>) => {
      state.Collection4d = action.payload;
    },
  },
});

export default Collection4D.reducer;
export const { setCollection4d, setCollection4dList } = Collection4D.actions;

export const Collection4dList = (state: RootState) =>
  state.Collection4D.Collection4dList;

export const Collection4d = (state: RootState) =>
  state.Collection4D.Collection4d;
