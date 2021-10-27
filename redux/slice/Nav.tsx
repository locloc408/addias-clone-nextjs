import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
interface Open {
  open: boolean;
}
const initialState: Open = {
  open: false,
};
export const Nav = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = Nav.actions;
export const open = (state: RootState) => state.NavReducer.open;
export default Nav.reducer;
