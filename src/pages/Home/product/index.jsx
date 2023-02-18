import React from 'react'
import Slider from 'react-slick';
import Card from '../../../common/Card'
import "./product.css"
const Product = () => {
 
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
       const  prods=[
          {
            image: "http://placehold.it/300x200",
            name: "Product Name 1",
            rating: 0,
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
            price: 23.65
          },
          {
            image: "http://placehold.it/300x200",
            name: "Product Name 2",
            rating: 1,
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
            price: 24.65
          },
          {
            image: "http://placehold.it/300x200",
            name: "Product Name 3",
            rating: 3,
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Et",
            price: 25.65
          },
          {
            image: "http://placehold.it/300x200",
            name: "Product Name 4",
            rating: 2.1,
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
            price: 27.65
          },
          {
            image: "http://placehold.it/300x200",
            name: "Product Name 5",
            rating: 1,
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
            price: 24.65
          },
          {
            image: "http://placehold.it/300x200",
            name: "Product Name 6",
            rating: 3,
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Et",
            price: 25.65
          },
          {
            image: "http://placehold.it/300x200",
            name: "Product Name 7",
            rating: 2.1,
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
            price: 27.65
          }
        ]
    
  return (
    <section className="pt30 pb70 backBg products" style={{width:"100%"}}>
    <section className="container">
    <div style={{width:"100%",margin:"20px"}}>
      <header className="heading textCenter">
        <p className="header-class">Products you may like</p>
      </header>
      <aside  >
      <Slider {...settings123}>
          {prods.map(card => (
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