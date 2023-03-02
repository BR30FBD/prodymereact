import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IP_ADDRESS } from "../ip";
export const userSlice = createSlice({
  name: "Signup",
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

export const signupUser = (data,hide) => (dispatch) => {
  axios
    .post(`${IP_ADDRESS}signup/`,{
        name:data.name,
        email:data.email,
        password:data.password
    })
    .then((response) => {
        if(response.data.message==='Registration Successfully'){
          setTimeout(()=>{
            hide()
      
          },1000)
        }
      dispatch(setUserList(response.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
