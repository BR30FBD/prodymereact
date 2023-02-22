import React, { useEffect } from 'react'
import Modal from '../../common/modal';
import Banner from './banner';
import Contact from './contact';
import Insight from './insight';
import Offering from './offering';
import Product from './product';
const Home = () => {
  
useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
    <>
    
     <Banner/>
  
   <Offering/>
<Modal/>

   <Insight/>
   <Product/>
   <Contact/>
    </>
  )
}

export default Home