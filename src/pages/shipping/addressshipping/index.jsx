import React from 'react'
import Slider from "react-slick";
import Address from '../../../auth/myaccount/address';
import  style  from "./addressshipping.module.css";
const AddressShipping = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      
      };
  return (
    <>
    <div >
   <Address/>
      
    </div>
    </>
  )
}

export default AddressShipping