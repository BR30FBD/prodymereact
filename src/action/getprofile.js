import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
  name: "usersgetprofile",
  initialState: {
    list: {}
  },
  reducers: {
    // action
    setProfileData: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setProfileData } = userSlice.actions;

export const getprofileData = () => (dispatch) => {
    console.log("testing")
    let accessToken=localStorage.getItem('prodymeApiToken')
  axios
    .get("https://prodymeapi.revivingindia.com/getprofile/",{
        headers: { Authorization: `Token ${accessToken}` }
    })
    .then((response) => {
        console.log("testing",response)
      dispatch(setProfileData(response.data.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
