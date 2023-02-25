import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from '../../../common/Card'
import "./product.css"

const Product = () => {
 const [data,setdata]=useState([])
    var settings123 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    useEffect(()=>{
      fetch('https://prodymeapi.revivingindia.com/getTodayDeals/',{
            cache: "no-store",
           
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            setdata(res.data)
        }).catch((err)=>{
            console.log(err,"err")
        })
    },[])
      
  return (
    <section className="pt30 pb70 backBg products" style={{width:"100%"}}>
    <section className="container">
    <div style={{width:"100%",margin:"20px"}}>
      <header className="heading textCenter">
        <p className="header-class">Products you may like</p>
      </header>
      <aside  >
      <Slider {...settings123}>
          {data.map(card => (
            <Card card={card} />
          ))}
        </Slider>
      </aside>
      </div>
    </section>
  </section>
  )
}

export default Product