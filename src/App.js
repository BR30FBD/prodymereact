import './App.css';
import Footer from './common/Footer';
import Header from './common/header';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/category';
import Details from './pages/details';
import MyAccount from './auth/myaccount';
import Checkout from './pages/checkout';
import MyOrder from './pages/myorder';
import MyWishlist from './pages/mywishlist';
import { useState } from 'react';
import SearchResults from './common/searchresults';
import Shipping from './pages/shipping';
import Payments from './pages/payment';
import ThankYouOrder from './pages/thankyouorder';
import CheckoutOne from './pages/checkoutone';
import PDF from './common/pdf';
import Invoice from './common/invoice';
import OrderDetails from './pages/orderdetails';
import ContactUs from './contactus';
import MyMessage from './pages/mymessage';
import Categorydataall from './pages/categorydataall';

function App() {
const [dis,setdis]=useState(false)
  return (
    <div onClick={()=>setdis(false)}>
   

    <Router>
   <Header close={dis}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cateogry' element={<Category/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path='/mymessage' element={<MyMessage/>}/>
        <Route path='/myorder' element={<MyOrder/>}/>
        <Route path='/searchresults' element={<SearchResults/>}/>
        <Route path='/allcategory' element={<Categorydataall/>}/>
        <Route path='/mywishlist' element={<MyWishlist/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/payments' element={<Payments/>}/>
        <Route path='/thankyou' element={<ThankYouOrder/>}/>
        <Route path='/checkout' element={<CheckoutOne/>}/>
        <Route path='/Pdf' element={<Invoice/>}/>
        <Route path='/orderdetails' element={<OrderDetails/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
   <Footer/>

    </Router>
  
  </div>
  );
}

export default App;
