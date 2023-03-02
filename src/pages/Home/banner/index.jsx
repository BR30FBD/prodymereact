import React, { useEffect, useState } from 'react'
import './banner.css';
import Lottie from 'react-lottie';
import animationData1 from "../../../assets/json/builder"
import animationData2 from "../../../assets/json/products"
import animationData3 from "../../../assets/json/help"
import Searchbar from '../../../common/searchbar';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../common/Loader';
import { IP_ADDRESS } from '../../../ip';
const Banner = () => {
  const  [load,setload]=useState(false)
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
      setload(true)
      
      fetch(`${IP_ADDRESS}api/getproduct/${e.target.id}`,{
          cache: "no-store",
         
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        setload(false)
        nav("/cateogry",{state:{id:"1",data:res.data,category:e.target.id}})
      }).catch((err)=>{
          console.log(err,"err")
      })
     }
   useEffect(()=>{
    setload(true)
    fetch(`${IP_ADDRESS}api/getCategory/`,{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
      setload(false)
        setcategory(res.data)
    }).catch((err)=>{
      setload(false)
        console.log(err,"err")
    })
   },[])
  return (
   <>
       {load &&
      <Loader/>
    }
   
      <section className="wrappper" style={{marginTop:"100px"}}>
        <main className="banner">
          <section className="container">
            <header className="head">
              <h1 data-v-679263eb  className="label-form">
            
                Welcome to <strong>Prodyme</strong>, <br></br>your all-in-one
                construction solution.
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
                    <h4  className="label-form">{option.title}</h4>
                  </header>
                  <section className="listNone">
                    <ul className="listNone">
                      {option.optsList.map(opt => (
                        <li id={opt}  className="label-form " style={{width:"100%"}}  key={opt} onClick={(e)=>handlecategory(e)}>
                         
                          {opt}
                        </li>
                      ))}
                    </ul>
                    <p className="label-form">More ...</p>
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