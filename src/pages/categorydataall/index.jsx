import React, { useEffect, useMemo, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./categorydata.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { fontSize } from '@mui/system';
import Productonsale from '../../pages/category/productonsale';
import Pagination from '../../pagination';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  Axios  from 'axios';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { IP_ADDRESS } from '../../ip';
let PageSize = 20;
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
const Categorydataall = () => {
  const [categoryList,setCategoryList]=useState([])
    const [drope,setdrope]=useState(true)
    const [msg,setmsg]=useState('')
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
      const productdata=location.state.data || [];
      console.log(productdata,"product")
      const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize|| 0;
        const lastPageIndex = firstPageIndex + PageSize || PageSize;
        return productdata.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    
      const handlecart=(e)=>{
        let qtyval=e.target.parentElement.childNodes[0].childNodes[1].value;
        let arr=productdata.filter((data,index)=>{
          if(data.product_id==e.target.id){
            if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
              var array = []; }
              data.qty=qtyval;
            array.push(data)
            let uniqueArr = array.filter((obj, index, self) =>
      index === self.findIndex((o) => o.product_id === obj.product_id)
    );
    
              localStorage.setItem('Cart',JSON.stringify(uniqueArr));
              handleOpen()
              setmsg('Product Cart Added Successfully !')
              setTimeout(()=>{
                handleClose()
                setmsg('')
              },1000)
          }
        })
  
      }
     const handlecategory=(e)=>{
      console.log(e,"er")
      fetch(`${IP_ADDRESS}api/getproduct/${e}`,{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
     
  
      nav("/allcategory",{state:{id:"1",data:res.data,category:e,product:""}})
      window.location.reload()
    })
     }
      const handledetails=(e)=>{
        fetch(`${IP_ADDRESS}api/getProductDetailOneData/${e.target.id}/`,{
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
      fetch(`${IP_ADDRESS}api/getCategoryImage/`,{
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
        fetch(`${IP_ADDRESS}getFiveRatingData/`,{
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
        fetch(`${IP_ADDRESS}getThreeRatingData/`,{
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
  
        if(!e.target.id){
          console.log("not found")
        }else{
          let ele=document.getElementById(e.target.id).parentElement;
          let val=ele.childNodes[1].value;
          ele.childNodes[1].value=parseInt(val)+1;
        }
  
       
      }
      const handleSub=(e)=>{
        if(!e.target.id){
          console.log("not found")
        }else{
          let ele=document.getElementById(e.target.id).parentElement;
  
          let val=ele.childNodes[1].value;
          if(val>1){
         
            ele.childNodes[1].value=parseInt(val)-1;
          }
         
        }
  
      }
      const handlewishlist=(e)=>{
        let accessToken=localStorage.getItem('prodymeApiToken')
        if(!accessToken){
          handleOpen()
          setmsg('Please Login First !')
          setTimeout(()=>{
            handleClose()
            setmsg('')
          },2000)
        }
        let wishlistData=productdata.filter((data,index)=>{
          if(data.product_id===e){
            return data;
          }
        });
        let newobj={
          product_list:wishlistData
        }
        let config={
            headers: { Authorization: `Token ${accessToken}` }
        }
        Axios.post(`${IP_ADDRESS}wishlist/`,newobj,config).then((res)=>{
          handleOpen()
          setmsg(res.data.message)
          setTimeout(()=>{
            handleClose()
            setmsg('')
          },2000)
        }).catch((err)=>{
          console.log(err)
        })
      }
      const handletags=()=>{
        const tags=document.getElementById("tags").value;
        fetch(`${IP_ADDRESS}api/searchFilter/${tags}/${location.state.category}`,{
          cache: "no-store",
        
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        if(res.data.length>0){
          nav("/allcategory",{state:{id:"1",data:res.data,category:location.state.category,product:tags}})
      window.location.reload()
  
        }else{
          fetch(`${IP_ADDRESS}api/getproduct/${location.state.category}`,{
            cache: "no-store",
           
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
      
          nav("/allcategory",{state:{id:"1",data:res.data,category:location.state.category,product:tags}})

      window.location.reload()
  
        }).catch((err)=>{
        
        })
        }
      
        
      }).catch((err)=>{
        
          fetch(`${IP_ADDRESS}api/getproduct/${location.state.category}`,{
            cache: "no-store",
           
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
          nav("/allcategory",{state:{id:"1",data:res.data,category:location.state.category,product:tags}})
      window.location.reload()
  
        }).catch((err)=>{
        
        })
      })
        if(localStorage.getItem('tags')){  array = JSON.parse(localStorage.getItem('tags')) } else {
          var array = []; }
          
        array.push(tags)
        localStorage.setItem('tags',JSON.stringify(array));
        window.location.reload()
      }
      const getTags=JSON.parse(localStorage.getItem('tags')) || [];
      const handledelete=(e)=>{
        console.log(e)
        for(let i=0;i<getTags.length;i++){
          if(i==e){
            getTags[i]=getTags[i+1]
          }
        }
        getTags.length=getTags.length-1;
        localStorage.setItem('tags',JSON.stringify(getTags));
        window.location.reload()
      }
      useEffect(() => {
        Axios.get(`${IP_ADDRESS}api/getCategory/`).then((res)=>{
          setCategoryList(res.data.data)
        })
       
      }, []);
  return (
    <div >
    <div className='container-wrapper-result'>
        <div className='aside-wrapper-results'>
            <div className='empty-box-wrapper'></div>
            <p className='p-filter label-form'><FilterAltOutlinedIcon sx={{color:"#FF7A34"}} /><p className='label-form'>Filters</p>
            
            </p>
            <span
  data-v-849a1390=""
  className="search-bar ant-input-search ant-input-affix-wrapper"

  style={{ width: "90%", marginRight: "50px",display:"flex",justifyContent:"space-around",alignItems:"center" ,border:"3px #ff7a34"}}
>
  <input
    placeholder="Search Keywords"
    type="text"
    className="ant-input aside-searchbar"
    id="tags"
  />
  <span className="ant-input-suffix" style={{position:"absolute",marginLeft:"120px"}} onClick={handletags}>
    <i
      aria-label="icon: search"
      tabIndex={-1}
      className="anticon anticon-search ant-input-search-icon search-icon-bar"
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
{getTags.map((data,index)=>(
  <button className='btn-tags'>{data}<CloseOutlinedIcon sx={{fontSize:"16px"}}  onClick={()=>handledelete(index)} /></button>

))}
{/* <button className='btn-tags'>Key <CloseOutlinedIcon sx={{fontSize:"16px"}} /></button> */}
{/* <button className='btn-tags'>Carbon fiber mate <CloseOutlinedIcon sx={{fontSize:"16px"}} /></button> */}
<div className='drop-down-container'>
    <span className='dropdown-category'><p>Filter Category</p> {drope ? <ExpandLessIcon sx={{color:"#FF7A34"}} onClick={()=>setdrope(!drope)}/>: <KeyboardArrowDownOutlinedIcon onClick={()=>setdrope(!drope)} sx={{color:"#FF7A34"}} /> }</span>
   
   {drope && 
   <ul className='ul-wrapper'>
   {categoryList && categoryList.map((data,index)=>(
   <li className='li-dropdown'><input type="checkbox" className='check-box' onClick={()=>handlecategory(data)}/> <span className='text-ell'>{data}</span></li>

   ))}
</ul>
   } 
</div>
<div className='empty-box-wrapper-footer'></div>
        </div>
        <div className='content-wrapper-results'>
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
          
     <section style={{marginTop:"10px",borderTop:"2px #ff7a34"}}>
<div className='empty-box-wrapper-footer'></div>

     <div className='bredcrumb' style={{backgroundImage:`url("https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"250px",backgroundPosition:"center"}}>
        <p className='text-home label-form'>Home / <b>Search Results</b></p>
        <NavLink to='/'>
        <h4 className='label-form text-align'><KeyboardBackspaceOutlinedIcon/><span>Back To Home</span></h4>
        </NavLink>
  
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
            <input type="text" value={1} style={{width:"15px",height:"15px",marginRight:"10px"}}></input> of 45
            <button className="pagination-button">
              <right-outlined></right-outlined>
            </button>
          </span>
        </div>
        <div>
          <aside className="card-p20" style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {currentTableData.length >0 ? 
            currentTableData.map((item,index) => (
        
               <div className="cardc card-results" key={index} id={item.product_id}>
                <div style={{width:"100%",textAlign:"end"}}>
                <FavoriteBorderIcon sx={{color:"#ff7a34",margin:"10px",fontSize:"30px",cursor:"pointer"}} onClick={()=>handlewishlist(`${item.product_id}`)} />
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
        
       
       
      </section>
        </div>
    </div>
    </div>
  )
}

export default Categorydataall