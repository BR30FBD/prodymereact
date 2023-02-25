import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import stylemyaccount from "./myaccount.css"
import img from "./b1.png"
import { useDispatch, useSelector } from 'react-redux'
import { updateprofileData } from '../../action/updateprofile'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

const MyAccount = () => {
let accessToken=localStorage.getItem('prodymeApiToken')
const [textarea,settextarea]=useState(false)
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  const { list } = useSelector((state) => state.userGetProfile);
  const { list1 } = useSelector((state) => state.ueserupdateprofile);
  const [data,setData]=useState({
    username_id:"",
    profile_id:"",
    first_name:"",
    last_name:"",
    business_name:"",
    gst:"",
    email:"",
    mobile:"",
    password:"",
    zipcode:""
  })
  const dispatch = useDispatch();

 
  const handlechange=(e)=>{
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setData(newdata)
    console.log(data)
  }
  const dataget=()=>{
    fetch("https://prodymeapi.revivingindia.com/getprofile/",{
      cache: "no-store",
      headers: { Authorization: `Token ${accessToken}` }
  }).then((response) => {
   return response.json()
})
  .then((response) => {
      console.log("testing",response)
   setData(response.data);
  })
  .catch((error) => console.log(error));
  }
  useEffect(() => {
   dataget()
  }, []);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div {...stylemyaccount}>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" className="h3-font" sx={{textAlign:"center"}}>
        Add Your Address
          </Typography>
          <div className='main-child'>
          <div className='form-control'>
        <label className='label-form'>House No.</label>
        
        <input type="text"  required placeholder='House No.'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Town</label>
        
        <input type="text"  required placeholder='Town'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Land Mark*</label>
        
        <input type="text"  required placeholder='Land Mark*'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>PIN Code</label>
        
        <input type="text"  required placeholder='PIN Code'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
          </div>
          <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
          <button className='main-child-btn 'onClick={()=>settextarea(!textarea)}>Cancel</button>
          <button className='main-child-btn'onClick={()=>settextarea(!textarea)}>Submit</button>

          </div>
        </Box>
      </Modal>
      <section  style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\MyAccount
           </h1>
        
        </section>
        <div className='profile-main-parent mtb-100'>
        <form className='profile-main-container' onSubmit={(e)=>{
          e.preventDefault()
          dispatch(updateprofileData(data))
          dataget()
          }}>
    <section className="main-myaccount">
    <div className='myorder-main-child' style={{background:"#fff"}}>
              <NavLink to='/' className="myorder-main-child-link">MY PROFILE</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY MESSAGES</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY ORDERS</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY DESIGNS</NavLink>
              <NavLink to='/' className="myorder-main-child-link">WISHLIST</NavLink>

               
            </div>
    <div className='main-child'>
    <h3 className='main-child-h3'>{list1}</h3>

     </div>
<div style={{width:"90%"}}>
<h2 className='h3-font'>Your Personal Details</h2>

</div>
       <div className='main-child'>

        <div className='form-control'>
        <label className='label-form'>Business Name</label>
        
        <input type="text"  required placeholder='Business Name'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>First Name</label>
        <input type="text"   required placeholder='First Name'className='form-input' id="first_name" value={data.first_name}  onChange={(e)=>handlechange(e)}/>
       </div>
       <div className='form-control'>
        <label className='label-form'>Last Name'</label>
        <input type="text"   required placeholder='Last Name'className='form-input' id="last_name" value={data.last_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Email Address</label>
        <input type="text"   required placeholder='Email Address'className='form-input' id="email" value={data.email}  onChange={(e)=>handlechange(e)}/>
       </div>
       <div className='form-control'>
        <label className='label-form'>Mobile Number</label>
        <input type="number"   required placeholder='Mobile Number'className='form-input' id="mobile" value={data.mobile}  onChange={(e)=>handlechange(e)}/>
        </div>
        <div className='form-control'>
        <label className='label-form'>GST</label>
        <input type="text"   placeholder='GST'className='form-input' id="gst" value={data.gst}  onChange={(e)=>handlechange(e)}/>
       </div>
       <div className='form-control'>
        <label className='label-form'>zipcode</label>
        <input type="text"   required placeholder='zipcode'className='form-input' id="zipcode" value={data.zipcode}  onChange={(e)=>handlechange(e)}/>
       </div>
      
     
       <div className='form-control'>
        <label className='label-form'>Password</label>
        <input type="text"   required placeholder='Password'className='form-input' id="password" value={data.password} onChange={(e)=>handlechange(e)} />
       </div>
       </div>
     <div className='main-child'>
      <button className='main-child-btn' type='submit'>Update</button>
     </div>
      </section>
      <hr/>
      <section className="main-myaccount">
    <div className='main-child' style={{justifyContent:"space-between"}}>
    <h2 style={{textAlign:"left"}} className='h3-font'>Your Addresses</h2>
    {textarea ?
    <button className='main-child-btn'onClick={()=>settextarea(!textarea)}>Submit</button>

    :
    <div className='main-child-btn'onClick={handleOpen}>Add Address</div>


  }

   
     </div>
       <div className='main-child-address' style={{justifyContent:"flex-start",width:"90%"}}>
        {[1,2].map((data,index)=>(
          <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <EditIcon/>
              <CloseIcon/>
            </div>
       <textarea cols="25" rows="5" id="textarea" className='label-form'>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</textarea>
</div>
        ))}
        {textarea && 
         <textarea cols="25" rows="5" id="textarea" className='label-form'></textarea>

        }
        
      
     
       
       </div>
    
      </section>
      <hr/>
      <section className="main-myaccount">
    <div className='main-child' style={{justifyContent:"space-between"}}>
    <h2 style={{textAlign:"left"}} className='h3-font' >Communication Perferences</h2>
  

   
     </div>
       <div className='main-child-address ' style={{justifyContent:"flex-start",width:"100%"}}>
    <input type="checkbox"/>
        <p className='labe-form'>I would like to receive communication from ProDyme</p>
      
     
       
       </div>
    
      </section>
      <hr/>
      <section className="main-myaccount">
    <div className='password-container' >
    <h2 style={{textAlign:"left"}} className='h3-font' >Change Password</h2>
    <p style={{textAlign:"left"}} className='label-form'>Please set a strong password by referring to the below guidelines.</p>
  
<div className='profile-password-container'>
  <div style={{width:"40%"}}>
<div className='form-control w-100'>
        <label className='label-form'>New Password</label>
        
        <input type="text"  required placeholder='New Password'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control w-100' >
        <label className='label-form'>Confirm Password</label>
        
        <input type="text"  required placeholder='Confirm Password'className='form-input' id="business_name" value={data.business_name} onChange={(e)=>handlechange(e)} />
        </div>
      <button className='w-100 btn-create' type='submit'>Create New Password</button>

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
      <hr/>
      </form>
      </div>
      </div>
  )
}

export default MyAccount