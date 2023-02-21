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

function App() {

  return (
    <>
   

    <Router>
   <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cateogry' element={<Category/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/myorder' element={<MyOrder/>}/>
        <Route path='/mywishlist' element={<MyWishlist/>}/>
      </Routes>
   <Footer/>

    </Router>
  
  </>
  );
}

export default App;
