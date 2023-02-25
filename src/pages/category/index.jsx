import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./category.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import img from "./b1.png"
import Carousal from '../../common/carousal'
import Pagination from '../../pagination'
import Productonsale from './productonsale'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
let PageSize = 8;
let PageSize1 = 4;
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

const Category = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [state,setState]=useState([])
    const [threestar,setthreestar]=useState([])
    const [fivestar,setfivestar]=useState([])
 
    const nav=useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage1, setCurrentPage1] = useState(1);
 
    const location= useLocation()
    const productdata=location.state.data || []
    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize|| 0;
      const lastPageIndex = firstPageIndex + PageSize || PageSize;
      return productdata.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
  
    const handlecart=(e)=>{
      console.log(e.target.parentElement.childNodes[0].childNodes[1].value)
      let qtyval=e.target.parentElement.childNodes[0].childNodes[1].value;
      // console.log(currentTableData[e.target.id])
      let arr=productdata.filter((data,index)=>{
        if(data.product_id==e.target.id){
          console.log(data)
          if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
            var array = []; }
            data.qty=qtyval;
            console.log(data,"newobj")
          array.push(data)
          let uniqueArr = array.filter((obj, index, self) =>
    index === self.findIndex((o) => o.product_id === obj.product_id)
  );
  
            localStorage.setItem('Cart',JSON.stringify(uniqueArr));
            handleOpen()
            setTimeout(()=>{
              handleClose()
            },1000)
        }
      })

    }
   const handlecategory=(e)=>{
    fetch(`https://prodymeapi.revivingindia.com/api/getproduct/${e.target.id}`,{
      cache: "no-store",
     
  }).then((res)=>{
      return res.json()
  }).then((res)=>{
    // setload(false)
    console.log("category",res)

    nav("/cateogry",{state:{id:"1",data:res.data}})
    window.location.reload()
  })
   }
    const handledetails=(e)=>{
      fetch(`https://prodymeapi.revivingindia.com/api/getProductDetailOneData/${e.target.id}/`,{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{


         nav('/details',{state:{id:"1",data:res.data}})
    }).catch((err)=>{
        console.log(err,"err")
    })
   
    }

    useEffect(()=>{
    fetch('https://prodymeapi.revivingindia.com/api/getCategoryImage/',{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
      setState(res.data)
    }).catch((err)=>{
        console.log(err,"err")
    })
 
  

   
     
       
    },[])


    useEffect(()=>{
      fetch('https://prodymeapi.revivingindia.com/getFiveRatingData/',{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
      setfivestar(res.data)
    }).catch((err)=>{
        console.log(err,"err")
    })
    },[])
    useEffect(()=>{
      fetch('https://prodymeapi.revivingindia.com/getThreeRatingData/',{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
      setthreestar(res.data)
    }).catch((err)=>{
        console.log(err,"err")
    })
    },[])
    const currentTableData1 = useMemo(() => {
      const firstPageIndex = (currentPage1 - 1) * PageSize1|| 0;
      const lastPageIndex = firstPageIndex + PageSize1 || PageSize1;
      return state.slice(firstPageIndex, lastPageIndex);
    }, [currentPage1,state]);
    const handleAdd=(e)=>{

      console.log(e.target.id)
      if(!e.target.id){
        console.log("not found")
      }else{
        let ele=document.getElementById(e.target.id).parentElement;
        let val=ele.childNodes[1].value;
        ele.childNodes[1].value=parseInt(val)+1;
        console.log(ele.childNodes[1])
      }

     
    }
    const handleSub=(e)=>{
      console.log(e.target.id)
      if(!e.target.id){
        console.log("not found")
      }else{
        let ele=document.getElementById(e.target.id).parentElement;

        let val=ele.childNodes[1].value;
        if(val>1){
       
          ele.childNodes[1].value=parseInt(val)-1;
          console.log(ele.childNodes[1])
        }
       
      }

    }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
           Product Cart Added Successfully !
          </Typography>
       
        </Box>
      </Modal>
          <section className="container" style={{marginTop:"100px",backgroundImage:`url(${img})`,height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           
             <h1 style={{color:"whitesmoke"}}>
              <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\Category
             </h1>
          
          </section>
     <section style={{marginTop:"10px",borderTop:"2px #ff7a34"}}>
        <div  style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
          {currentTableData1.map((item,index) => (
            <div className="cardc" id={item.category_name} onClick={(e)=>handlecategory(e)}>
            <img src={item.categoryImage} id={item.category_name}  alt="Avatar" style={{width:"100%",height:"250px" }}/>
            <div className="containerc" id={item.category_name} >
              <h4 id={item.category_name} ><b id={item.category_name}  className='h3-font'> {item.category_name}</b></h4> 
            </div>
          </div>
          
          ))}
        </div>
        <div className='pagnation'>
        <Pagination
        className="pagination-bar"
        currentPage={currentPage1}
        totalCount={state.length}
        pageSize={PageSize1}
        onPageChange={page => setCurrentPage1(page)}
      />
      </div>
        <div className="d-flex" style={{marginTop:"100px",justifyContent:"space-between"}}>
          <section className="features">
            
            
            <select style={{border:"none",width:"150px",borderRadius:"3px",outline:"none"}}>
                <option value="Most Bought" style={{border:"none"}} className='h3-font' >Most Bought</option>
                <option value="Most Bought" style={{border:"none"}} className='h3-font'> Price : Low to High</option>
                <option value="Most Bought" style={{border:"none"}} className='h3-font'>Price : High to Low</option>
                <option value="Most Bought" style={{border:"none"}} className='h3-font'>Ratings</option>
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
            <input type="number" value={1} style={{width:"30px",height:"30px"}}></input> of 45
            <button className="pagination-button">
              <right-outlined></right-outlined>
            </button>
          </span>
        </div>
        <div>
          <h2 className="product-heading h3-font">Category of Products</h2>
          <aside className="card-p20" style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {currentTableData.length >0 ? 
            currentTableData.map((item,index) => (
        
               <div className="cardc" id={item.product_id}>
                <div style={{width:"100%",textAlign:"end"}}>
                <FavoriteBorderIcon sx={{color:"#ff7a34",margin:"10px",fontSize:"30px",cursor:"pointer"}}/>
                </div>
               <img src={item.productImage} alt="Avatar" style={{width:"100%",height:"250px" }}  onClick={(e)=>handledetails(e)} id={item.product_id}/>
               <div className="containerc" id={item.product_id}>
                 <h4 style={{height:"50px"}}><b className='h3-font text-overflow'  id={item.product_id} onClick={(e)=>handledetails(e)} >{item.productName}</b></h4> 
                 <aside className="_rating mb10" id={item.product_id}>
                 {Math.round(item.ratingProduct)===1 &&
                 <>
                          <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                 </>
                 }
                 {Math.round(item.ratingProduct)===2 &&
                 <>
                  <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                 </>
                 }
                 {Math.round(item.ratingProduct)===3 &&
                 <>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                 </>
                 }
                {
                  Math.round(item.ratingProduct)===4 &&
                  <>
             <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                  </>
                }
                {Math.round(item.ratingProduct)===5 &&
                <>
               <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={item.product_id}/>
                </>
                }
                 </aside>
                 <hr/>
                 <article className="_price dFlex alignItemsCenter" id={item.product_id}>
                   <strong className="fs28 h3-font" id={item.product_id}>₹ {item.price}</strong>
                   {/* <b className="fs16 pl10 h3-font" id={item.product_id}>per box</b> */}
                 </article>
                 
                 <footer className="_comparator ">
                 <div className='qty-details' style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
<div className='qty-add-sub' >
<div className='addicon' id={item.product_id+"sub"+index} onClick={(e)=>handleSub(e)}>-</div>
  <input type="text" value={1} className='box-value'/>
  <div className='addicon' id={item.product_id+"add"+index} onClick={(e)=>handleAdd(e)}>+</div>
  </div>
<input type="checkbox" className='box-value' style={{marginLeft:"26px"}} id={item.product_id} onClick={(e)=>handlecart(e)}/><h5 className='h3-font' >Add To Cart</h5>
</div>
                 </footer>
               </div>
             </div>

            )) :
            <h1 className='h3-font'>Result Not Found !</h1>
            }
            
          </aside>
          <div className='pagnation'>
          <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={productdata.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </div>
        </div>
        <div>
          {/* <MyCarousel></MyCarousel> */}
        </div>
        <div>
          {/* <StarCarousel></StarCarousel> */}
        </div>
        <div>
         
        </div>
        <div>
      <Productonsale/>
        </div>
      </section>
      <Carousal fivestar={fivestar} threestar={threestar}/>
    </>
  )
}

export default Category