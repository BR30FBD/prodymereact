import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import img from "./b1.png"
import stylecheckout from "./checkout.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
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
const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const [msg,setmsg]=useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nav=useNavigate();
  let accessToken=localStorage.getItem('prodymeApiToken')
  const [cardata,setcardata]=useState([])
  const cardata1=JSON.parse(localStorage.getItem('Cart')) || [];
const total=localStorage.getItem('Cart') && JSON.parse(localStorage.getItem('Cart')).map((data,index)=>{
  return data.price*data.qty
}).reduce((partialSum, a) => partialSum + a, 0)

const handleAdd=(e)=>{
  let newdata=cardata[e.target.id]
  let uniqueId=newdata.product_id;
  for(let i=0;i<cardata.length;i++){
    if(cardata[i].product_id===uniqueId){
      cardata[i].qty=cardata[i].qty+1;
    }
  setcardata(cardata)

  localStorage.setItem('Cart',JSON.stringify(cardata))

  }
 
}
const handleSub=(e)=>{
  let newdata=cardata[e.target.id]
  let uniqueId=newdata.product_id;
  for(let i=0;i<cardata.length;i++){
    if(cardata[i].product_id===uniqueId){
      
      cardata[i].qty=cardata[i].qty-1;
      if(cardata[i].qty===0){
        for(let j=i;j<cardata.length;j++){
          cardata[j]=cardata[j+1]
        }
        cardata.length=cardata.length-1
        setcardata(cardata)
        localStorage.setItem('Cart',JSON.stringify(cardata))
      }
    }
  setcardata(cardata)

  localStorage.setItem('Cart',JSON.stringify(cardata))

  }
 
}
const handleCheckout=()=>{
  if(!accessToken){
    handleOpen()
    setmsg('Please Login First !')
    setTimeout(()=>{
      handleClose()
          },2000)
  }else{
    handleOpen()
    setmsg('Order Place Successfully!')
    setTimeout(()=>{
      nav('/myorder')
handleClose()
    },2000)
  }
}
useEffect(()=>{
  setcardata(cardata1)
})

  return (
    <div {...stylecheckout}>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
         {msg}
          </Typography>
       
        </Box>
      </Modal>
      <section  style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\Checkout
           </h1>
        
        </section>
        <div className='main-child text-center'>
      <h1 className='main-child-h3'>Checkout</h1>
     </div>
        <section className='checkout-main'>
            <div className='checkout-main-div'>
                <h1 className='header-checkout h3-font'>Products Cart</h1>
            <table className='checkout-main-table'>
                <thead className='checkout-table-head'>
                    <tr className='checkout-table-head-tr h3-font'>
                        <td></td>
                        <td>YOUR PRODUCT</td> <td>RATE</td> <td>QUANTITY
</td><td>PRICE</td>
                    </tr>
                </thead>
                <tbody className='checkout-table-body'>
                    {cardata && cardata.map((data,index)=>(
  <tr className='checkout-table-body-tr'>
    <td><input type="checkbox" className='checkbox-checkout'/>
    </td>
  <td>{data.productName}</td> <td>{data.price}</td> <td className='checkout-table-body-td'>
    <span className='checkout-table-body-td-icon' id={index} onClick={(e)=>handleSub(e)}>-</span>
    {data.qty}
    <span className='checkout-table-body-td-icon' id={index} onClick={(e)=>handleAdd(e)}>+</span>
    </td>
    <td>{data.qty*data.price}</td>
  </tr>
                    ))}
                  
                   
                </tbody>
                <tfoot className='checkout-table-foot'>
                <tr className='checkout-table-foot-tr'>
  <td>Sub Total</td> <td colSpan="3" ></td> <td>INR {total}</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td>Shipping</td> <td colSpan="3"></td> <td>INR 100</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td>Total</td> <td colSpan="3"></td> <td>INR {total+100}</td>
  </tr>
                </tfoot>
            </table>
            <section className='checkout-main-second'>
        <button className='checkout-main-child-btn' onClick={handleCheckout}>Proceed To Checkout</button>
        </section>
            </div>
            <div className='checkout-main-div'>
                <h1>Service Cart</h1>
            <table className='checkout-main-table'>
                <thead className='checkout-table-head'>
                    <tr className='checkout-table-head-tr'>
                        <td></td>
                        <td>ITEM</td> <td>IMAGE</td> <td>QTY</td><td>PRICE</td>
                    </tr>
                </thead>
                <tbody className='checkout-table-body'>
                    {[1,2,3,4,5,6].map((data,index)=>(
  <tr className='checkout-table-body-tr'>
      <td><input type="checkbox" className='checkbox-checkout'/>
    </td>
  <td>ITEM{data}</td> <td>IMAGE{data}</td> <td className='checkout-table-body-td'>
    <span className='checkout-table-body-td-icon'>-</span>
    {data}
    <span className='checkout-table-body-td-icon'>+</span>
    </td>
    <td>100{data}</td>
  </tr>
                    ))}
                  
                   
                </tbody>
                <tfoot className='checkout-table-foot'>
                <tr className='checkout-table-foot-tr'>
  <td>Sub Total</td> <td colSpan="3"></td> <td>INR 100</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td>Shipping</td> <td colSpan="3"></td> <td>INR 100</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td>Total</td> <td colSpan="3"></td> <td>INR 100</td>
  </tr>
                </tfoot>
            </table>
            <section className='checkout-main-second'>
        <button className='checkout-main-child-btn'>Proceed To Checkout</button>
        </section>
            </div>
        </section>
     
    </div>
  )
}

export default Checkout