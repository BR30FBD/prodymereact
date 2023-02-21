import { configureStore } from "@reduxjs/toolkit";
import search from "./action/search";
import signin from "./action/signin";
import signup from "./action/signup";
import users from "./action/slice"
export default configureStore({
  reducer: {
    category:users,
    searchdata:search,
    userSignUp:signup,
    userSignIn:signin
  }
});