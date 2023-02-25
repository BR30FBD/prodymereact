import React,{useState,useEffect} from 'react'
import { NavLink,useLocation, useNavigate} from 'react-router-dom'
import SimilarProduct from '../../common/similarproduct'
import img from "./b1.png"
import  styledetails from "./details.css"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
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
const Details = () => {
  const [details,setDetails]=useState({
    product_id_id:"",
    category_name_id:"",
    productDetailData:"",
    productDescription:"",
    productName:"",
    productImage:"",
    productImage1:"",
    productImage2:"",
    productImage3:"",
    productImage4:"",
    productRating:"",
    quantity:"",
    price:"",
    tags:"",
    tags1:"",
    tags2:""
  })
  const nav=useNavigate()
  const [similar,setsimilar]=useState([])
  const [IMG,setIMG]=useState(details.productImage)
  const [open, setOpen] = React.useState(false);
  const [msg,setmsg]=useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [NUM,setNUM]=useState(1)
  const location=useLocation();
  const data=location.state.data[0];
  let accessToken=localStorage.getItem('prodymeApiToken')
  const handleminus=()=>{
    if(NUM>1){
      setNUM(NUM-1)
    }
  }
  useEffect(()=>{
    window.scrollTo(0,0)
    setDetails(data)
    setIMG(data.productImage)
    fetch(`https://prodymeapi.revivingindia.com/api/getProductSimilar/${data.product_id_id}/`,{
      cache: "no-store",
     
  }).then((res)=>{
     
      return res.json()
  }).then((res)=>{
    setsimilar(res.data)
  }).catch((err)=>{
      console.log(err,"err")
  })
    
  },[])
  const handlebuy=()=>{
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
  const handlecart=()=>{
    let qtyval=NUM;

    let ID=details.product_id_id || details.product_id;

    let productcart=JSON.parse(localStorage.getItem('Cart')) || [];
    if(productcart.length>0){
      let arr=productcart.filter((data,index)=>{
        if(productcart.length>0){
         if(data.product_id==ID){
           console.log("cart",data)
             
               if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
                 var array = []; }
                 data.qty=qtyval;
                 console.log(data,"newobj")
               array.push(data)
               let uniqueArr = array.filter((obj, index, self) =>
         index === self.findIndex((o) => o.product_id === obj.product_id)
       );
       
                 localStorage.setItem('Cart',JSON.stringify(uniqueArr));
                 setmsg("Product Cart Added Successfully !")
                 handleOpen()
                 setTimeout(()=>{
                   handleClose()
                 },1000)
             }else   if(data.product_id_id==ID){
           
                 
                   if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
                     var array = []; }
                     data.qty=qtyval;
                     console.log(data,"newobj")
                   array.push(data)
                   let uniqueArr = array.filter((obj, index, self) =>
             index === self.findIndex((o) => o.product_id === obj.product_id)
           );
           
                     localStorage.setItem('Cart',JSON.stringify(uniqueArr));
                     setmsg("Product Cart Added Successfully !")
                     handleOpen()
                     setTimeout(()=>{
                       handleClose()
                     },1000)
                 }
        }else{
         if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
           var array = []; }
           data.qty=qtyval;
        
         array.push(data)
         let uniqueArr = array.filter((obj, index, self) =>
   index === self.findIndex((o) => o.product_id === obj.product_id)
   );
   
           localStorage.setItem('Cart',JSON.stringify(uniqueArr));
           handleOpen()
           setmsg("Product Cart Added Successfully !")
           setTimeout(()=>{
   
             handleClose()
           },1000)
        }
      
       })
    }else{
       if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
           var array = []; }
           data.qty=qtyval;
        
         array.push(data)
         let uniqueArr = array.filter((obj, index, self) =>
   index === self.findIndex((o) => o.product_id === obj.product_id)
   );
   
           localStorage.setItem('Cart',JSON.stringify(uniqueArr));
           handleOpen()
           setmsg("Product Cart Added Successfully !")
           setTimeout(()=>{
   
             handleClose()
           },1000)
        }
      
       
    
   
  }
  return (
    <div {...styledetails}>
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
            <NavLink to='/' style={{color:"whitesmoke",textDecoration:"none"}}>Home</NavLink>\Productdetails
           </h1>
        
        </section>
<section className='product-details-continer'>
  <div className='product-details-continer-child-side1'>
    <h1 className='product-details-continer-child-side1-h1'><NavLink to='/' style={{textDecoration:"none"}}>Home/</NavLink><strong>Product Details</strong></h1>
    <div className='sidebar-tags'>
    <h2 className='sidebar-tags-h2'>
      Tags:
    </h2>
    <div className='sidebar-tags-btn-container'>
      <div className='sidebar-tags-btn-container-nested'>
    <button className='sidebar-tags-btn'>{details.tags}</button>
    <button className='sidebar-tags-btn'>{details.tags1}</button>   
    <button className='sidebar-tags-btn'>{details.tags2}</button>
    </div>
    </div>
  </div>
  <div className='carousal-sidebar'>
    <div className='carousal-sidebar-child1'>
      <img className='imgtag-carousal' src={details.productImage} alt="" srcset="" onClick={()=>setIMG(details.productImage)} />
      <img className='imgtag-carousal' src={details.productImage1} alt="" srcset="" onClick={()=>setIMG(details.productImage1)} />
      <img className='imgtag-carousal' src={details.productImage2} alt="" srcset="" onClick={()=>setIMG(details.productImage2)}/>
      <img className='imgtag-carousal' src={details.productImage3} alt="" srcset="" onClick={()=>setIMG(details.productImage3)}/>
      
    </div>
    <div className='carousal-sidebar-child2'>
    <img className='imgtag-carousal-active' src={IMG} alt="" srcset="" />
      
    </div>
  </div>
  </div>
  <div className='product-details-continer-child-side2' >
    <div className='side2-title'>
      <div>
        <h1 className='side2-title-h1'>{details.productName}</h1>
        <h2 className='side2-title-p'>{details.category_name_id}</h2>
      </div>
    </div>

    <div className='review-section'>
   <div className='emptybox'></div>
  <div className='icon-star-container'>

  </div>
  {/* <a href="#" className='href-link'>Build My Project</a> */}
  <div>
  <strong><h1 className='h3-font'>PRICE: {details.price} INR</h1></strong>
  </div>
</div>
<div className='offer-container'>
  <div style={{width:"40%"}}></div>
  <div style={{width:"60%"}}>
<div className='offer-title'>
<h3 className='label-form'>Offers</h3>
</div>
<div className='offer-section'>
  <div className='offer-section-card'>
    <h5 style={{margin:"0px",textAlign:"center",fontFamily:"Roboto,Helvetica,Arial,sans-serif",height:"10px"}}>No Cost EMI</h5>
    <p  style={{fontFamily:"Roboto,Helvetica,Arial,sans-serif",textAlign:"center"}}>
Upto ₹2,486.65 EMI interest savings on select Credit ...

    </p>
  </div>
  <div className='offer-section-card'>
    <h5 style={{margin:"0px",textAlign:"center",fontFamily:"Roboto,Helvetica,Arial,sans-serif",height:"10px"}}>Partner Offers</h5>
    <p  style={{fontFamily:"Roboto,Helvetica,Arial,sans-serif",textAlign:"center"}}>
    Get Free 2 Week BYJU'S Classes Bootcamp on...

    </p>
  </div>
  <div className='offer-section-card'>
    <h5 style={{margin:"0px",textAlign:"center",fontFamily:"Roboto,Helvetica,Arial,sans-serif",height:"10px"}}>Bank Offer</h5>
    <p  style={{fontFamily:"Roboto,Helvetica,Arial,sans-serif",textAlign:"center"}}>
    Upto ₹250.00 discount on HSBC Bank Credit Cards...

    </p>
  </div>

</div>
</div>
</div>
<div className='review-section' style={{justifyContent:"center"}}>
   <div className='emptybox'></div>
  <strong><h1 className='h3-font' style={{fontSize:"20px",marginRight:"20px"}}>Rating</h1></strong>

  <div className='icon-star-container'>
  {Math.round(details.productRating)===1 &&
                 <>
                          <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                 </>
                 }
                 {Math.round(details.productRating)===2 &&
                 <>
                  <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                 </>
                 }
                 {Math.round(details.productRating)===3 &&
                 <>
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                 </>
                 }
                {
                  Math.round(details.productRating)===4 &&
                  <>
             <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                  </>
                }
                {Math.round(details.productRating)===5 &&
                <>
               <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                <StarIcon sx={{color:"#ff7a34",fontSize:"20px"}}  />
                </>
                }
 <strong style={{marginLeft:"20px",fontSize:"30px"}} className='h3-font'> {details.productRating}.0</strong>
  </div>
  {/* <a href="#" className='href-link'>Build My Project</a> */}

  <div>
  </div>
</div>
<div className='review-section'  style={{height:"20px",justifyContent:"center"}}>
<div className='emptybox'></div>
<div className='qty-details' style={{marginTop:"50px"}}><strong className='label-form'>Quantity</strong>
<div className='qty-details' ><span className='checkout-table-body-td-icon-details-page' onClick={handleminus}>-</span>
<div className='qty-value'>{NUM}</div>
<span className='checkout-table-body-td-icon-details-page' onClick={()=>setNUM(NUM+1)}>+</span></div>
</div>
  <div className='icon-star-container mt-details' style={{marginTop:"50px"}}>
  
 <strong style={{marginLeft:"20px"}}></strong>
  </div>

  <div  style={{marginTop:"50px"}}>
  {/* <button className='checkout-main-child-btn'>Add To Cart</button> */}
  </div>
</div>
<div className='review-section'>
<div className='emptybox'></div>
<div  style={{marginTop:"50px"}}>
  <button className='checkout-main-child-btn' onClick={handlecart}>Add To Cart</button>
  </div>
  <div  style={{marginTop:"50px"}}>
  <button className='checkout-main-child-btn' onClick={handlebuy}>Buy Now</button>
  </div>
  <div className='icon-star-container mt-details' style={{marginTop:"50px"}}>
  
 {/* <strong style={{marginLeft:"20px"}}>Available Online 189</strong> */}
  </div>
  
</div>
<div className='review-section' style={{justifyContent:"center"}}>
<div className='emptybox'></div>
<div  style={{marginTop:"50px",width:"400px"}}>
<div className='checkout-main-div' style={{width:"80%"}}>
                <h5 className='header-checkout h3-font'>Product Feature</h5>
            <table className='checkout-main-table'>
                <thead className='checkout-table-head'>
                    <tr className='checkout-table-head-tr tr-details h3-font' style={{fontSize:"20px",border:"1px solid dark"}}>
                        <td  style={{color:"#fff",textAlign:"center"}}>General</td> <td  style={{color:"#fff",textAlign:"center"}}>Item</td> 
                    </tr>
                </thead>
                <tbody className='checkout-table-body'>
                    
                    
  <tr className='checkout-table-body-tr'>
    <td>
Sales Package
    </td>
  <td>
1 Mobile Back Cover</td> 
  </tr>
  <tr className='checkout-table-body-tr'>
    <td>
    Model Number

    </td>
  <td>

  FKSB-C-GL-PXL-6A-TRA</td> 
  </tr>
  <tr className='checkout-table-body-tr'>
    <td>
    Designed For


    </td>
  <td>

 
Google Pixel 6a</td> 
  </tr>
                  
                   
                </tbody>
                
            </table>
            <section className='checkout-main-second'>
        </section>
            </div>
  </div>
  
  
  
</div>
<div className='about-section'>
  <div className='about-child1'></div>
  <div className='about-child2'>
    <h2 className='h3-font'>About this item</h2>
    <ul>
      <li className='label-form mt-10'>
      27.69 cm (10.9-inch) Liquid Retina display1 with True Tone, P3 wide colour and an anti-reflective coating
      </li>
      <li className='label-form mt-10'>
      Apple M1 chip with Neural Engine
      </li>
      <li className='label-form mt-10'>
      12MP Wide camera
      </li>
      <li className='label-form mt-10'>
      12MP Ultra Wide front camera with Center Stage
      </li>
      <li className='label-form mt-10'>
      Up to 256GB of storage
      </li>
      <li className='label-form mt-10'>
      Available in blue, purple, pink, starlight, and space gray
      </li>
      <li className='label-form mt-10'>
      Stereo landscape speakers
      </li>
    </ul>
  </div>
</div>
<div className='dicription-details'>
  {/* <div className='emptybox'></div> */}
  <div className='discription-text'>
    <h1>Description:</h1>
{details.productDescription}
  </div>

</div>
  </div>
</section>
       <SimilarProduct data={similar}/>
    </div>
  )
}

export default Details