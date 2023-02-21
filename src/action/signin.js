import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
  name: "SignIn",
  initialState: {
    list: {}
  },
  reducers: {
    // action
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setUserList } = userSlice.actions;

export const signInUser = (data) => (dispatch) => {
    console.log(data,"dataget")
  axios
    .post("https://prodymeapi.revivingindia.com/login/",{
        email:data.email,
        password:data.password
    })
    .then((response) => {
        console.log(response,"response")
      dispatch(setUserList(response.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
