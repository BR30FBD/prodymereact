import React from 'react'
import style from "./cart.module.css"
import cart from "./cart.svg"
import uparrow from "./uparrow.png"
import downarrow from "./downarrow.png"
import img from "./img.png"
import service from "./service.png"
const Cart = () => {
  return (
    <>
    <div className={style.cartconatiner}>
<div className={style.cartheader}>
    <img src={cart} alt=""className={style.carticon} />
    <span className={style.carttxt}>Products Cart (43)</span>
    <span className={style.editcart}>Edit Cart</span>
    {true ?
    <img src={uparrow} alt=""className={style.carticon} />
    :
    <img src={downarrow} alt=""className={style.carticon} />

}
</div>

    </div>
    <span className={style.carttitle}>Plywood (23)</span>
    <div className={style.listcontainer}>
        {[1,2,3,4,5].map((data,index)=>(
  <div className={style.listitem}>
  <img src={img} alt="" />
  <span className={style.name}>Product Name ABC which is a long name...</span>
  <span className={style.size}><strong>12<br/>Boxes<br/>[100 sq.ft]</strong></span>
  <span className={style.price}> 250</span>
</div>
        ))}
      

    </div>
    <div className={style.cartfooter}>
      <span className={style.qty}>Quantity <strong>(43)</strong></span>
      <span className={style.qty}>SubTotal <strong>INR 124,689</strong></span>
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