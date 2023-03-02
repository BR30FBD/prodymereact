import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IP_ADDRESS } from "../ip";

export const userSlice = createSlice({
  name: "search",
  initialState: {
    list: []
  },
  reducers: {
    // action
    setSearchList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setSearchList } = userSlice.actions;

export const searchdata = (a,b) => (dispatch) => {
  axios
    .get(`${IP_ADDRESS}api/searchFilter/${a}/${b}`)
    .then((response) => {
      if(response.data.status===200){

      }
      dispatch(setSearchList(response.data.data));
      
    })
    .catch((error) => console.log(error,"myerr"));
};

export default userSlice.reducer;
