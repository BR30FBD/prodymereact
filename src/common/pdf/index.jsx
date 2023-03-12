import React, { useRef, useState } from 'react'
import style from "./pdf.module.css"
import { PDFExport } from '@progress/kendo-react-pdf';
const PDF = () => {
    const cardata=JSON.parse(localStorage.getItem('Cart')) || [];
    const pdfExportComponent = useRef(null);
    const total=localStorage.getItem('Cart') && JSON.parse(localStorage.getItem('Cart')).map((data,index)=>{
      return data.price*data.qty
    }).reduce((partialSum, a) => partialSum + a, 0)
    const [sum,setsum]=useState(total)
    const handleClick = () => {
      pdfExportComponent.current.save();
    };
  return (
    <>
     <div className={style.tablecontainer}>
              <PDFExport ref={pdfExportComponent} paperSize="A4">
                
            <table className='checkout-main-table'>
                <thead className='checkout-table-head'>
                    <tr className={style.tr}>
                        <td></td>
                        <td>YOUR PRODUCT</td> <td>RATE</td> <td>QUANTITY
</td><td colSpan="2">PRICE</td>
                    </tr>
                </thead>
                <tbody className='checkout-table-body'  style={{width:"100%",tableLayout:"fixed"}}>
                    {cardata && cardata.map((data,index)=>(
  <tr className={style.tr}>
   
  <td style={{display:"flex",justifyContent:"space-between"}}>
    <img src={data.productImage} alt="" style={{width:"50px"}} />
    {data.productName}</td> <td>{data.price}</td> <td className='checkout-table-body-td'>
    {data.qty}
    </td>
    <td>{data.qty*data.price}</td>
   
  </tr>
                    ))}
                  
                   
                </tbody>
                {/* <tfoot className='checkout-table-foot'>
                <tr className={style.tr}>
  <td>Sub Total</td> <td colSpan="4" ></td> <td>INR {sum}</td>
  </tr>
  <tr className={style.tr}>
  <td>Shipping</td> <td colSpan="4"></td> <td>INR 100</td>
  </tr>
  <tr className={style.tr}>
  <td>Total</td> <td colSpan="4"></td> <td>INR {sum+100}</td>
  </tr>
                </tfoot> */}
            </table>
            </PDFExport>

            </div>
            <div className={style.pricesection}>
              <span className={style.total}><b>Total</b></span>
              <span className={style.total}><b>{cardata.length}<br/>Items</b></span>
              <span className={style.total}><b>{sum}</b></span>
            </div>
    </>
  )
}

export default PDF