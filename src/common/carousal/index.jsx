import React, { useState } from 'react'
import stylecarousal from "./carousal.css"
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Axios from 'axios';
import { IP_ADDRESS } from '../../ip';
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

const Carousal = ({fivestar,threestar}) => {
  const [msg,setmsg]=useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const nav=useNavigate()
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
      const handlecart=(e)=>{
        let qtyval=e.target.parentElement.childNodes[0].childNodes[1].value;
        let arr=threestar[0].filter((data,index)=>{
          if(data.product_id==e.target.id){
            if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
              var array = []; }
              data.qty=qtyval;
            array.push(data)
            let uniqueArr = array.filter((obj, index, self) =>
      index === self.findIndex((o) => o.product_id === obj.product_id  )
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
      const handlecart5=(e)=>{
        let qtyval=e.target.parentElement.childNodes[0].childNodes[1].value;
        let arr=fivestar[0].filter((data,index)=>{
          if(data.product_id==e.target.id){
            if(localStorage.getItem('Cart')){  array = JSON.parse(localStorage.getItem('Cart')) } else {
              var array = []; }
              data.qty=qtyval;
            array.push(data)
            let uniqueArr = array.filter((obj, index, self) =>
      index === self.findIndex((o) => o.product_id === obj.product_id  )
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
        let wishlistData=fivestar.filter((data,index)=>{
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
        Axios.post('https://49fc-103-209-71-109.in.ngrok.io/wishlist/',newobj,config).then((res)=>{
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
      const handlewishlist3=(e)=>{
        let accessToken=localStorage.getItem('prodymeApiToken')
        if(!accessToken){
          handleOpen()
          setmsg('Please Login First !')
          setTimeout(()=>{
            handleClose()
            setmsg('')
          },2000)
        }
        let wishlistData=threestar.filter((data,index)=>{
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
        Axios.post('https://49fc-103-209-71-109.in.ngrok.io/wishlist/',newobj,config).then((res)=>{
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
      const handlestarrproductthree=()=>{
        fetch(`${IP_ADDRESS}getThreeRatingData/`,{
          cache: "no-store",
         
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        nav("/allcategory",{state:{id:"67",data:res.data[0]}})
      }).catch((err)=>{
          console.log(err,"err")
      })
      }
      const handlestarrproductfive=()=>{
        fetch(`${IP_ADDRESS}getFiveRatingData/`,{
          cache: "no-store",
         
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        console.log(res,"five")
        nav("/allcategory",{state:{id:"67",data:res.data[0]}})
      }).catch((err)=>{
          console.log(err,"err")
      })
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
      {msg}
          </Typography>
       
        </Box>
      </Modal>
    <div className='carousal-container' {...stylecarousal}>
<div className='carousal-container-40'>
<h1 className='h1-font-txt h3-font' onClick={handlestarrproductfive}>5 Star Products!</h1>

    <div className='fivestart-container'>  
    <Slider {...settings} style={{width:"100%"}}>
          {fivestar.length >0 ? 
            fivestar[0].map((item,index) => (

    <div  id={item.product_id} style={{width:"44%",margin:"5px",boxShadow:"none"}}  >
             <div style={{width:"100%",textAlign:"end"}}>
                <FavoriteBorderIcon sx={{color:"#ff7a34",margin:"10px",fontSize:"30px",cursor:"pointer"}} onClick={()=>handlewishlist(`${item.product_id}`)}/>
                </div>
              <img src={item.productImage} alt="Avatar" style={{width:"100%",height:"250px" }} onDoubleClick={(e)=>handledetails(e)}  id={item.product_id}/>
              <div className="containerc" id={item.product_id}>
                <h4><b className='h3-font' id={item.product_id } onDoubleClick={(e)=>handledetails(e)}>{item.productName}</b></h4> 
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
                <article className="_price  dFlex alignItemsCenter" id={item.product_id}>
                  <strong className="fs28 h3-font" id={item.product_id}>₹ {item.price}</strong>
                  <b className="fs16 pl10 h3-font" id={item.product_id}>per box</b>
                </article>
                
                <footer className="_comparator ">
                <div className='qty-details' style={{display:"flex",justifyContent:"center",width:"90%"}}>
                <div className='qty-add-sub'style={{width:"97%"}} >
                <div className='addicon' id={item.product_id+"sub"+index} onClick={(e)=>handleSub(e)}>-</div>
  <input type="text" value={1} className='box-value'  style={{height:"15px"}} id={item.product_id+"addsub"+index}/>
  <div className='addicon' id={item.product_id+"add"+index} onClick={(e)=>handleAdd(e)}>+</div>
  </div>
<input type="checkbox" className='box-value'  style={{width:"20px"}} id={item.product_id} onClick={(e)=>handlecart5(e)}/><h5 className='h3-font' style={{width:"100%",fontSize:"small"}} >Add To Cart</h5>
</div>
                </footer>
              </div>
            </div>
                )) :
                <h1  className='h3-font'>Result Not Found !</h1>
                }
                </Slider>
    </div>
</div>
<div className='carousal-container-60'>
<h1 className='h1-font-txt h3-font' onClick={handlestarrproductthree}>3 Star Products!</h1>

<div className='fivestart-container'>  
<Slider {...settings1} style={{width:"95%"}}>
      {threestar.length >0 ? 
        threestar[0].map((item,index) => (

<div  id={item.product_id} style={{width:"44%",margin:"5px",boxShadow:"none"}}  >
<div style={{width:"100%",textAlign:"end"}}>
                <FavoriteBorderIcon sx={{color:"#ff7a34",margin:"10px",fontSize:"30px",cursor:"pointer"}} onClick={()=>handlewishlist3(`${item.product_id}`)}/>
                </div>
          <img src={item.productImage} alt="Avatar" style={{width:"100%",height:"250px" }} onDoubleClick={(e)=>handledetails(e)} id={item.product_id}/>
          <div className="containerc" id={item.product_id}>
            <h4><b className='h3-font' id={item.product_id} onDoubleClick={(e)=>handledetails(e)}>{item.productName}</b></h4> 
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
            <article className="_price  dFlex alignItemsCenter" id={item.product_id}>
              <strong className="fs28 h3-font" id={item.product_id}>₹ {item.price}</strong>
              <b className="fs16 pl10 h3-font" id={item.product_id}>per box</b>
            </article>
            
            <footer className="_comparator ">
            <div className='qty-details' style={{display:"flex",justifyContent:"center",width:"90%"}}>
            <div className='qty-add-sub'style={{width:"100%"}} >
<div className='addicon' id={item.product_id+"sub"+index} onClick={(e)=>handleSub(e)}>-</div>
  <input type="text" value={1} className='box-value' style={{height:"15px"}} id={item.product_id+"addsub"+index}/>
  <div className='addicon' id={item.product_id+"add"+index} onClick={(e)=>handleAdd(e)}>+</div>
  </div>
<input type="checkbox" className='box-value' style={{width:"20px"}} id={item.product_id} onClick={(e)=>handlecart(e)}/><h5 className='h3-font' style={{width:"100%"}}>Add To Cart</h5>
</div>
            </footer>
          </div>
        </div>
            )) :
            <h1  className='h3-font'>Result Not Found !</h1>
            }
            </Slider>
</div>
</div>
    </div>
    </>
  )
}

export default Carousal