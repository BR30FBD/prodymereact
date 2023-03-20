import  Axios  from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IP_ADDRESS } from '../../ip'
import Pagination from '../../pagination'
import img from "./b1.png"
import  style from "./myorder.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  focus:"none",
  p: 4,
};
let PageSize = 8;
const MyOrder = () => {
  const [from,setfrom]=useState('')
  const [to,setto]=useState('')
  const [data,setdata]=useState([])
  const nav=useNavigate();
  const [open, setOpen] = React.useState(false);
  const [msg,setmsg]=useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  let accessToken=localStorage.getItem('prodymeApiToken')
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize|| 0;
    const lastPageIndex = firstPageIndex + PageSize || PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,data]);
  useEffect(()=>{
    Axios.get(`${IP_ADDRESS}getOrder/`,{
      headers:{
        Authorization: `Token ${accessToken}`
      }
    }).then((res)=>{
      setdata(res.data.data) 
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  const handleorder=(data)=>{
    console.log(data,"data")
    nav('/orderdetails',{state:{id:"23",data:data.orderData,total:data.totalAmount,date:data.Date,ddate:data.DeliveryDate}})
  }
  const handlequery=(e)=>{
    const config={
      headers:{
        Authorization: `Token ${accessToken}`
      }
    };
    Axios.get(`${IP_ADDRESS}api/fetchticketorder/${e.target.id}`,).then((res)=>{
      console.log(res.data.data,"myorder")
      if(res.data.data.length===0){
        console.log(res.data.data)
        handleOpen()
        setmsg('Query Not Found !')
        setTimeout(()=>{
          handleClose();
          setmsg('')
        },1000)
      }else{
        nav('/mymessage',{state:{id:"68",data:res.data.data}})
      }

    })
  }
 const applydate=()=>{
  const config={
    headers:{
      Authorization: `Token ${accessToken}`
    }
  };
  const data={
    from_date:from,
    to_Date:to
  }
  Axios.post(`${IP_ADDRESS}filterOrderbyDate/`,data,config).then((res)=>{
    console.log(res,"date")
    setdata(res.data.filterData);
  }).catch((err)=>{
    console.log(err)
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
        <Box sx={styles}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center",marginBottom:"20px"}}>
         {msg}
          </Typography>
        
         
        </Box>
      </Modal>
    <div {...style}>
     <section  style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\MyOrder
           </h1>
        
        </section>
        <div className='main-child text-center'>
      <h1 className='main-child-h3'>MyOrder</h1>
     </div>
     <div className='continer-parent'>
     <div className='myorder-container'>
        <section className='myorder-main'>
            <div className='myorder-main-child'>
              <NavLink to='/myaccount' className="myorder-main-child-link">MY PROFILE</NavLink>
              <NavLink to='/mymessage' className="myorder-main-child-link">MY MESSAGES</NavLink>
              <NavLink to='/myorder' className="myorder-main-child-link">MY ORDERS</NavLink>
              <NavLink to='/' className="myorder-main-child-link">MY DESIGNS</NavLink>
              <NavLink to='/mywishlist' className="myorder-main-child-link">WISHLIST</NavLink>

               
            </div>
            <div className='myorder-main-child-first'>
<h1>Your Last Orders</h1>
            </div>
            <div className='myorder-main-child-second'>
<div className='myorder-main-child-second-search'><input type="text" placeholder='Search for tags or keywords' className='myorder-main-child-second-input'/><span className='icon-myorder-search'>&#9740;</span></div>
-OR-
<div className='date-container' >
  <div className='form-control-date'>
    <label htmlFor="">From</label>
<input type="date" onChange={(e)=>setfrom(e.target.value)} />
</div>
<div className='form-control-date'>
    <label htmlFor="">To</label>
<input type="date" onChange={(e)=>setto(e.target.value)} />
</div>
</div>
<div>
<button className='main-child-btn' onClick={applydate}>Apply</button>
</div>
            </div>
        </section>
        <section className='myorder-main-second'>
<table className='myorder-table'>
    <thead className='myorder-thead'>
        <tr>
            <td>Order Date</td>
            <td>Order No.</td>
            <td>
Estimated Delivery Date</td>
<td>Order Total</td>
<td>
Order Status</td>
<td colSpan="2">Remarks</td>
        </tr>
    </thead>
    <tbody className='myorder-tbody'>
        {data.length>0 && currentTableData.map((data,index)=>(
  <tr key={index}>
  <td>{data.Date}</td>
  <td><a className='href-link' role="button" onClick={()=>handleorder(data)}>{data.orderId}</a></td>
  <td>{data.DeliveryDate}</td>
  <td>INR {data.totalAmount}</td>
  <td><button className='myorder-tbody-btn' style={{background:`${data%2==0 ? "#ffd2c4":""}`}}>{data.status}</button></td>
  <td id={data.orderId} style={{cursor:"pointer"}} onClick={(e)=>handlequery(e)}>&#9993;</td>
  </tr>
        ))}
      
    </tbody>
</table>
        </section>
        </div>
        <div className='pagnation'>
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /></div>
        </div>
    
    </div>
    </>
  )
}

export default MyOrder