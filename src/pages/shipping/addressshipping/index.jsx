import React from 'react'
import Slider from "react-slick";
import  style  from "./addressshipping.module.css";
const AddressShipping = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
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
  return (
    <>
    <div className={style.conatinerrrr}>
        {[1,2].map((data,index)=>(
  <div className={style.boxcard}>
  <div className={style.radiobox}>
      <input type="radio" className={style.radio} />
      <span className={style.addresstxt}>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</span>
  </div>
  <div className={style.boxfooter}>
      <span className={style.edit}>Edit</span>
      <span className={style.edit}>Delete</span>
  </div>
</div>
        ))}
      
    </div>
    </>
  )
}

export default AddressShipping