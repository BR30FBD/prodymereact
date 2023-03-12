import React from 'react'
import style from "./contact.module.css"
const ContactUs = () => {
  return (
    <div className={style.container}>
      <div className={style.breadcrumb}></div>
      <div className={style.formcontainer}>
        <h1 className={style.h1}><b>Get in touch with Prodyme</b></h1>
        <h1 className={style.h1}><b>Your Personal Details</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>First Name</label>
            <input type="text" placeholder='First Name' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>Last Name</label>
            <input type="text" placeholder='Last Name' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>Zip Code*</label>
            <input type="text" placeholder='Zip Code*' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>State*</label>
            <input type="text" placeholder='State*' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>Phone Number*</label>
            <input type="text" placeholder='Phone Numbe' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>Email*</label>
            <input type="text" placeholder='Email*' className={style.input}/>
          </div>
        </div>
        <hr className={style.hr} />
        <h1 className={style.h1}><b>Your message to us</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>How can we help you?*</label>
            <input type="text" placeholder='Subject' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>Existing order number</label>
            <input type="text" placeholder='Please enter your order number for us to fetch the details' className={style.input}/>
          </div>
          <div className={style.forminput} style={{width:"90%",padding:"10px"}}>
            <label>Description*</label>
            <textarea name="" id="" cols="30" rows="10" style={{width:"100%"}} placeholder="Please describe the topic that you want us to help you in..."></textarea>
          </div>
          
        </div>
        <hr className={style.hr} />
        <h1 className={style.h1}><b>Upload Attachments</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>Your files</label>
            <input type="file" placeholder='File name will appear here...' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>File Type Supported: .pdf, .png, .jpg, .docx, .jpeg, .txt, .mp4, .HEIC Size: less than 5MB Max: up to 5 Files</label>
          </div>
        
          
        </div>
        <hr className={style.hr} />
        <h1 className={style.h1} style={{width:"100%"}}><b>Can you give us some additional information?</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>Product type</label>
            <input type="text" placeholder='Plywood, fixtures, etc...' className={style.input}/>
          </div>
          <div className={style.forminput}>
            <label>Brand</label>
            <input type="text" placeholder='Brand Name' className={style.input}/>
          </div>
        
          
        </div>
        <hr className={style.hr} />
        <button className={style.button}>Submit</button>
      </div>
    </div>
  )
}

export default ContactUs