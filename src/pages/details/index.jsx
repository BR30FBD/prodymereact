import React from 'react'
import { NavLink} from 'react-router-dom'
import img from "./b1.png"
import  styledetails from "./details.css"
const Details = () => {
  return (
    <div {...styledetails}>
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
    <button className='sidebar-tags-btn'>Kitchen</button>
    <button className='sidebar-tags-btn'>Kitchen</button>   
    <button className='sidebar-tags-btn'>Sustainable</button>
    </div>
    </div>
  </div>
  <div className='carousal-sidebar'>
    <div className='carousal-sidebar-child1'>
      <img className='imgtag-carousal' src="https://m.media-amazon.com/images/I/41vD9a3rPQL.jpg" alt="" srcset="" />
      <img className='imgtag-carousal' src="https://m.media-amazon.com/images/I/41vD9a3rPQL.jpg" alt="" srcset="" />
      <img className='imgtag-carousal' src="https://m.media-amazon.com/images/I/41vD9a3rPQL.jpg" alt="" srcset="" />
      <img className='imgtag-carousal' src="https://m.media-amazon.com/images/I/41vD9a3rPQL.jpg" alt="" srcset="" />
      
    </div>
    <div className='carousal-sidebar-child2'>
    <img className='imgtag-carousal-active' src="https://m.media-amazon.com/images/I/41vD9a3rPQL.jpg" alt="" srcset="" />
      
    </div>
  </div>
  </div>
  <div className='product-details-continer-child-side2' >
    <div className='side2-title'>
      <div>
        <h1 className='side2-title-h1'>Product Name ABC</h1>
        <p className='side2-title-p'>Product Category Name (PlyWood)</p>
      </div>
    </div>
<div className='review-section'>
  <div className='icon-star-container'>
    {[1,2,3,4,5].map((data,index)=>(
 <span className='start-icon'>	&#10029;</span>
    ))}
 <strong style={{marginLeft:"20px"}}>   4.4 (800 Review)</strong>
  </div>
  <a href="#" className='href-link'>Build My Project</a>
  <div>
  <strong>280.9</strong><span> per sheet</span>
  </div>
</div>
<div className='dicription-details'>
  <div className='emptybox'></div>
  <div className='discription-text'>

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, laborum architecto, iusto porro quia nostrum necessitatibus quam vel similique blanditiis culpa possimus sed? Et dolorum quis numquam. Aspernatur, sequi quod, dicta reprehenderit nam, nostrum quidem quis ipsum saepe sed earum soluta sit pariatur recusandae quisquam veritatis. Quaerat ex voluptatem nostrum voluptates officiis deserunt, odit distinctio fugit velit ut id ipsum molestias, sint, dolorum necessitatibus? Tempore, earum magnam dicta, quaerat facere harum et hic quibusdam, eligendi sint nisi. Nostrum, quo animi. Itaque laboriosam nobis quis dolorum beatae, numquam magni pariatur asperiores, quasi natus aperiam quod iure nesciunt illum. Maiores voluptate sequi laborum at quisquam cupiditate tempore repellendus est aspernatur corporis quam, repudiandae nostrum unde numquam laboriosam dolorum corrupti, tenetur dolorem. Facilis fuga eum nobis ab sint voluptate unde enim provident, harum in ipsa. Nemo consectetur veniam aut quod quo officia voluptate iure accusantium minima, inventore, iste delectus quos maxime deserunt.
  </div>

</div>
<div className='review-section'>
<div className='emptybox'></div>
  <div className='icon-star-container mt-details' style={{marginTop:"50px"}}>
  
 <strong style={{marginLeft:"20px"}}>Available Online 189</strong>
  </div>
<div className='qty-details' style={{marginTop:"50px"}}><strong>Quantity</strong>
<div className='qty-details' ><span className='checkout-table-body-td-icon-details-page'>-</span><div className='qty-value'>1</div><span className='checkout-table-body-td-icon-details-page'>+</span></div>
</div>
  <div  style={{marginTop:"50px"}}>
  <button className='checkout-main-child-btn'>Add To Cart</button>
  </div>
</div>
  </div>
</section>
       
    </div>
  )
}

export default Details