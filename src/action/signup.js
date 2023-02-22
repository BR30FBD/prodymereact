import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
    console.log(data,"dataget")
  axios
    .post("https://prodymeapi.revivingindia.com/signup/",{
        name:data.name,
        email:data.email,
        password:data.password
    })
    .then((response) => {
        console.log(response,"response")
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
