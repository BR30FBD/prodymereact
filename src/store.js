import { configureStore } from "@reduxjs/toolkit";
import getprofile from "./action/getprofile";
import search from "./action/search";
import signin from "./action/signin";
import signup from "./action/signup";
import users from "./action/slice"
import updateprofile from "./action/updateprofile";
export default configureStore({
  reducer: {
    category:users,
    searchdata:search,
    userSignUp:signup,
    userSignIn:signin,
    userGetProfile:getprofile,
    ueserupdateprofile:updateprofile,
  }
});