import React from 'react'
import { useEffect, useState } from 'react';
import Auth from '../../auth';
import Searchbar from '../searchbar';
import "./header.css"

const Header = () => {
  const [category,setcategory]=useState([])
    const [state,setState]=useState({
        scrollPosition: null
      })
      const [display,setdisplay]=useState(false)
      const updateScroll=()=>{
        setState({
          scrollPosition: window.scrollY
        });

        if(state.scrollPosition > 330){
          document.getElementById("inputSelectionid").style.border="1px solid #ff7a34";
          document.getElementById("inputSelectionid").style.borderRadius="13px";
          document.getElementById("inputSelectionid").style.marginTop="20px";
          document.getElementById("inputSelectionid").style.height="40px";
        }else{
          document.getElementById("inputSelectionid").style.border="none";
          document.getElementById("inputSelectionid").style.borderRadius="none";
          document.getElementById("inputSelectionid").style.marginTop="0px";
          document.getElementById("inputSelectionid").style.height="auto";
        }
      }
      useEffect(()=>{
        window.addEventListener("scroll", updateScroll);
      })
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
<section
  data-v-aaec3394=""
  className="justifyBetween dFlex topbar123"
  style={{ height: "100px",width:"85%",paddingLeft:"100px",paddingRight:"100px",position:"fixed",zIndex:"20",background:"white",top:"0px" }}
>
  
  <nav data-v-aaec3394="" className="navListWeb dFlex alignItemsCenter">
    <ul data-v-aaec3394="">
    <li data-v-aaec3394="">LOGO</li>
      <li data-v-aaec3394="">Builder</li>
      <li data-v-aaec3394="">Catalogue</li>
    </ul>
  </nav>
  <nav data-v-aaec3394="" className="navListMob">
    <a data-v-aaec3394="" className="ant-dropdown-link ant-dropdown-trigger">
      <i
        data-v-aaec3394=""
        aria-label="icon: menu"
        className="anticon anticon-menu"
      >
        <svg
          viewBox="64 64 896 896"
          data-icon="menu"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className=""
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
        </svg>
      </i>
    </a>
  </nav>
  {state.scrollPosition > 330 && 
  <Searchbar category={category}/>
  
  }
  <section
    data-v-aaec3394=""
    className="topBarActions dFlex alignItemsCenter positionRelative"
  >
    <button data-v-aaec3394="" onClick={()=>setdisplay(!display)}>Login / Sign Up</button>
   {display &&
    <Auth/>
   
   }

  </section>
</section>
</>

  )
}

export default Header