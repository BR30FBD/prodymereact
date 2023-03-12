import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./mymessage.module.css"
import pin from "./pin.png"
const MyMessage = () => {
  return (
    <div className={style.container}>
      <div className={style.breadcrumb}></div>
      <div className={style.tabscontainer}>
      <NavLink to='/myaccount' className={style.myordermainchildlink}>MY PROFILE</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY MESSAGES</NavLink>
              <NavLink to='/myorder' className="myorder-main-child-link">MY ORDERS</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY DESIGNS</NavLink>
              <NavLink to='/mywishlist' className="myorder-main-child-link">WISHLIST</NavLink>
      </div>
      <div className={style.tabscontainer}>
        <p className={style.para}>Please note you can only view the queries sent by you and response will be sent via email.</p>
   
      </div>
      <div className={style.optionlist}>
        <span className={style.span}>32 Messages</span>
        <div>
            <select>
                <option value="1">Newest</option>
                <option value="1">Newest</option>
            </select>
        </div>
     </div>
     {[1,2,3].map((data,index)=>(
 <div className={style.box}>
 <div className={style.upbox}>
     <span className={style.date}>Sep 15 2021</span>
     <div style={{width:"600px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
         <span className={style.order}>Order Details: XXXXXXXXX</span>
         <span className={style.status}>In progress</span>
     </div>
 </div>
 <span className={style.messagetitle}>How can we help you?</span>
 <p className={style.para}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore…</p>
<div className={style.attachement}>
<img src={pin} alt="" className={style.img} />
{[1,2,3,4].map((data,index)=>(
<span className={style.filename}>Filename.abc</span>

))}
</div>
</div>
     ))}
    
    </div>
  )
}

export default MyMessage