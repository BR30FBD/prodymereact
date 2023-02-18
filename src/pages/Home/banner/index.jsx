import React, { useEffect, useState } from 'react'
import './banner.css';
import Lottie from 'react-lottie';
import animationData1 from "../../../assets/json/builder"
import animationData2 from "../../../assets/json/products"
import animationData3 from "../../../assets/json/help"
import Searchbar from '../../../common/searchbar';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const [category,setcategory]=useState([])
    const options=[
        {
            icon:"builder",
            title:"Try our Smart Builder",
            defaultOptions :{
              loop: true,
              autoplay: true,
              animationData: animationData1,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            },
            optsList:[
              "Kitchen",
              "Bedroom",
              "Living Room",
              "Toilet",
              "Wardrobe"
            ],
            link:"more..."
        },
        {
            icon:"products",
            title:"Browse Products",
            defaultOptions: {
              loop: true,
              autoplay: true,
              animationData: animationData2,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            },
            optsList:[
              "Kitchen",
              "Lighting",
              "Hardware",
              "Glass & Film",
              "Tiles and Flooring"
            ],
            link:"more..."
        },
        {
            icon:"help",
            title:"Explore our Services",
            defaultOptions : {
              loop: true,
              autoplay: true,
              animationData: animationData3,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            },
            optsList:[
              "Carpenter",
              "Painter",
              "Plumber",
              "Electrician",
              "Upholstery"
            ],
            link:"more..."
        }
      ]
        const nav=useNavigate()
     const handlecategory=(e)=>{
      console.log(e.target.id)
      
      fetch(`https://prodymeapi.revivingindia.com/api/getproduct/${e.target.id}`,{
          cache: "no-store",
         
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        console.log(res,"rakesh")
        nav("/cateogry",{state:{id:"1",data:res.data}})
      }).catch((err)=>{
          console.log(err,"err")
      })
     }
   useEffect(()=>{
       
    fetch('https://prodymeapi.revivingindia.com/api/getCategory/',{
        cache: "no-store",
       
    }).then((res)=>{
        console.log(res,"rakesh")
        return res.json()
    }).then((res)=>{
        setcategory(res.data)
    }).catch((err)=>{
        console.log(err,"err")
    })
   },[])
  return (
   <>
      <section className="wrappper" style={{marginTop:"100px"}}>
        <main className="banner">
          <section className="container">
            <header className="head">
              <h1 data-v-679263eb >
                {" "}
                Welcome to <strong>Prodyme</strong>, <br></br>your all-in-one
                construction solution.{" "}
              </h1>
            </header>
           <Searchbar category={category}/>
          </section>
        </main>
        <section className="productCards" >
          <nav className="cardGrid container" style={{maxWidth:"80%",marginLeft:"auto",marginRight:"auto"}} >
            {  options.map(option => (
              <figure className="noMargin" key={option.title}>
                <header className="cardVisual">
                <Lottie 
	    options={option.defaultOptions}
        height={300}
        
      />
                </header>
                <figcaption className="cardContent p20">
                  <header>
                    <h4>{option.title}</h4>
                  </header>
                  <section className="listNone">
                    <ul className="listNone">
                      {option.optsList.map(opt => (
                        <li id={opt}  key={opt} onClick={(e)=>handlecategory(e)}>
                          {" "}
                          {opt}{" "}
                        </li>
                      ))}
                    </ul>
                    <p>More ...</p>
                  </section>
                </figcaption>
              </figure>
            ))}
          </nav>
        </section>
      </section>
   </>
  )
}

export default Banner