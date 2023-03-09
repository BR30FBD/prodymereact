import React, { useEffect } from 'react'
import style from "./thank.module.css"
import pdf from "./pdf.svg"
import share from "./share.svg"
import save from "./save.png"
import backarrow from "./backarrow.svg"
import Cart from '../shipping/cart'
import { useNavigate } from 'react-router-dom'
const ThankYouOrder = () => {
    const nav=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            nav('/myorder')

        },2000)
    },[])
  return (
    <>
      <div className={`${style.container}`}>
  <div className={style.sidebar}>
      
  </div>
  <div className={style.section}>
      <div className={style.breadcrumb}>
          <h5>Home / Checkout</h5>
      </div>
      <div className={style.flexbox}>
      <h1  className={style.checkouttitle}>Checkout</h1>
      <div>
          <p className={style.step}>Step 4: Confirmation</p>
          <div className={style.border}>
          <hr className={style.hr} />
          <hr className={style.hr}/>
          <hr className={style.hr} />
          <hr className={style.hr} />
          </div>
      </div>
      <div style={{width:"250px"}}></div>
      <div className={style.groupicon}>
          <img src={pdf} alt="" />
          <span className={style.download}>
          Download BOQ
          </span>
          <img src={share} alt="" />
          <img src={save} alt="" />
      </div>
      </div>
      <div className={style.containerchild}>
          <div className={style.form}>
              <h3 className={style.title}>Thank you for your order!</h3>
             <p className={style.para}>We have sent you a confirmation email and are now starting to prepare your order. As soon as your package is on its way to you, you will receive a track and trace link.</p>
              <hr className={style.hrbottom}/>
<div className={style.ordercontainer}>
    <h3 className={style.ordertitle}>Order Number</h3>
    <h3 className={style.ordertitle}>XXXXXXXX</h3>
</div>
<div className={style.ordercontainer}>
    <h3 className={style.ordertitle}>Order total</h3>
    <h3 className={style.ordertitle}>₹XXXXX</h3>
</div>
<div className={style.ordercontainer}>
    <h3 className={style.ordertitle}>Estimated shipping date</h3>
    <h3 className={style.ordertitle}>12/12/2022</h3>
</div>
<hr className={style.hrbottom}/>
<div className={style.ordercontainer}>
    <h3 className={style.ordertitle}>Shipping Address</h3>
    <h3 className={style.ordertitle}>Billing Address</h3>
</div>
<div className={style.ordercontaineraddress}>
    <h3 className={style.ordertitlespan}>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</h3>
    <h3 className={style.ordertitlespan} style={{marginRight:"50px"}}>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</h3>
</div>
          
           
          </div>
          <div className={style.cart}>
              <Cart/>
          </div>

      </div>
  </div>
</div>
    </>
  )
}

export default ThankYouOrder