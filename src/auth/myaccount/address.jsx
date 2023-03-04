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
const [data,setdata]=useState({
    address_type:"",
    address_nickname:"",
    address:""
})

const [textarea,settextarea]=useState(false)
const [open, setOpen] = React.useState(false);
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
    Axios.post(`${IP_ADDRESS}api/postaddress/`,data,config).then((res)=>{
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
  console.log(list[e.target.id])
  setdata(list[e.target.id])
  handleOpen1()
}
const handleupdate=()=>{
  let config={
    headers: { Authorization: `Token ${accessToken}` }
}
  Axios.post(`${IP_ADDRESS}api/UpdateAddress/`,data,config).then((res)=>{
    console.log(res,"upadte")
    if(res.data.data===1){
      setmsg('Address Update Successfully !')
      setTimeout(()=>{
        setmsg('')
        dataget()
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
        <div className='form-control' style={{width:"100%",padding:"10px"}}>
        <label className='label-form'>Address*</label>
        <input type="text" style={{width:"95%",marginLeft:"10px"}}  required placeholder='Address'className='form-input' id="address" value={data.address} onChange={(e)=>handlechange(e)} />
        </div>
       
          </div>
          <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
          <button className='main-child-btn 'onClick={()=>settextarea(!textarea)}>Cancel</button>
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
        <div className='form-control' style={{width:"100%",padding:"10px"}}>
        <label className='label-form'>Address*</label>
        <input type="text" style={{width:"95%",marginLeft:"10px"}}  required placeholder='Address'className='form-input' id="address" value={data.address} onChange={(e)=>handlechange(e)} />
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
    <h2 style={{textAlign:"left"}} className='h3-font'>Your Addresses</h2>
    {textarea ?
    <button className='main-child-btn'onClick={()=>settextarea(!textarea)}>Submit</button>

    :
    <div className='main-child-btn'onClick={handleOpen}>Add Address</div>


  }

   
     </div>
       <div className='main-child-address' style={{justifyContent:"flex-start",width:"90%"}}>
        
        {list.length>3 ? 
      <Slider {...settings} style={{width:"100%"}}>
      {list.map((data,index)=>(
        <div className='address-card' style={{background:"#F8F8F8",margin:"5px",width:"33%"}}>
          
          <div style={{display:"flex",justifyContent:"start",alignItems:"baseline"}}>
            <input type="radio" style={{color:"#ff7a34"}}/>
     <textarea cols="25" rows="5" id="textarea" className='label-form'>{data.address}</textarea>
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
              <input type="radio" style={{color:"#ff7a34"}}/>
       <textarea cols="25" rows="5" id="textarea" className='label-form'>{data.address}</textarea>
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