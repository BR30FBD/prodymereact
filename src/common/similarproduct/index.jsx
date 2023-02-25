import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../pagination';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
const SimilarProduct = ({data}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    console.log(data,"simi")
    const [currentPage1, setCurrentPage1] = useState(1);
    const nav=useNavigate()
    const handledetails=(e)=>{
        console.log(e.target.id,"target")
        fetch(`https://prodymeapi.revivingindia.com/api/getProductDetailOneData/${e.target.id}/`,{
          cache: "no-store",
         
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        console.log(res,"rakeshnhkjhuh")
  
        // setState(res.data)
  
           nav('/details',{state:{id:"1",data:res.data}})
           window.location.reload()
           window.scrollTo(0,0)
      }).catch((err)=>{
          console.log(err,"err")
      })
     
      }
      const currentTableData1 = useMemo(() => {
        const firstPageIndex = (currentPage1 - 1) * PageSize1|| 0;
        const lastPageIndex = firstPageIndex + PageSize1 || PageSize1;
        return data.slice(firstPageIndex, lastPageIndex);
      }, [currentPage1,data]);
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
      const handlecart=(e)=>{
        console.log(e.target.parentElement.childNodes[0].childNodes[1].value)
        let qtyval=e.target.parentElement.childNodes[0].childNodes[1].value;
        // console.log(currentTableData[e.target.id])
        let arr=data.filter((data,index)=>{
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
<div>
        <h2 className="product-heading h3-font">Similar Products</h2>
          <aside style={{display:"flex",justifyContent:"start",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"}}>
            {currentTableData1.length >0 ? 
            currentTableData1.map((item,index) => (
            
              <div className="cardc" id={item.product_id} >
                 <div style={{width:"100%",textAlign:"end"}}>
                <FavoriteBorderIcon sx={{color:"#ff7a34",margin:"10px",fontSize:"30px",cursor:"pointer"}}/>
                </div>
              <img src={item.productImage} alt="Avatar" style={{width:"100%",height:"250px" }} onClick={(e)=>handledetails(e)} id={item.product_id}/>
              <div className="containerc" id={item.product_id}>
                <h4><b className='h3-font' id={item.product_id} onClick={(e)=>handledetails(e)}>{item.productName}</b></h4> 
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
                  <b className="fs16 pl10 h3-font" id={item.product_id}>per box</b>
                </article>
                
                <footer className="_comparator ">
                <div className='qty-details' style={{display:"flex",justifyContent:"center",width:"100%"}}>
                <div className='qty-add-sub' >
<div className='addicon' id={item.product_id+"sub"+index} onClick={(e)=>handleSub(e)}>-</div>
  <input type="text" value={1} className='box-value'/>
  <div className='addicon' id={item.product_id+"add"+index} onClick={(e)=>handleAdd(e)}>+</div>
  </div>
<input type="checkbox" className='box-value' id={item.product_id} onClick={(e)=>handlecart(e)}/><h5 className='h3-font' >Add To Cart</h5>
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
        totalCount={data.length}
        pageSize={PageSize1}
        onPageChange={page => setCurrentPage1(page)}
      />
      </div>
        </div>
</>
  )
}

export default SimilarProduct