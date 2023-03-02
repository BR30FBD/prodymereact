import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IP_ADDRESS } from "../ip";
export const userSlice = createSlice({
  name: "usersgetprofile",
  initialState: {
    wishlist: []
  },
  reducers: {
    // action
    setwishlist: (state, action) => {
      state.wishlist = action.payload;
    }
  }
});

export const { setwishlist } = userSlice.actions;

export const getwishlistData = () => (dispatch) => {
    let accessToken=localStorage.getItem('prodymeApiToken')
  fetch(`${IP_ADDRESS}getwishlist/`,{
    cache: "no-store",
        headers: { Authorization: `Token ${accessToken}` }
    }).then((response) => {
     return response.json();
    })
    .then((response) => {
      dispatch(setwishlist(response.wishlist));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
