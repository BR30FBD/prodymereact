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
function App() {

  return (
    <>
    <Router>
   <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cateogry' element={<Category/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
   <Footer/>

    </Router>
  
  </>
  );
}

export default App;
