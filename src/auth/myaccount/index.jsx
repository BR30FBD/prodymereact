import React from 'react'
import { NavLink } from 'react-router-dom'
import stylemyaccount from "./myaccount.css"
import img from "./b1.png"
const MyAccount = () => {
  return (
    <div {...stylemyaccount}>
      <section  style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\MyAccount
           </h1>
        
        </section>
    <section className="main-myaccount">
    <div className='main-child'>
      <h3 className='main-child-h3'>My Profile</h3>
     </div>
       <div className='main-child'>
        <input type="text" placeholder='User Name'className='form-input' />
        <input type="text" placeholder='First Name'className='form-input' />
        <input type="text" placeholder='Last Name'className='form-input' />
        <input type="text" placeholder='Email Address'className='form-input' />
        <input type="text" placeholder='Mobile Number'className='form-input' />
        <input type="text" placeholder='House No.'className='form-input' />
        <input type="text" placeholder='Street/Colony'className='form-input' />
        <input type="text" placeholder='District'className='form-input' />
        <input type="text" placeholder='State'className='form-input' />
        <input type="text" placeholder='Pin Code'className='form-input' />
       </div>
     <div className='main-child'>
      <button className='main-child-btn'>Update</button>
     </div>
      </section>
      </div>
  )
}

export default MyAccount