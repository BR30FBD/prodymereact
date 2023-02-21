import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    .get(`https://prodymeapi.revivingindia.com/api/searchFilter/${a}/${b}`)
    .then((response) => {
        console.log(response,"response")
      if(response.data.status===200){

      }
      dispatch(setSearchList(response.data.data));
      
    })
    .catch((error) => console.log(error,"myerr"));
};

export default userSlice.reducer;
