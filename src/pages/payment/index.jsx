import React, { useState } from 'react'
import Cart from '../shipping/cart'
import style from "./payment.module.css"
import pdf from "./pdf.svg"
import share from "./share.svg"
import save from "./save.png"
import backarrow from "./backarrow.svg"
import gpay from "./gpay.png"
import paytm from "./paytm.png"
import bhim from "./bhim.jpg"
import phonepay from "./phonepay.jpg"
import credit from "./credit.png"
import visa from "./visa.jpg"
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  Axios  from 'axios';
import { IP_ADDRESS } from '../../ip';
const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:"6px",
    boxShadow: 24,
    p: 4,
  };
const Payments = () => {
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [msg,setmsg]=useState('')
    const nav=useNavigate();
    const total=localStorage.getItem('Cart') && JSON.parse(localStorage.getItem('Cart')).map((data,index)=>{
        return data.price*data.qty
      }).reduce((partialSum, a) => partialSum + a, 0)
    const cardata1=JSON.parse(localStorage.getItem('Cart')) || [];
    const billinginfo=JSON.parse(localStorage.getItem('billingInfo'));
    const handlepayment=()=>{
   
       
        let accessToken=localStorage.getItem('prodymeApiToken')
    
        let config={
            headers: { Authorization: `Token ${accessToken}` }
        }
        const obj={
          orderData:{
            billinginfo:billinginfo,
            orderData:cardata1,
            billingaddress:billinginfo
          },
          totalAmount:total
        }
        Axios.post(`${IP_ADDRESS}postOrder/`,obj,config)
        .then((res)=>{
    console.log(res.data) 
    handleOpen()
    setmsg(res.data.message)
    
    setTimeout(()=>{
      nav('/thankyou')
    
    handleClose()
    },2000)
        }).catch((err)=>{
          console.log(err)
          handleOpen()
          setmsg(err.message)
          
          setTimeout(()=>{
          handleClose()
          },2000)
        })
    }
  return (   
    <>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center",marginBottom:"20px"}}>
         {msg}
          </Typography>
         
         
        </Box>
      </Modal>
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
          <p className={style.step}>Step 3: Payment</p>
          <div className={style.border}>
          <hr className={style.hr} />
          <hr className={style.hr}/>
          <hr className={style.hr} />
          <hr className={style.hrnone} />
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
              <div className={style.backbtn}>
                  <img src={backarrow} alt="" className={style.backicon} />
                  <span className={style.backbutton}>Back To Shipping Details</span>
              </div>
              <div className={style.billingInfo}>
                  <span className={style.billingtitle}>Payment Options</span>
                  {/* <span className={style.edit}>Edit</span> */}
              </div>
              <div className={style.saveaddress}>
                      <input type="radio" className={style.radioactive} />
                      <span className={style.saveaddress}><strong>UPI Payment</strong></span>
                  </div>
              <div className={style.formconatiner}>
                  <div className={style.formcontrol}>
                      <label className={style.label}>Enter you UPI id</label>
                      <input type="text" placeholder='2345 XXXX XXXX XXXX' className={style.input} />
                  </div>
                  -OR-
                  <div className={style.formcontrol}>
                      <label className={style.label}>Select UPI application</label>
                      <div className={style.otp}>
                      <img src={gpay} alt="" className={style.icons}  />
                      <img src={paytm} alt="" className={style.icons}  />
                      <img src={phonepay} alt="" className={style.icons} />
                      <img src={bhim} alt="" className={style.icons} />
                      
                      
                      
                      
                      </div>
                  </div>
                
                 
              </div>
              <div className={style.saveaddress}>
                      <input type="radio" className={style.radioactive} />
                      <span className={style.saveaddress}><strong>Cash On Delivery</strong></span>
                  </div>
                  <div className={style.saveaddress}>
                      <input type="radio" className={style.radioactive} />
                      <span className={style.saveaddress}><strong>Net Banking</strong></span>
                  </div>
                  <div className={style.saveaddress}>
                      <input type="radio" className={style.radioactive} />
                      <span className={style.saveaddress}><strong>Your Saved Cards</strong></span>
                  </div>
                  <div className={style.cardcontainer}>
                    <img src={visa} alt="" className={style.imgcard} />
                    <img src={credit} alt="" className={style.imgcard} />
                  </div>
              <hr className={style.hrbottom}/>
              <div className={style.addresscontainer} style={{width:"350px"}}>
                 
              <div className={style.saveaddress} style={{width:"500px",justifyContent:"start"}}>
                      <input type="radio" className={style.radioactive} />
                      <span className={style.saveaddress} ><strong>New Credit Card / Debit Card</strong></span>
                  </div>
                  {/* <AddressShipping/> */}
              </div>
              <div className={style.addresscontainer}>
               
              <div className={style.addressform}>
              <div className={style.formconatiner} style={{width:"100%"}}>
                  <div className={style.formcontrol} style={{width:"100%"}}>
                      <label className={style.label}>Card Number</label>
                      <input type="text" placeholder='2345 XXXX XXXX XXXX' className={style.input} style={{width:"95%"}} />
                  </div>
                  <div className={style.formcontrol}>
                      <label className={style.label}>Expiry Date</label>
                      <input type="text" placeholder='MM / YY' className={style.input} />
                  </div>
                  <div className={style.formcontrol}>
                      <label className={style.label}>Security Code</label>
                      <input type="text" placeholder='***' className={style.input} />
                  </div>
                  <div className={style.formcontrol} style={{width:"100%"}} >
                      <label className={style.label}>Cardholder name</label>
                      <input type="text" placeholder='As written on card' className={style.input} style={{width:"95%"}} />
                  </div>
                
               
              </div>
              <div className={style.checkbox}>
                  <input type="checkbox"  className={style.inputcheck}/>
                  <span className={style.spantext}>Save Card Info</span>
              </div>
              <div className={style.saveaddress} style={{width:"400px",justifyContent:"start"}}>
                      <input type="radio" className={style.radioactive} />
                      <span className={style.saveaddress}><strong>Other Payment Method</strong></span>
                  </div>
              <hr className={style.hrbottom}/>
              <button className={style.proceed} onClick={handlepayment}>Make Payment</button>
              </div>
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

export default Payments