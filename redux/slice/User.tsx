import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
interface User {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
}
const initialState: User = {
  email: null,
  firstName: null,
  lastName: null,
  gender: null,
};

const User = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
    },
  },
});
export const { setUser } = User.actions;
export default User.reducer;
export const email = (state: RootState) => state.UserReducer.email;
export const firstName = (state: RootState) => state.UserReducer.firstName;
export const lastName = (state: RootState) => state.UserReducer.lastName;
export const gender = (state: RootState) => state.UserReducer.gender;
