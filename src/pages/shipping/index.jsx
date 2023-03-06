import React from 'react'
import style from "./shipping.module.css"
import pdf from "./pdf.svg"
import share from "./share.svg"
import save from "./save.png"
import backarrow from "./backarrow.svg"
import Address from '../../auth/myaccount/address'
import AddressShipping from './addressshipping'
import Cart from './cart'
const Shipping = () => {
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
                            <input type="text" placeholder='First Name*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Last Name*</label>
                            <input type="text" placeholder='Last Name*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Company Name</label>
                            <input type="text" placeholder='Company Name' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>P. O. Number</label>
                            <input type="text" placeholder='P. O. Number' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>GST Number</label>
                            <input type="text" placeholder='GST Number' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Email*</label>
                            <input type="text" placeholder='Email*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Phone Number*</label>
                            <input type="text" placeholder='Phone Number*' className={style.input} />
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
                            <input type="text" placeholder='First Name*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Last Name*</label>
                            <input type="text" placeholder='Last Name*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Plot Number*</label>
                            <input type="text" placeholder='Plot Number*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Street Address 1*</label>
                            <input type="text" placeholder='Street Address 1*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Street Address 2*</label>
                            <input type="text" placeholder='Street Address 2*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Landmark*</label>
                            <input type="text" placeholder='Email*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>City*</label>
                            <input type="text" placeholder='City*' className={style.input} />
                        </div>
                        <div className={style.formcontrol}>
                            <label className={style.label}>Pincode*</label>
                            <input type="text" placeholder='Pincode*' className={style.input} />
                        </div>
                     
                    </div>
                    <h2 className={style.billingaddress}>Billing Address</h2>
                    <div className={style.checkbox}>
                        <input type="checkbox"  className={style.inputcheck}/>
                        <span className={style.spantext}>Billing info same as shipping info</span>
                    </div>
                    <hr className={style.hrbottom}/>
                    <button className={style.proceed}>Proceed to Pay</button>
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