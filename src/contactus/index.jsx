import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import style from "./contact.module.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { NavLink, useNavigate } from 'react-router-dom';
import { IP_ADDRESS } from '../ip';
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
const ContactUs = () => {
  const [data,setdata]=useState({
    first_name:"",
    last_name:"",
    zipcode:"",
    state:"",
    mobile:"",
    email:"",
    subject:"",
    ordernumber:"",
    description:"",
    file:"",
    product_type:"",
    brand:""
    });
    const [list,setlist]=useState([])
    let accessToken=localStorage.getItem('prodymeApiToken')
    const [open, setOpen] = React.useState(false);
    const [msg,setmsg]=useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const nav=useNavigate()
    const handleChange=(e)=>{
      const newdata={...data};
      newdata[e.target.id]=e.target.value;
      setdata(newdata)
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      Axios.post(`https://praveenrrc.pythonanywhere.com/api/getintouch/`,data).then((res)=>{
        console.log(res,"form")
        setmsg(res.data.message);
        setOpen(true);
        if(res.data.message==='Thanks for the Query! Will Update you soon'){
          setTimeout(()=>{
            nav('/')
            setOpen(false)
          },2000)
        }
       
      }).catch((err)=>{
        console.log(err)
        setmsg("Something Went Wrong !");
        setOpen(true);
        setTimeout(()=>{
          setOpen(false)
        },2000)
      })
    }
 
    useEffect(()=>{
      Axios.get(`${IP_ADDRESS}OrderList/`,{
        headers:{
          Authorization: `Token ${accessToken}`
        }
      }).then((res)=>{
        console.log(res.data.data,"list")
        setlist(res.data.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
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
        
         
        </Box>
      </Modal>
    <div className={style.container}>
      <div className={style.breadcrumb}>
      <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\Contact Us
           </h1>
      </div>
      <form className={style.formcontainer} onSubmit={handlesubmit}>
        <h1 className={style.h1}><b>Get in touch with Prodyme</b></h1>
        <h1 className={style.h1}><b>Your Personal Details</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>First Name</label>
            <input type="text" required  placeholder='First Name' className={style.input} id="first_name" value={data.first_name} onChange={(e)=>handleChange(e)} />
          </div>
          <div className={style.forminput}>
            <label>Last Name</label>
            <input type="text" required placeholder='Last Name' className={style.input} id="last_name" value={data.last_name} onChange={(e)=>handleChange(e)} />
          </div>
          <div className={style.forminput}>
            <label>Zip Code*</label>
            <input type="text" required placeholder='Zip Code*' className={style.input} id="zipcode" value={data.zipcode} onChange={(e)=>handleChange(e)} />
          </div>
          <div className={style.forminput}>
            <label>State*</label>
            <input type="text" required placeholder='State*' className={style.input} id="state" value={data.state} onChange={(e)=>handleChange(e)} />
          </div>
          <div className={style.forminput}>
            <label>Phone Number*</label>
            <input type="text" required placeholder='Phone Numbe' className={style.input} id="mobile" value={data.mobile} onChange={(e)=>handleChange(e)} />
          </div>
          <div className={style.forminput}>
            <label>Email*</label>
            <input type="text" required placeholder='Email*' className={style.input} id="email" value={data.email} onChange={(e)=>handleChange(e)} />
          </div>
        </div>
        <hr className={style.hr} />
        <h1 className={style.h1}><b>Your message to us</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>How can we help you?*</label>
            <input type="text"  placeholder='Subject' className={style.input} id="subject" value={data.subject} onChange={(e)=>handleChange(e)}  />
          </div>
          <div className={style.forminput}>
            <label>Existing order number</label>
          <select className={style.input} id="existing_order_number" value={data.existing_order_number} onChange={(e)=>handleChange(e)}>
          <option>Select OrderId</option>
            {list && list.map((data,index)=>(
 <option>{data}</option>
            ))}
           
          </select>
          </div>
          <div className={style.forminput} style={{width:"90%",padding:"10px"}}>
            <label>Description*</label>
            <textarea name=""  cols="30" rows="10" style={{width:"100%"}} placeholder="Please describe the topic that you want us to help you in..." id="description" value={data.description} onChange={(e)=>handleChange(e)} ></textarea>
          </div>
          
        </div>
        <hr className={style.hr} />
        <h1 className={style.h1}><b>Upload Attachments</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>Your files</label>
            <input type="file" placeholder='File name will appear here...' className={style.input} id="upload_attachments" value={data.upload_attachments} onChange={(e)=>handleChange(e)} />
          </div>
          <div className={style.forminput} >
            <label>File Type Supported: .pdf, .png, .jpg, .docx, .jpeg, .txt, .mp4, .HEIC Size: less than 5MB Max: up to 5 Files</label>
          </div>
        
          
        </div>
        <hr className={style.hr} />
        <h1 className={style.h1} style={{width:"100%"}}><b>Can you give us some additional information?</b></h1>
        <div className={style.forminputcontainer}>
          <div className={style.forminput}>
            <label>Product type</label>
            <input type="text" placeholder='Plywood, fixtures, etc...' className={style.input} id="product_type" value={data.product_type} onChange={(e)=>handleChange(e)}/>
          </div>
          <div className={style.forminput}>
            <label>Brand</label>
            <input type="text" placeholder='Brand Name' className={style.input} id="brand" value={data.brand} onChange={(e)=>handleChange(e)} />
          </div>
        
          
        </div>
        <hr className={style.hr} />
        <button className={style.button} type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default ContactUs