import React, { useEffect, useState } from 'react'
import style from "./checkout.module.css"
import pdf from "./pdf.svg"
import share from "./share.svg"
import save from "./save.png"
import backarrow from "./backarrow.svg"
import Cart from '../shipping/cart'
import { NavLink, useNavigate } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  Axios  from 'axios';
import deletes from "./delete.png";
import { IP_ADDRESS } from '../../ip';
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
const CheckoutOne = () => {
    const [open, setOpen] = React.useState(false);
  const [box,setbox]=useState([])
  const [email,setemail]=useState('');
  const [name,setname]=useState('');
  const [guest,setguest]=useState(false)

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
const [sum,setsum]=useState(total)

const handleAdd=(e)=>{
  const datalocal=JSON.parse(localStorage.getItem('Cart'))
  let newdata=cardata[e.target.id]
  let uniqueId=newdata.product_id || newdata.product_id_id;
  

  for(let i=0;i<datalocal.length;i++){
    if(datalocal[i].product_id==uniqueId){
      console.log(uniqueId)
      datalocal[i].qty=parseInt(cardata[i].qty)+1;
    }else if(datalocal[i].product_id_id==uniqueId){
      console.log(newdata)
          
          datalocal[i].qty=parseInt(cardata[i].qty)+1;
         
        }
  setcardata(datalocal)

  localStorage.setItem('Cart',JSON.stringify(datalocal))

  }
 
}
const handleSub=(e)=>{
  const datalocal=JSON.parse(localStorage.getItem('Cart'))
  let newdata=cardata[e.target.id]
  let uniqueId=newdata.product_id || newdata.product_id_id;
  for(let i=0;i<datalocal.length;i++){
    if(datalocal[i].product_id==uniqueId){
  console.log(newdata)
      
      datalocal[i].qty=parseInt(cardata[i].qty)-1;
      if(datalocal[i].qty===0){
        for(let j=i;j<datalocal.length;j++){
          datalocal[j]=cardata[j+1]
        }
        datalocal.length=datalocal.length-1
        setcardata(datalocal)
        localStorage.setItem('Cart',JSON.stringify(datalocal))
      }
    }else if(datalocal[i].product_id_id==uniqueId){
      console.log(newdata)
          
          datalocal[i].qty=parseInt(cardata[i].qty)-1;
          if(datalocal[i].qty===0){
            for(let j=i;j<datalocal.length;j++){
              datalocal[j]=cardata[j+1]
            }
            datalocal.length=datalocal.length-1
            setcardata(datalocal)
            localStorage.setItem('Cart',JSON.stringify(datalocal))
          }
        }
  setcardata(datalocal)

  localStorage.setItem('Cart',JSON.stringify(datalocal))

  }
 
}
const handleCheckout=()=>{
  nav('/shipping')
//   if(!accessToken){
//     handleOpen()
//     setmsg('Please Fill The Information !')
//     setguest(true)
//     setTimeout(()=>{
//       // handleClose()
//           },2000)
//   }else{
//     let accessToken=localStorage.getItem('prodymeApiToken')

//     let config={
//         headers: { Authorization: `Token ${accessToken}` }
//     }
//     const obj={
//       orderData:cardata,
//       totalAmount:total
//     }
//     Axios.post(`${IP_ADDRESS}postOrder/`,obj,config)
//     .then((res)=>{
// console.log(res.data) 
// handleOpen()
// setmsg(res.data.message)

// setTimeout(()=>{
//   nav('/myorder')
//   localStorage.removeItem('Cart');

// handleClose()
// },2000)
//     }).catch((err)=>{
//       console.log(err)
//       handleOpen()
//       setmsg(err.message)
      
//       setTimeout(()=>{
//         nav('/myorder')
//       handleClose()
//       },2000)
//     })
   
//   }
}
const handlesubmit=(e)=>{
  e.preventDefault()
  const obj={
    email:email,
    name:name,
    totalAmount:total,
    orderData:cardata
  }
  console.log(obj,"obj")
  Axios.post(`${IP_ADDRESS}GuestCheckout/`,obj).then((res)=>{
    console.log(res)
    setmsg(res.data.message)
    setTimeout(()=>{
      setmsg('')
      nav('/')
      localStorage.removeItem('Cart')
      handleClose()
    },2000)
  }).catch((err)=>{
    console.log(err)
    setmsg(err.message)
  })
}
const handlecheckbox=(e)=>{
  let elementToRemove =cardata[e.target.id];
  console.log(elementToRemove)
    let index = box.findIndex(item => item.product_id === elementToRemove.product_id);
    console.log(index)
  if (index !== -1) {
    box.splice(index, 1);
     console.log(box,"1")
  }else{
    box.push(elementToRemove)
     console.log(box)
  }
   
  
  const totalamt=box.map((data,index)=>{
    return data.price*data.qty
  }).reduce((partialSum, a) => partialSum + a, 0)
  setsum(totalamt)
  console.log(box,"box",totalamt)

}
const handledelete=(e)=>{
  console.log(cardata[e.target.id])
  for(let i=0;i<cardata.length;i++){
    if(cardata[e.target.id].product_id===cardata[i].product_id){
      cardata[i]=cardata[i+1]
    }
  }
  cardata.length=cardata.length-1;
  localStorage.setItem('Cart',JSON.stringify(cardata))
}
useEffect(()=>{
  setcardata(cardata1)
})
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
          <p className={style.step}>Step 1: Shopping Cart</p>
          <div className={style.border}>
          <hr className={style.hr} />
          <hr className={style.hrnone}/>
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
          <div className='checkout-main-div' style={{width:"100%"}}>
              <div className='product-cart'>
              <h1 className=' h3-font'>Products Cart</h1>
              <div className='pincode-container'>
<LocationOnOutlinedIcon/>
<input type="text" className='pincode' placeholder='Pincode'/>
</div>

              </div>
            <table className='checkout-main-table'>
                <thead className='checkout-table-head'>
                    <tr className='checkout-table-head-tr h3-font'>
                        <td></td>
                        <td>YOUR PRODUCT</td> <td>RATE</td> <td>QUANTITY
</td><td colSpan="2">PRICE</td>
                    </tr>
                </thead>
                <tbody className='checkout-table-body'>
                    {cardata && cardata.map((data,index)=>(
  <tr className='checkout-table-body-tr'>
    <td><input type="checkbox" className='checkbox-checkout' id={index} onClick={(e)=>handlecheckbox(e)}/>
    </td>
  <td style={{display:"flex",justifyContent:"space-between"}}>
    <img src={data.productImage} alt="" style={{width:"50px"}} />
    {data.productName}</td> <td>{data.price}</td> <td className='checkout-table-body-td'>
    <span className='checkout-table-body-td-icon' id={index} onClick={(e)=>handleSub(e)}>-</span>
    {data.qty}
    <span className='checkout-table-body-td-icon' id={index} onClick={(e)=>handleAdd(e)}>+</span>
    </td>
    <td>{data.qty*data.price}</td>
    <td>
        <img src={deletes} alt="" className={style.deleteicon} id={index} onClick={(e)=>handledelete(e)} />
    </td>
  </tr>
                    ))}
                  
                   
                </tbody>
                <tfoot className='checkout-table-foot'>
                <tr className='checkout-table-foot-tr'>
  <td>Sub Total</td> <td colSpan="4" ></td> <td>INR {sum}</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td>Shipping</td> <td colSpan="4"></td> <td>INR 100</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td>Total</td> <td colSpan="4"></td> <td>INR {sum+100}</td>
  </tr>
                </tfoot>
            </table>
            <section className='checkout-main-second'>
        <button className='checkout-main-child-btn' onClick={handleCheckout}>Proceed To Checkout</button>
        </section>
            </div>


          
           
          </div>
          <div className={style.cart}>
          <div className='checkout-main-div'>
            <div className={style.titlecontainer}>
            <h1 className={style.servicetitle}>Service Cart</h1>
                <span>Total cost<br/><strong>₹21200.58</strong></span>
                <button className={style.btncheckout}>Checkout</button>
            </div>
                
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
  <td colSpan="2">Sub Total</td> <td colSpan="2"></td> <td>INR 100</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td colSpan="2">Shipping</td> <td colSpan="2"></td> <td>INR 100</td>
  </tr>
  <tr className='checkout-table-foot-tr'>
  <td colSpan="2">Total</td> <td colSpan="2"></td> <td>INR 100</td>
  </tr>
                </tfoot>
            </table>
            <section className='checkout-main-second'>
        <button className='checkout-main-child-btn'>Proceed To Checkout</button>
        </section>
            </div>
          </div>

      </div>
  </div>
</div>
   </>
  )
}

export default CheckoutOne