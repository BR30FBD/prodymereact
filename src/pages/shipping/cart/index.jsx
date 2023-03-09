import React, { useEffect, useState } from 'react'
import style from "./cart.module.css"
import cart from "./cart.svg"
import uparrow from "./uparrow.png"
import downarrow from "./downarrow.png"
import img from "./img.png"
import service from "./service.png"
import { NavLink } from 'react-router-dom'
const Cart = () => {
  const [data,setdata]=useState([]);
  const cartdata=JSON.parse(localStorage.getItem('Cart')) ||[];
  const total=data.map((data,index)=>{
    return data.price*data.qty
  }).reduce((partialSum, a) => partialSum + a, 0)
  useEffect(()=>{
    setdata(cartdata)
  },[])
  return (
    <>
    <div className={style.cartconatiner}>
<div className={style.cartheader}>
    <img src={cart} alt=""className={style.carticon} />
    <span className={style.carttxt}>Products Cart (43)</span>
    <span className={style.editcart}>
      <NavLink to='/checkout'>
      Edit Cart
      </NavLink>
      </span>
    {true ?
    <img src={uparrow} alt=""className={style.carticon} />
    :
    <img src={downarrow} alt=""className={style.carticon} />

}
</div>

    </div>
    <span className={style.carttitle}>Product ({cartdata.length || 0})</span>
    <div className={style.listcontainer}>
        {data && data.map((data,index)=>(
  <div className={style.listitem}>
  <img src={data.productImage} alt="" className={style.productimg} />
  <span className={style.name}>{data.productName}</span>
  <span className={style.size} style={{fontSize:"20px"}}>{data.qty}</span>
  <span className={style.price}>{data.price}</span>
</div>
        ))}
      

    </div>
    <div className={style.cartfooter}>
      <span className={style.qty}>Quantity <strong>({cartdata.length ||0})</strong></span>
      <span className={style.qty}>SubTotal <strong>INR {total}</strong></span>
    </div>
    <div className={style.servicecartheader}>
    <img src={service} alt=""className={style.carticon} />
    <span className={style.carttxtservices}>Services Ordered (43)</span>
    {true ?
    <img src={uparrow} alt=""className={style.carticon} />
    :
    <img src={downarrow} alt=""className={style.carticon} />

}


</div>
{[1,2,3,4].map((data,index)=>(
  <div className={style.listservice}>
  <span className={style.servicename}>Carpenter<br/> work</span>
  <span className={style.days}>12<br/>Days</span>
  <strong className={style.priceservices}>&#8377; 2100</strong>
</div>
))}
<div className={style.servicefooter}>
  <span className={style.daysservice}>Days (43)</span>
  <span className={style.qty}>SubTotal <strong>INR 124,689</strong></span>
</div>
    </>
  )
}

export default Cart