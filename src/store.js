import { configureStore } from "@reduxjs/toolkit";
import search from "./action/search";
import users from "./action/slice"
export default configureStore({
  reducer: {
    category:users,
    searchdata:search
  }
});