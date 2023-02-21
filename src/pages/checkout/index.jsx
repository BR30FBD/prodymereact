import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "./b1.png"
import stylecheckout from "./checkout.css"
const Checkout = () => {
  return (
    <div {...stylecheckout}>
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
                <h1>Products Cart</h1>
            <table className='checkout-main-table'>
                <thead className='checkout-table-head'>
                    <tr className='checkout-table-head-tr'>
                        <td></td>
                        <td>YOUR PRODUCT</td> <td>RATE</td> <td>QUANTITY
</td><td>PRICE</td>
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
  <td>Sub Total</td> <td colSpan="3" ></td> <td>INR 100</td>
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