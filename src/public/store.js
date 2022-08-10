import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../src/pages/login/LoginSlice"

export default configureStore({
  reducer: {
    loginInfo: loginReducer
  },
});
