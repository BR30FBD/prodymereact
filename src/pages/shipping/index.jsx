import React, { useEffect, useState } from 'react'
import style from "./shipping.module.css"
import pdf from "./pdf.svg"
import share from "./share.svg"
import save from "./save.png"
import backarrow from "./backarrow.svg"
import Address from '../../auth/myaccount/address'
import AddressShipping from './addressshipping'
import Cart from './cart'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  Axios  from 'axios';
import { IP_ADDRESS } from '../../ip';
const styles = {
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

const Shipping = () => {
    const [open, setOpen] = React.useState(false);
  const [box,setbox]=useState([])
  const [email,setemail]=useState('');
  const [name,setname]=useState('');
  const [guest,setguest]=useState(false)

  const [msg,setmsg]=useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let accessToken=localStorage.getItem('prodymeApiToken')
    const [billinginfo,setbillinginfo]=useState({
        fname:"",
        lname:"",
        company:"",
        po:"",
        gst:"",
        email:"",
        mobile:""

    })
    const [newaddress,setnewaddress]=useState({
        fname:"",
        lname:"",
        plot:"",
        address1:"",
        address2:"",
        landmark:"",
        city:"",
        pincode:""
    })
    const nav=useNavigate()
    const cardata=JSON.parse(localStorage.getItem('Cart')) || [];
    const total=localStorage.getItem('Cart') && JSON.parse(localStorage.getItem('Cart')).map((data,index)=>{
      return data.price*data.qty
    }).reduce((partialSum, a) => partialSum + a, 0)
    const handlechange=(e)=>{
        const newdata={...billinginfo};
        newdata[e.target.id]=e.target.value;
        setbillinginfo(newdata);
        console.log(billinginfo)
    }
    const handleaddress=(e)=>{
        const newdata={...newaddress};
        newdata[e.target.id]=e.target.value;
        setnewaddress(newdata);
        console.log(newaddress)
    }
 
    const handlepay=()=>{
        console.log("hello")
       
                nav('/payments')
                localStorage.setItem('billingInfo',JSON.stringify(billinginfo))
                localStorage.setItem('newaddress',JSON.stringify(newaddress))
              
  
      
           
          
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        const obj={
          email:email,
          name:name,
          totalAmount:total,
          orderData:cardata
        }
        console.log(obj,"obj")
        Axios.post(`${IP_ADDRESS}GuestCheckout/`,obj).then((res)=>{
          console.log(res)
          setmsg(res.data.message)
          setTimeout(()=>{
            setmsg('')
            nav('/')
            localStorage.removeItem('Cart')
            handleClose()
          },2000)
        }).catch((err)=>{
          console.log(err)
          setmsg(err.message)
        })
      }
      useEffect(()=>{
        window.scrollTo(0,0)
        },[])
        const handlebillingaddress=()=>{
            let getaddress=JSON.parse(localStorage.getItem('address')) || newaddress;
            localStorage.setItem('billingaddresssame',JSON.stringify(getaddress))
        }
  return (
    <>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center",marginBottom:"20px"}}>
         {msg}
          </Typography>
          {guest &&
           <form onSubmit={handlesubmit}>
           <div className='main-child'>
           <div className='form-control'>
         <label className='label-form'>Name</label>
         
         <input type="text"  required placeholder='Name'className='form-input'  onChange={(e)=>setname(e.target.value)} />
         </div>
         <div className='form-control'>
         <label className='label-form'>Email</label>
         
         <input type="email"  required placeholder='Email'className='form-input' onChange={(e)=>setemail(e.target.value)} />
         </div>
      
           </div>
           <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
           <button className='main-child-btn ' onClick={()=>handleClose()}>Cancel</button>
           <button className='main-child-btn' type='submit'>Submit</button>
 
           </div>
           </form>
          }
         
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
                <p className={style.step}>Step 2: Shipping</p>
                <div className={style.border}>
                <hr className={style.hr} />
                <hr className={style.hr}/>
                <hr className={style.hrnone} />
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
                        <span className={style.backbutton}>Back To Shopping Cart</span>
                    </div>
                    <div className={style.billingInfo}>
                        <span className={style.billingtitle}>Shipping / Billing Info</span>
                        <span className={style.edit}>Edit</span>
                    </div>
                    <div className={style.formconatiner}>
                        <div className={style.formcontrol}>
                            <label className={style.label}>First Name*</label>
                            <input type="text" placeholder='First Name*' className={style.input} id="fname" value={billinginfo.fname} onChange={(e)=>handlechange(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Last Name*</label>
                            <input type="text" placeholder='Last Name*' className={style.input} id="lname" value={billinginfo.lname} onChange={(e)=>handlechange(e)}/>
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Company Name</label>
                            <input type="text" placeholder='Company Name' className={style.input} id="company" value={billinginfo.company} onChange={(e)=>handlechange(e)}/>
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>P. O. Number</label>
                            <input type="text" placeholder='P. O. Number' className={style.input} id="po" value={billinginfo.po} onChange={(e)=>handlechange(e)}/>
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>GST Number</label>
                            <input type="text" placeholder='GST Number' className={style.input} id="gst" value={billinginfo.gst} onChange={(e)=>handlechange(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Email*</label>
                            <input type="text" placeholder='Email*' className={style.input} id="email" value={billinginfo.email} onChange={(e)=>handlechange(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Phone Number*</label>
                            <input type="text" placeholder='Phone Number*' className={style.input} id="mobile" value={billinginfo.mobile} onChange={(e)=>handlechange(e)}/>
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Enter OTP</label>
                            <div className={style.otp}>
                            <input type="text"  className={style.inputotp} />
                            <input type="text"  className={style.inputotp} />
                            <input type="text"  className={style.inputotp} />
                            <input type="text"  className={style.inputotp} />
                            <button className={style.buttonverify}>Verify</button>
                            </div>
                            <span className={style.timing}>Resend OTP in 00:58</span>
                        </div>
                    </div>
                    <hr className={style.hrbottom}/>
                    <div className={style.addresscontainer}>
                        <h2 className={style.shopping}>Shipping Addresses</h2>
                        <div className={style.saveaddress}>
                            <input type="radio" className={style.radioactive} />
                            <span className={style.saveaddress}>Your saved address</span>
                        </div>
                        <AddressShipping/>
                    </div>
                    <div className={style.addresscontainer}>
                        <div className={style.saveaddress}>
                            <input type="radio" className={style.radioactive} />
                            <span className={style.saveaddress}>New Address</span>
                        </div>
                    <div className={style.addressform}>
                    <div className={style.formconatiner} style={{width:"100%"}}>
                        <div className={style.formcontrol}>
                            <label className={style.label}>First Name*</label>
                            <input type="text" placeholder='First Name*' className={style.input} id="fname" value={newaddress.fname} onChange={(e)=>handleaddress(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Last Name*</label>
                            <input type="text" placeholder='Last Name*' className={style.input} id="lname" value={newaddress.lname}    onChange={(e)=>handleaddress(e)}/>
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Plot Number*</label>
                            <input type="text" placeholder='Plot Number*' className={style.input} id="plot" value={newaddress.plot}   onChange={(e)=>handleaddress(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Street Address 1*</label>
                            <input type="text" placeholder='Street Address 1*' className={style.input} id="address1" value={newaddress.address1}   onChange={(e)=>handleaddress(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Street Address 2*</label>
                            <input type="text" placeholder='Street Address 2*' className={style.input} id="address2" value={newaddress.address2}   onChange={(e)=>handleaddress(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Landmark*</label>
                            <input type="text" placeholder='Landmark*' className={style.input} id="landmark" value={newaddress.landmark}   onChange={(e)=>handleaddress(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>City*</label>
                            <input type="text" placeholder='City*' className={style.input} id="city" value={newaddress.city} onChange={(e)=>handleaddress(e)} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Pincode*</label>
                            <input type="text" placeholder='Pincode*' className={style.input} id="pincode" value={newaddress.pincode} onChange={(e)=>handleaddress(e)} />
                        </div>
                     
                    </div>
                    <h2 className={style.billingaddress}>Billing Address</h2>
                    <div className={style.checkbox}>
                        <input type="checkbox"  className={style.inputcheck} onClick={handlebillingaddress}/>
                        <span className={style.spantext}>Billing info same as shipping info</span>
                    </div>
                    <hr className={style.hrbottom}/>
                    <button className={style.proceed} onClick={handlepay}>Proceed to Pay</button>
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

export default Shipping