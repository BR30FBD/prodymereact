import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Slider from "react-slick";
import { IP_ADDRESS } from '../../ip'
import  Axios  from 'axios';
import axios from 'axios';
import { BorderStyleTwoTone } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
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
const Address = () => {
    let accessToken=localStorage.getItem('prodymeApiToken')
    const [msg,setmsg]=useState('')
    const [list,setlist]=useState([])
    let sideno=list.length;
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
if (list.length > 4) {
  settings.dots = true;
  settings.arrows = true;
}
const [houseNo,setHouseNo]=useState('');
const [town,settown]=useState('');
const [landmark,setlandmark]=useState('');
const [pincode,setpincode]=useState('');
const [data,setdata]=useState({
    address_type:"",
    address_nickname:"",
    address:{
      houseNo:"",
      town:"",
      landmark:"",
      pincode:""
    }
})


const [textarea,settextarea]=useState(false)
const [open, setOpen] = React.useState(false);
const [addressid,setaddressid]=useState('')
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [openmodal, setOpenModal] = React.useState(false);
const handleOpenmodal = () => setOpenModal(true);
const handleClosemodal = () => setOpenModal(false);
const [openEdit, setOpenEdit] = React.useState(false);
const handleOpen1 = () => setOpenEdit(true);
const handleClose1 = () => setOpenEdit(false);
const handlechange=(e)=>{
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setdata(newdata)
    console.log(data)
}
const handlesubmit=(e)=>{
    let config={
        headers: { Authorization: `Token ${accessToken}` }
    }
    const body={
      address_type:data.address_type,
      address_nickname:data.address_nickname,
      address:{
        houseNo:houseNo,
        town:town,
        landmark:landmark,
        pincode:pincode
      }
    }
    Axios.post(`${IP_ADDRESS}api/postaddress/`,body,config).then((res)=>{
        console.log(res)
        setmsg(res.data.data)
        setTimeout(()=>{
          setmsg('')
          dataget()
          handleClose()
        },2000)
    }).catch((err)=>{
        console.log(err)
    })
}
const dataget=()=>{
  let config={
    headers: { Authorization: `Token ${accessToken}` }
}
  Axios.get(`${IP_ADDRESS}api/getaddress/`,config).then((res)=>{
    console.log(res,"get")
    setlist(res.data.data)
  }).catch((err)=>{
    console.log(err)
  })
}
const handleedit=(e)=>{
  
  setdata(list[e.target.id])
  setaddressid(list[e.target.id].address_id)
  setHouseNo(list[e.target.id].address.houseNo)
  settown(list[e.target.id].address.town)
  setlandmark(list[e.target.id].address.landmark);
  setpincode(list[e.target.id].address.pincode)
  handleOpen1()
  console.log("hello",list)
}
const handleupdate=()=>{
  let config={
    headers: { Authorization: `Token ${accessToken}` }
}
const body={
  address_id:addressid,
  address_type:data.address_type,
  address_nickname:data.address_nickname,
  address:{
    houseNo:houseNo,
    town:town,
    landmark:landmark,
    pincode:pincode
  }
}
  Axios.post(`${IP_ADDRESS}api/UpdateAddress/`,body,config).then((res)=>{
    console.log(res,"upadte")
    if(res.data.data===1){
      setmsg('Address Update Successfully !')
      dataget()
      setTimeout(()=>{
        setmsg('')
       
        handleClose1()
      },2000)
    }
  }).catch((err)=>{
    console.log(err,"update")
  })
}
const handledelete=(e)=>{
  let config={
    headers: { Authorization: `Token ${accessToken}` }
}
  console.log(e,"err")
  const body={
    address_id:e
  }
  Axios.post(`${IP_ADDRESS}api/DeleteAddress/`,body,config).then((res)=>{
    console.log(res,"delete")
    setmsg(res.data.message)
    handleOpenmodal()
    dataget()
    setTimeout(()=>{
      setmsg('')
      handleClosemodal()
    },2000)
  }).catch((err)=>{
    console.log(err)
  })
}
const location=useLocation()
console.log(location,"location")
useEffect(()=>{
  dataget()
},[])
  return (
    <>
      <Modal
        open={openmodal}
        onClose={handleClosemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" className="h3-font" sx={{textAlign:"center"}}>
        {msg}
          </Typography>
      
         
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" className="h3-font" sx={{textAlign:"center"}}>
        {msg || "Add Your Address"}
          </Typography>
          <div className='main-child'>
          <div className='form-control'>
        <label className='label-form'>Address Type</label>
        
        <input type="text"  required placeholder='Address Type'className='form-input' id="address_type" value={data.address_type} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Address Nickname</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" value={data.address_nickname} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>House No</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname"   onChange={(e)=>setHouseNo(e.target.value)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Town</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" onChange={(e)=>settown(e.target.value)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>LandMark</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname"  onChange={(e)=>setlandmark(e.target.value)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Pincode</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" onChange={(e)=>setpincode(e.target.value)} />
        </div>
        
       
          </div>
          <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
          <button className='main-child-btn 'onClick={handleClose}>Cancel</button>
          <button className='main-child-btn'onClick={handlesubmit}>Submit</button>

          </div>
        </Box>
      </Modal>
      <Modal
        open={openEdit}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" className="h3-font" sx={{textAlign:"center"}}>
        {msg|| "Edit Your Address"}
          </Typography>
          <div className='main-child'>
          <div className='form-control'>
        <label className='label-form'>Address Type</label>
        
        <input type="text"  required placeholder='Address Type'className='form-input' id="address_type" value={data.address_type} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Address Nickname</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" value={data.address_nickname} onChange={(e)=>handlechange(e)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>House No</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" value={houseNo}  onChange={(e)=>setHouseNo(e.target.value)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Town</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" value={town} onChange={(e)=>settown(e.target.value)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>LandMark</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" value={landmark} onChange={(e)=>setlandmark(e.target.value)} />
        </div>
        <div className='form-control'>
        <label className='label-form'>Pincode</label>
        
        <input type="text"  required placeholder='Address Nickname'className='form-input' id="address_nickname" value={pincode} onChange={(e)=>setpincode(e.target.value)} />
        </div>
        
       
          </div>
          <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
          <button className='main-child-btn 'onClick={handleClose1}>Cancel</button>
          <button className='main-child-btn'onClick={handleupdate}>Update</button>

          </div>
        </Box>
      </Modal>
      <section className="main-myaccount">
    <div className='main-child' style={{justifyContent:"space-between"}}>
      {location.pathname!=="/shipping" &&   
    <h2 style={{textAlign:"left"}} className='h3-font'>Your Addresses</h2>
      
      }
       {location.pathname!=="/shipping" &&  
    <div className='main-child-btn'onClick={handleOpen}>Add Address</div>
}


  

   
     </div>
       <div className='main-child-address' style={{justifyContent:"flex-start",width:"90%"}}>
        
        {list.length>3 ? 
      <Slider {...settings} style={{width:"100%"}}>
      {list.map((data,index)=>(
        <div className='address-card' style={{background:"#F8F8F8",margin:"5px",width:"33%"}}>
          
          <div style={{display:"flex",justifyContent:"start",alignItems:"baseline"}}>
            {index===0 ?  <input type="radio"  style={{color:"#ff7a34"}} checked="checked" /> :  <input type="radio"  style={{color:"#ff7a34"}}/>}
          
     <textarea cols="25" rows="5" id="textarea" className='label-form'>{data.address.houseNo}</textarea>
     </div>
     <div style={{display:"flex",justifyContent:"end"}}>
            {/* <EditIcon/>
            <CloseIcon/> */}
            <div style={{width:"60%",display:"flex",justifyContent:"space-around"}}>
            <span className='h3-font edit-btn' id={index} onClick={(e)=>handleedit(e)}>Edit</span>
            <span className='h3-font edit-btn' onClick={()=>handledelete(data.address_id)}>Delete</span>
            </div>
          </div>
</div>
      ))}
      </Slider> :
        <>
          {list.map((data,index)=>(
          <div className='address-card' style={{background:"#F8F8F8",margin:"5px",width:"33%"}}>
            
            <div style={{display:"flex",justifyContent:"start",alignItems:"baseline"}}>
            {index===0 ?  <input type="radio"  style={{color:"#ff7a34"}} checked="checked" /> :  <input type="radio"  style={{color:"#ff7a34"}}/>}
          
       <textarea cols="25" rows="5" id="textarea" className='label-form'>{`${data.address.houseNo},${data.address.town},${data.address.landmark},${data.address.pincode}`}</textarea>
       </div>
       <div style={{display:"flex",justifyContent:"end"}}>
              {/* <EditIcon/>
              <CloseIcon/> */}
              <div style={{width:"60%",display:"flex",justifyContent:"space-around"}}>
              <span className='h3-font edit-btn' id={index} onClick={(e)=>handleedit(e)}>Edit</span>
              <span className='h3-font edit-btn' onClick={()=>handledelete(data.address_id)}>Delete</span>
              </div>
            </div>
</div>
        ))}
        </>
      }
      
        {textarea && 
         <textarea cols="25" rows="5" id="textarea" className='label-form'></textarea>

        }
        
      
     
       
       </div>
    
      </section>
    </>
  )
}

export default Address