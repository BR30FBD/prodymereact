import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IP_ADDRESS } from "../ip";
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

export const signInUser = (data,fun) => (dispatch) => {
  axios
    .post(`${IP_ADDRESS}login/`,{
        email:data.email,
        password:data.password
    })
    .then((response) => {
       
        localStorage.setItem('prodymeApiToken',response.data.token.token)
      dispatch(setUserList(response.data));
      if(response.data.message=='Login Successful'){
        setTimeout(()=>{
    fun()
    dispatch(setUserList(''))
        },1000)
      }
   
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
