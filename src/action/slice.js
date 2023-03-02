import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IP_ADDRESS } from "../ip";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: []
  },
  reducers: {
    // action
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setUserList } = userSlice.actions;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get(`${IP_ADDRESS}api/getCategory/`)
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
