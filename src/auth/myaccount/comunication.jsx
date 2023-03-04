import React, { useEffect, useState } from 'react'
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
const Comunication = () => {
    const [msg,setmsg]=useState('')
    const [check,setcheck]=useState(false)
    let accessToken=localStorage.getItem('prodymeApiToken')
    const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
    const handlecommunication=()=>{
        let config={
          headers: { Authorization: `Token ${accessToken}` }
      }
      let body={
        communication_preference:"true"
      }
        Axios.post(`${IP_ADDRESS}api/postCommunicationPreference/`,body,config).then((res)=>{
          console.log(res,"body")
          setmsg(res.data.message)
          handleOpen()
          getdata()
          setTimeout(()=>{
            handleClose()
            setmsg('')
          },2000)
        }).catch((err)=>{
          console.log(err)
        })
      }
      const getdata=()=>{
        let config={
            headers: { Authorization: `Token ${accessToken}` }
        }
        Axios.get(`${IP_ADDRESS}api/getCommunicationPreference/`,config).then((res)=>{
            console.log(res.data.values[0].communication_preference,"rescomm")
            let cf=res.data.values[0].communication_preference;
            if(cf==='true'){
                setcheck(true)
            }
            
        }).catch((err)=>{
            console.log(err)
        })
      }
      useEffect(()=>{
        getdata()
      },[])
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
    <div className='main-child' style={{justifyContent:"space-between"}}>
    <h2 style={{textAlign:"left"}} className='h3-font' >Communication Perferences</h2>
  

   
     </div>
       <div className='main-child-address ' style={{justifyContent:"flex-start",width:"100%"}}>
    <input type="checkbox" checked={check} onClick={()=>handlecommunication()}/>
        <p className='labe-form'>I would like to receive communication from ProDyme</p>
      
     
       
       </div>
    
      </section>
    </>
  )
}

export default Comunication