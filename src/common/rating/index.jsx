import React, { useEffect, useState } from 'react'

const Rating = ({num}) => {
    let newnum=Math.round(num);
    console.log(newnum,"num")
   const data=[];
    useEffect(()=>{
        for(let i=0;i<Math.round(num);i++){
  data.push(i)
        }
    },[])
  return (
  <>
  {data.map((data,index)=>(

<span className="fa fa-star checked" style={{color:"#ff7a34",fontSize:"30px"}} ></span>
))}
           {/* <span className="fa fa-star checked" style={{color:"#ff7a34",fontSize:"30px"}} id={item.product_id}></span>
           <span className="fa fa-star checked" style={{color:"#ff7a34",fontSize:"30px"}} id={item.product_id}></span>
           <span className="fa fa-star" style={{fontSize:"30px"}} id={item.product_id}></span>
           <span className="fa fa-star" style={{fontSize:"30px"}} id={item.product_id}></span> */}
  </>
  )
}

export default Rating