import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "./b1.png"
import stylemywishlist from "./mywishlist.css"
const MyWishlist = () => {
  return (
    <div {...stylemywishlist}>
        <section  style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\MyWishlist
           </h1>
        
        </section>
        <div className='main-child text-center'>
      <h1 className='main-child-h3'>MyWishlist</h1>
     </div>
     <div className='continer-parent'>
     <div className='myorder-container'>
        <section className='myorder-main'>
            <div className='myorder-main-child'>
              <NavLink to='/' className="myorder-main-child-link">MY PROFILE</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY MESSAGES</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY ORDERS</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY DESIGNS</NavLink>
              <NavLink to='/' className="myorder-main-child-link">WISHLIST</NavLink>

               
            </div>
            <div className='myorder-main-child-second'>
<div className='myorder-main-child-second-search'><input type="text" placeholder='Search for tags or keywords' className='myorder-main-child-second-input'/><span className='icon-myorder-search'>&#9740;</span></div>
-OR-
<div >
<select  className='myorder-main-child-second-date'>
<option value="last 15 Days">Date Range</option>
    <option value="last 15 Days">Last 15 Days</option>
</select>
</div>
<div>
<button className='main-child-btn'>Apply</button>
</div>
            </div>
          
        </section>
        <section className='myorder-main-second mb-mywishlist'>
            {[1,2,3,4,5,6,7].map((data,index)=>(
                <div className='box-card'>
    <span className='wishlist-icon' >&#10084;</span>
    <img className='img-card' src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" alt="" srcset="" />
<h6 className='box-card-h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>

<span className='box-card-start-icon'>&#10029; &#10029; &#10029; &#10029; &#10029;</span>
<h4 style={{textAlign:"left",width:"100%",borderTop:"2px solid red"}}>&#8377; 28.8 per sheet</h4>
<div className='qty-details'>
<div className='qty-details' ><span className='checkout-table-body-td-icon-details-page'>-</span><div className='qty-value'>1</div><span className='checkout-table-body-td-icon-details-page'>+</span></div>
<input type="checkbox"/><h6>Add To Card</h6>
</div>
</div>
            ))}


<div>

</div>
        </section>
        </div>
        </div>
    </div>
  )
}

export default MyWishlist