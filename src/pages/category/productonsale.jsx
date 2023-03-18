import  Axios  from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Pagination from '../../pagination';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IP_ADDRESS } from '../../ip';
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
const Productonsale = () => {
  const [open, setOpen] = React.useState(false);
  const [msg,setmsg]=useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [sale,setsale]=useState([])
    const [currentPage1, setCurrentPage1] = useState(1);
  
      const nav=useNavigate()
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
        Axios.get(`${IP_ADDRESS}getDataProductSale/`,{
          cache: "no-store",
         
      }).then((data)=>{
        setsale(data.data.data)
    
      }).catch((err)=>{
          Axios.get(`${IP_ADDRESS}getDataProductSale/`,{
            cache: "no-store",
           
        }).then((data)=>{
          setsale(data.data.data)
      
        })
         
      })
      },[])
      const handlproductonsaledatabycategory=()=>{
        Axios.get(`${IP_ADDRESS}getDataProductSale/`,{
          cache: "no-store",
         
      }).then((data)=>{
        setsale(data.data.data)
        nav("/allcategory",{state:{id:"1",data:data.data.data}})
    
      }).catch((err)=>{
          Axios.get(`${IP_ADDRESS}getDataProductSale/`,{
            cache: "no-store",
           
        }).then((data)=>{
          nav("/allcategory",{state:{id:"1",data:data.data.data}})
      
        })
         
      })
      }
      const currentTableData1 = useMemo(() => {
        const firstPageIndex = (currentPage1 - 1) * PageSize1|| 0;
        const lastPageIndex = firstPageIndex + PageSize1 || PageSize1;
        return sale.slice(firstPageIndex, lastPageIndex);
      }, [currentPage1,sale]);
      const handlecart=(e)=>{
        let qtyval=e.target.parentElement.childNodes[0].childNodes[1].value;
        let ele=document.getElementById(e.target.id);
        let arr=sale.filter((data,index)=>{
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
        let wishlistData=sale.filter((data,index)=>{
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
<h2 className="product-heading h3-font" onClick={handlproductonsaledatabycategory}> Products On Sale</h2>
          <aside style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {currentTableData1.length >0 ? 
            currentTableData1.map((item,index) => (
            
              <div className="cardc" id={item.product_id} >
                 <div style={{width:"100%",textAlign:"end"}}>
                <FavoriteBorderIcon sx={{color:"#ff7a34",margin:"10px",fontSize:"30px",cursor:"pointer"}} onClick={()=>handlewishlist(`${item.product_id}`)}/>
                </div>
              <img src={item.productImage} alt="Avatar" style={{width:"100%",height:"250px" }} onClick={(e)=>handledetails(e)}  id={item.product_id}/>
              <div className="containerc" id={item.product_id}>
                <h4 style={{height:"50px"}}><b className='h3-font text-overflow' onClick={(e)=>handledetails(e)}  id={item.product_id} >{item.productName}</b></h4> 
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
                  {/* <b className="fs16 pl10 h3-font" id={item.product_id}>per box</b> */}
                </article>
                
                <footer className="_comparator ">
                <div className='qty-details' style={{display:"flex",justifyContent:"center",width:"100%"}}>
                <div className='qty-add-sub'id={item.product_id+index} >
<div className='addicon' id={item.product_id+"sub"+index} onClick={(e)=>handleSub(e)}>-</div>
  <input type="text" value={1} className='box-value'/>
  <div className='addicon' id={item.product_id+"add"+index} onClick={(e)=>handleAdd(e)}>+</div>
  </div>
<input type="checkbox" className='box-value' id={item.product_id} role="kk" onClick={(e)=>handlecart(e)}/><h5 className='h3-font' >Add To Cart</h5>
</div>
                </footer>
              </div>
            </div>
            )) :
            <h1  className='h3-font'>Result Not Found !</h1>
            }
          </aside>
          <div className='pagnation'>
          <Pagination
        className="pagination-bar"
        currentPage={currentPage1}
        totalCount={sale.length}
        pageSize={PageSize1}
        onPageChange={page => setCurrentPage1(page)}
      />
      </div>
</>
  )
}

export default Productonsale