import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import img from "./b1.png"
import "./details.css"
const Details = () => {
 const nav=useNavigate()
    const location=useLocation()
    const data=location.state.data || {
        brandName:"",
        category_name_id:"",
        price:"",
        productImage:"",
        productName:"",
        product_id:""
    }
    const productdata=location.state.relateddata || []
    const handledetails=(e)=>{
        console.log(productdata[e.target.id],"target")
        nav('/details',{state:{id:"1",data:productdata[e.target.id],relateddata:productdata}})
      }
      useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    console.log(data,"details")
  return (
    <>
     <section className="container" style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <h1 style={{color:"whitesmoke"}}>
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\Productdetails
           </h1>
        
        </section>
        <main className="container detailspage">
        {/* Left Column / Headphones Image */}
        <div className="left-column">
          <img data-image="black" src="https://designmodo.com/demo/product-page/images/red.png" alt="" />
          <img data-image="blue" src="https://designmodo.com/demo/product-page/images/red.pngg" alt="" />
          <img data-image="red" className="active" src={data.productImage} alt="" style={{width:"500px"}}/>
        </div>
        {/* Right Column */}
        <div className="right-column">
          {/* Product Description */}
          <div className="product-description">
            <span>{data.category_name_id}</span>
            <h1>{data.productName}</h1>
            <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
          </div>
          {/* Product Configuration */}
          <div className="product-configuration">
            {/* Product Color */}
            {/* <div className="product-color">
              <span>Color</span>
              <div className="color-choose">
                <div>
                  <input data-image="red" type="radio" id="red" name="color" defaultValue="red" defaultChecked />
                  <label htmlFor="red"><span /></label>
                </div>
                <div>
                  <input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
                  <label htmlFor="blue"><span /></label>
                </div>
                <div>
                  <input data-image="black" type="radio" id="black" name="color" defaultValue="black" />
                  <label htmlFor="black"><span /></label>
                </div>
              </div>
            </div> */}
            {/* Cable Configuration */}
            <div className="cable-config">
              <span>Cable configuration</span>
              <div className="cable-choose">
                <button>Straight</button>
                <button>Coiled</button>
                <button>Long-coiled</button>
              </div>
              <a href="#">How to configurate your headphones</a>
            </div>
          </div>
          {/* Product Pricing */}
          <div className="product-price">
            <span>{data.price} INR</span>
            <a href="#" className="cart-btn">Add to cart</a>
          </div>
        </div>
      </main>
      <div>
          <h2 className="product-heading">Related Products</h2>
          <aside className="card-p20" style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {productdata.length >0 ? 
            productdata.slice(0,4).map((item,index) => (
        
               <div className="cardc">
               <img src={item.productImage} alt="Avatar" style={{width:"100%",height:"150px" }}/>
               <div className="containerc">
                 <h4><b>{item.productName}</b></h4> 
                 <aside className="_rating mb10">
                 <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
           <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
           <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
           <span className="fa fa-star"></span>
           <span className="fa fa-star"></span>
                 </aside>
                 <article className="_price mb24 dFlex alignItemsCenter">
                   <strong className="fs28">₹ {item.price}</strong>
                   <b className="fs16 pl10">per box</b>
                 </article>
                 <footer className="_comparator mb20">
                  <span>
                   {/* <input type="checkbox" className='ant-checkbox' style={{backgroundColor:"#ff7a34"}}/>
                   <a-checkbox > Compare </a-checkbox> */}
                      <a href="#" className="detail-btn">Add To Cart</a>
                   </span>
                   <a   className="detail-btn" id={index} onClick={(e)=>handledetails(e)}>View</a>
                   
                 </footer>
               </div>
             </div>
            )) :
            <h1>Result Not Found !</h1>
            }
          </aside>
        </div>
    </>
  )
}

export default Details