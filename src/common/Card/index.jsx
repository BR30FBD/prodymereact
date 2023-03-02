import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./cards.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { IP_ADDRESS } from '../../ip';
const Card = ({card,fun}) => {
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
  return (
    
    <section className="globalCard whiteBg br20 cardBorder" style={{margin:"20px"}} id={card.product_id} onClick={(e)=>handledetails(e)}>
      <div style={{width:"100%",textAlign:"end"}}>
                <FavoriteBorderIcon sx={{color:"#ff7a34",margin:"10px",fontSize:"30px",cursor:"pointer"}} onClick={()=>fun(`${card.product_id}`)}/>
                </div>
    <section className="cardImage" id={card.product_id}  >
      <figure className="_image noMargin dFlex" id={card.product_id} >
        <img src={card.productImage} alt="Card Image" className="mxAuto" id={card.product_id}  ></img>
      </figure>
    </section>
    <article className="cardDesc textLeft plb20 pt12" id={card.product_id} >
      <header className="_heading mb6" id={card.product_id} >
        <h5 className="noMargin ellipsisLine fs16" id={card.product_id} >{card.productName}</h5>
      </header>
      <aside className="_rating mb10" id={card.product_id}  >
      {Math.round(card.ratingProduct)===1 &&
                 <>
                          <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                 </>
                 }
                 {Math.round(card.ratingProduct)===2 &&
                 <>
                  <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                 </>
                 }
                 {Math.round(card.ratingProduct)===3 &&
                 <>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                 </>
                 }
                {
                  Math.round(card.ratingProduct)===4 &&
                  <>
             <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
           <StarOutlineIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                  </>
                }
                {Math.round(card.ratingProduct)===5 &&
                <>
               <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                <StarIcon sx={{color:"#ff7a34",fontSize:"30px"}}  id={card.product_id}/>
                </>
                }    </aside>
      <article className="_description"  id={card.product_id}  >
        <p className="fs16 ellipsis2Lines h3-font"  id={card.product_id} >Brand:{card.brandName} </p>
      </article>
      <section className="_separator mb16"  id={card.product_id} >
     <hr/>
      </section>
      <article className="_price mb24 dFlex alignItemsCenter"  id={card.product_id} >
        <strong className="fs28 h3-font"  id={card.product_id} >₹ {card.price}</strong>
        {/* <b className="fs16 pl10"  id={card.product_id} >per box</b> */}
      </article>
     
    </article>
  </section>
  )
}

export default Card