import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import "./category.css"
import img from "./b1.png"
const Category = () => {
    const [state,setState]=useState([])
    const nav=useNavigate()
 
    const location= useLocation()
    const productdata=location.state.data || []
    const handledetails=(e)=>{
      console.log(productdata[e.target.id],"target")
      nav('/details',{state:{id:"1",data:productdata[e.target.id],relateddata:productdata}})
    }
    useEffect(()=>{
    fetch('https://prodymeapi.revivingindia.com/api/getCategoryImage/',{
        cache: "no-store",
       
    }).then((res)=>{
        console.log(res,"rakesh")
        return res.json()
    }).then((res)=>{
      setState(res.data)
    }).catch((err)=>{
        console.log(err,"err")
    })
       
    },[])
  
  return (
    <>
          <section className="container" style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
             <h1 style={{color:"whitesmoke"}}>
              <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\Category
             </h1>
          
          </section>
     <section style={{marginTop:"10px",borderTop:"2px #ff7a34"}}>
        <div  style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
          {state.map((item,index) => (
            <div className="cardc">
            <img src={item.categoryImage} alt="Avatar" style={{width:"100%",height:"150px" }}/>
            <div className="containerc">
              <h4><b> {item.category_name}</b></h4> 
            </div>
          </div>
          
          ))}
        </div>
        <div className="d-flex" style={{marginTop:"100px",justifyContent:"space-between"}}>
          <section className="features">
            
            
            <select style={{border:"none",width:"150px",borderRadius:"3px",outline:"none"}}>
                <option value="Most Bought" style={{border:"none"}} >Most Bought</option>
                <option value="Most Bought" style={{border:"none"}}> Price : Low to High</option>
                <option value="Most Bought" style={{border:"none"}}>Price : High to Low</option>
                <option value="Most Bought" style={{border:"none"}}>Ratings</option>
            </select>
          </section>
          <span
  data-v-849a1390=""
  className="search-bar ant-input-search ant-input-affix-wrapper"

  style={{ width: "260px", marginRight: "50px",display:"flex",justifyContent:"space-around",alignItems:"center" ,border:"3px #ff7a34"}}
>
  <input
    placeholder="Search for tags or keywords"
    type="text"
    className="ant-input"
  />
  <span className="ant-input-suffix" style={{position:"absolute",marginLeft:"200px"}}>
    <i
      aria-label="icon: search"
      tabIndex={-1}
      className="anticon anticon-search ant-input-search-icon"
    >
      <svg
        viewBox="64 64 896 896"
        data-icon="search"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className=""
      >
        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
      </svg>
    </i>
  </span>
</span>

          <span style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
            <button className="pagination-button">
            <span className="fa fa-angle-left" style={{color:"#ff7a34",fontSize:"30px"}}></span>
            </button>
            <input type="number" value={1} style={{width:"30px",height:"30px"}}></input> of 45{" "}
            <button className="pagination-button">
              <right-outlined></right-outlined>
            </button>
          </span>
        </div>
        <div>
          <h2 className="product-heading">Category of Products</h2>
          <aside className="card-p20" style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {productdata.length >0 ? 
            productdata.map((item,index) => (
        
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
        <div>
          {/* <MyCarousel></MyCarousel> */}
        </div>
        <div>
          {/* <StarCarousel></StarCarousel> */}
        </div>
        <div>
          <h2 className="product-heading">Category of Products</h2>
          <aside className="card-p20" style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {productdata.length >0 ? productdata.map((item,index) => (
               <div className="cardc ">
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
        <div>
        <h2 className="product-heading"> Products On Sale</h2>
          <aside style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {productdata.length >0 ? 
            productdata.slice(0,4).map((item,index) => (
              <div className="cardc" >
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
          <h2 className="product-heading">Three Star</h2>
          <aside style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {productdata.length >0 ? 
            productdata.slice(0,4).map((item,index) => (
              <div className="cardc" >
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
          <h2 className="product-heading">Five Star</h2>
          <aside style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {productdata.length >0 ? 
            productdata.slice(0,4).map((item,index) => (
              <div className="cardc" >
              <img src={item.productImage} alt="Avatar" style={{width:"100%",height:"150px" }}/>
              <div className="containerc">
                <h4><b>{item.productName}</b></h4> 
                <aside className="_rating mb10">
                <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
          <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
          <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
          <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
          <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
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
      </section>
    </>
  )
}

export default Category