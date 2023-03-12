import React, { useEffect, useState,useRef  } from 'react'
import { PDFExport } from '@progress/kendo-react-pdf';
import style from "./orderdetails.module.css"
import pdf from "./pdf.svg"
import share from "./share.svg"
import save from "./save.png"

import { NavLink, useLocation, useNavigate } from 'react-router-dom'


import Invoice from '../../common/invoice';

const OrderDetails = () => {
    const [open, setOpen] = React.useState(false);
    const [hide,sethide]=useState(true)
    const pdfExportComponent = useRef(null);
  const location=useLocation();
  console.log(location,"loaction")
  const cardata1=location.state.data || [];
  const sum=location.state.total || 0;


  const handleClick = () => {
    document.getElementById('demo').style.display="block"
    sethide(false)
    pdfExportComponent.current.save();
    sethide(true)
    setTimeout(()=>{
    document.getElementById('demo').style.display="none"
    },2000)
  
  
  };









useEffect(()=>{
window.scrollTo(0,0)
},[])
  return (
   <>
    
       <div className={`${style.container}`}>
  <div className={style.sidebar}>
      
  </div>
  <div className={style.section}>
      <div className={style.breadcrumb}>
          <h5><NavLink to='/' className={style.nav}>Home </NavLink>/<NavLink to='/myorder' className={style.nav}>MyOrder </NavLink> / OrderDetails</h5>
      </div>
      <div className={style.flexbox}>
      <h1  className={style.checkouttitle}>Order Details</h1>
      <div>
        
      </div>
      <div style={{width:"250px"}}></div>
      <div className={style.groupicon}>
          <img src={pdf} alt="" />
          <span className={style.download} onClick={handleClick}>
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
              <h1 className={style.h3}>Order Details</h1>
     
              </div>
              <div className={style.tablecontainer}>
              <PDFExport ref={pdfExportComponent} paperSize="A4" >
                <div style={{ display: 'none' }} id="demo">
                <Invoice/>
                </div>
            </PDFExport>
                
            <table className='checkout-main-table'>
                <thead className='checkout-table-head'>
                    <tr className={style.tr}>
                      {hide && 
                        <td></td>
                      
                      }
                        <td>YOUR PRODUCT</td> <td>RATE</td> <td>QUANTITY
</td><td colSpan="2">PRICE</td>
                    </tr>
                </thead>
                <tbody className='checkout-table-body'  style={{width:"100%",tableLayout:"fixed"}}>
                    {cardata1 && cardata1.map((data,index)=>(
  <tr className={style.tr}>
    {hide && 
     <td>
     </td>
    }
 
  <td style={{display:"flex",justifyContent:"space-between"}}>
  {hide &&  <img src={data.productImage} alt="" style={{width:"50px"}} />
}
    {data.productName}</td>
     <td>{data.price}</td>
     <td className='checkout-table-body-td'>
    {data.qty}
    </td>
    <td>{data.qty*data.price}</td>
   
   
  </tr>
                    ))}
                  
                   
                </tbody>
         
            </table>

            </div>
            <div className={style.pricesection}>
              <span className={style.total}><b>Total</b></span>
              <span className={style.total}><b>{cardata1.length}<br/>Items</b></span>
              <span className={style.total}><b>{sum}</b></span>
            </div>
            <section className='checkout-main-second'>
        </section>
            </div>


          
           
          </div>
          <div className={style.cart}>
          <div className='checkout-main-div' style={{width:"100%"}}>
            <div className={style.titlecontainer}>
            <h1 className={style.servicetitle}>Service Cart</h1>
                <span>Total cost<br/><strong>₹{sum}</strong></span>
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
<td></td>
  <td>ITEM{data}</td> <td>IMAGE{data}</td> <td className='checkout-table-body-td'>
    {data}
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
        {/* <button className='checkout-main-child-btn'>Proceed To Checkout</button> */}
        </section>
            </div>
          </div>

      </div>
  </div>
</div>
   </>
  )
}
export default OrderDetails