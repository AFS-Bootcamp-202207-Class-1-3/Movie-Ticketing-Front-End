import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginInfo: { userInfo: {}, loginStatus: false },
};

const LoginSlice = createSlice({
  name: "loginInfo",
  initialState,
  reducers: {
    addLoginInfo(state, action) {
      return {
        loginInfo: action.payload,
      };
    },
  },
});
export const { addLoginInfo } = LoginSlice.actions;
export default LoginSlice.reducer;
