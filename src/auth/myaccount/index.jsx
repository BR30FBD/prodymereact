import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import stylemyaccount from "./myaccount.css"
import img from "./b1.png"
import { useDispatch, useSelector } from 'react-redux'
import { updateprofileData } from '../../action/updateprofile'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Slider from "react-slick";
import { IP_ADDRESS } from '../../ip'
import Address from './address'
import  Axios  from 'axios'
import Comunication from './comunication'
import Password from './password'


const MyAccount = () => {
let accessToken=localStorage.getItem('prodymeApiToken')
const [disable,setdisable]=useState(true)

  const { list } = useSelector((state) => state.userGetProfile);
  const { list1 } = useSelector((state) => state.ueserupdateprofile);
  const [data,setData]=useState({
    username_id:"",
    profile_id:"",
    first_name:"",
    last_name:"",
    business_name:"",
    gst:"",
    email:"",
    mobile:"",
    password:"",
    zipcode:""
  })
  const dispatch = useDispatch();

 
  const handlechange=(e)=>{
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setData(newdata)
  }
  const dataget=()=>{
    fetch(`${IP_ADDRESS}getprofile/`,{
      cache: "no-store",
      headers: { Authorization: `Token ${accessToken}` }
  }).then((response) => {
   return response.json()
})
  .then((response) => {
    console.log(response,"res")
   setData(response.data);
  })
  .catch((error) => console.log(error));
  }

  useEffect(() => {
   dataget()
  }, []);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div {...stylemyaccount}>
  
      <section  style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\MyAccount
           </h1>
        
        </section>
        <div className='profile-main-parent mtb-100'>
        <form className='profile-main-container' onSubmit={(e)=>{
          e.preventDefault()
          dispatch(updateprofileData(data))
          dataget()
          }}>
    <section className="main-myaccount">
    <div className='myorder-main-child' style={{background:"#fff"}}>
    <NavLink to='/myaccount' className="myorder-main-child-link">MY PROFILE</NavLink>
              <NavLink to='/mymessage' className="myorder-main-child-link">MY MESSAGES</NavLink>
              <NavLink to='/myorder' className="myorder-main-child-link">MY ORDERS</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY DESIGNS</NavLink>
              <NavLink to='/mywishlist' className="myorder-main-child-link">WISHLIST</NavLink>

               
            </div>
    <div className='main-child'>
    <h3 className='main-child-h3'>{list1}</h3>

     </div>
<div style={{width:"90%",display:"flex",justifyContent:"space-between"}}>
<h2 className='h3-font'>Your Personal Details</h2>
<h2 className='h3-font edit-btn' onClick={()=>setdisable(false)}>Edit</h2>

</div>
       <div className='main-child'>

        <div className='form-control'>
        <label className='label-form'>Business Name</label>
        
        <input type="text"  disabled={disable}  placeholder='Business Name'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>First Name</label>
        <input type="text"  disabled={disable}   placeholder='First Name'className='form-input' id="first_name" value={data.first_name}  onChange={(e)=>handlechange(e)}/>
       </div>
       <div className='form-control'>
        <label className='label-form'>Last Name'</label>
        <input type="text" disabled={disable}   placeholder='Last Name'className='form-input' id="last_name" value={data.last_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Email Address</label>
        <input type="text" disabled={disable}   placeholder='Email Address'className='form-input' id="email" value={data.email}  onChange={(e)=>handlechange(e)}/>
       </div>
       <div className='form-control'>
        <label className='label-form'>Mobile Number</label>
        <input type="number" disabled={disable}  placeholder='Mobile Number'className='form-input' id="mobile" value={data.mobile}  onChange={(e)=>handlechange(e)}/>
        </div>
        <div className='form-control'>
        <label className='label-form'>GST</label>
        <input type="text" disabled={disable}    placeholder='GST'className='form-input' id="gst" value={data.gst}  onChange={(e)=>handlechange(e)}/>
       </div>
       <div className='form-control'>
        <label className='label-form'>zipcode</label>
        <input type="text" disabled={disable}    placeholder='zipcode'className='form-input' id="zipcode" value={data.zipcode}  onChange={(e)=>handlechange(e)}/>
       </div>
      
     
       <div className='form-control'>
        <label className='label-form'>Password</label>
        <input type="text" disabled={disable}   placeholder='Password'className='form-input' id="password" value={data.password} onChange={(e)=>handlechange(e)} />
       </div>
       </div>
     <div className='main-child'>
      <button className='main-child-btn' type='submit'>Update</button>
     </div>
      </section>
      <hr/>
      <Address/>
      <hr/>
<Comunication/>
      <hr/>
    <Password/>
      <hr/>
      </form>
      </div>
      </div>
  )
}

export default MyAccount