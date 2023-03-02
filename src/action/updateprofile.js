import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IP_ADDRESS } from "../ip";
export const userSlice = createSlice({
  name: "usersUpdateProfile",
  initialState: {
    list1: ""
  },
  reducers: {
    // action
    setProfileData: (state, action) => {
      state.list1 = action.payload;
    }
  }
});

export const { setProfileData } = userSlice.actions;

export const updateprofileData = (data) => (dispatch) => {
    let accessToken=localStorage.getItem('prodymeApiToken')

    let config={
        headers: { Authorization: `Token ${accessToken}` }
    }
    let updatedData=data;
  axios
    .post(`${IP_ADDRESS}updateprofile/`,updatedData,config)
    .then((response) => {
      dispatch(setProfileData(response.data.message));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
