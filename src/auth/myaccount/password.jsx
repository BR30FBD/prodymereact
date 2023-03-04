import React, { useState } from 'react'
import { IP_ADDRESS } from '../../ip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  Axios  from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '1px solid #000',
    boxShadow: 24,
    outline: "none",
    borderRadius:"3px",
    p: 4
  };
const Password = () => {
    const [msg,setmsg]=useState('')
    let accessToken=localStorage.getItem('prodymeApiToken')
    const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
    const [data,setdata]=useState({
        password:"",
        cpassword:""
    })
    const handlechange=(e)=>{
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setdata(newdata)
        console.log(data)
    }
    const handlesubmit=()=>{
        let config={
            headers: { Authorization: `Token ${accessToken}` }
        }
        let body={
            password:data.password
        }
        if(data.cpassword===data.password){
            Axios.post(`${IP_ADDRESS}api/UpdatePassword/`,body,config).then((res)=>{
                console.log(res.data,"pass")
                setmsg(res.data.message)
handleOpen()
setTimeout(()=>{
    handleClose()
    setmsg('')
},2000)
            }).catch((err)=>{
                console.log(err)
            })
        }else {
setmsg('Password Not Match !')
handleOpen()
setTimeout(()=>{
    handleClose()
    setmsg('')
},2000)
        }
    }
  return (
    <>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" className="h3-font" sx={{textAlign:"center"}}>
        {msg}
          </Typography>
      
         
        </Box>
      </Modal>
      <section className="main-myaccount">
    <div className='password-container' >
    <h2 style={{textAlign:"left"}} className='h3-font' >Change Password</h2>
    <p style={{textAlign:"left"}} className='label-form'>Please set a strong password by referring to the below guidelines.</p>
  
<div className='profile-password-container'>
  <div style={{width:"40%"}}>
<div className='form-control w-100'>
        <label className='label-form'>New Password</label>
        
        <input type="password"  required placeholder='New Password'className='form-input' id="password" value={data.password} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control w-100' >
        <label className='label-form'>Confirm Password</label>
        
        <input type="password"  required placeholder='Confirm Password'className='form-input' id="cpassword" value={data.cpassword} onChange={(e)=>handlechange(e)} />
        </div>
      <button className='w-100 btn-create' onClick={handlesubmit}>Create New Password</button>

        </div>
        <div>
          <p className='label-form'>Passwords should contain at<br/> least :</p>
          <p className='label-form'>8 Characters</p>
          <p className='label-form'>One uppercase</p>
          <p className='label-form'>One lowercase</p>
          <p className='label-form'>One numeric character</p>
        </div>
</div>
   
     </div>
    
     
      </section>
    </>
  )
}

export default Password