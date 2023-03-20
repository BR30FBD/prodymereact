import { IconButton } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Auth from '../../auth';
import Profileicon from '../profileicon';
import Searchbar from '../searchbar';
import styleheader from "./header.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { fetchAllUsers } from '../../action/slice';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import getwishlist, { getwishlistData } from '../../action/getwishlist';
import { IP_ADDRESS } from '../../ip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = ({dis}) => {
  const token=localStorage.getItem('prodymeApiToken');
  const nav=useNavigate()
  const [category,setcategory]=useState([])
    const [state,setState]=useState({
        scrollPosition: null
      })
      const [display,setdisplay]=useState(dis)
      const  [load,setload]=useState(false)
      const [productname,setpoductname]=useState('')
      const [categoryname,setcategoryname]=useState('ALL')
      const dispatch = useDispatch();
      const [style,setstyle]=useState(false)
    
      const { list } = useSelector((state) => state.category);
      const { wishlist } = useSelector((state) => state.wishlistData);
      
      const [users, setUsers] = useState([]);
    let cartData=JSON.parse(localStorage.getItem('Cart')) || [];
   
  
      const handlechange=(e)=>{
        
        setcategoryname(e.target.value)
      }
    const handledata=(e)=>{
      e.preventDefault()
    setload(true)
    if(productname!==''){
      fetch(`${IP_ADDRESS}api/searchFilter/${productname}/${categoryname}`,{
        cache: "no-store",
      
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
      setload(false)
      if(res.data.length>0){
        nav("/searchresults",{state:{id:"1",data:res.data,category:categoryname,product:productname}})
    window.location.reload()

      }else{
        fetch(`${IP_ADDRESS}api/getproduct/${categoryname}`,{
          cache: "no-store",
         
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        setload(false)
    
        nav("/searchresults",{state:{id:"1",data:res.data,category:categoryname,product:productname}})
    window.location.reload()

      }).catch((err)=>{
      
      })
      }
    
      
    }).catch((err)=>{
      
        fetch(`${IP_ADDRESS}api/getproduct/${categoryname}`,{
          cache: "no-store",
         
      }).then((res)=>{
          return res.json()
      }).then((res)=>{
        setload(false)
        nav("/searchresults",{state:{id:"1",data:res.data,category:categoryname,product:productname}})
    window.location.reload()

      }).catch((err)=>{
      
      })
    })
    }else{
      fetch(`${IP_ADDRESS}api/getproduct/${categoryname}`,{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
      setload(false)
      nav("/searchresults",{state:{id:"1",data:res.data,category:categoryname,product:productname}})
    window.location.reload()

    }).catch((err)=>{
    
    })
    }
       
    
    }
      const auth=()=>{
        setdisplay(false)
      }
      const updateScroll=()=>{
        setState({
          scrollPosition: window.scrollY
        });

        if(state.scrollPosition > 330){
        setstyle(true)
        }else{
         setstyle(false)
        }
      }
      useEffect(()=>{
        window.addEventListener("scroll", updateScroll);
      })
      let accessToken=localStorage.getItem('prodymeApiToken')
      useEffect(()=>{
        
    fetch(`${IP_ADDRESS}api/getCategory/`,{
        cache: "no-store",
       
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        setcategory(res.data)
    })
   },[])
   useEffect(() => {
    dispatch(fetchAllUsers());
    if(accessToken){
      dispatch(getwishlistData());

    }
    setUsers(list);
  }, [dispatch, list]);
  
  return (
    <>
<section {...styleheader}
  data-v-aaec3394=""
  className="justifyBetween dFlex topbar123"
  style={{ height: "100px",width:"85%",paddingLeft:"100px",paddingRight:"100px",position:"fixed",zIndex:"20",background:"white",top:"0px" }}
>
  
  <nav data-v-aaec3394="" className="navListWeb dFlex alignItemsCenter">
    <ul data-v-aaec3394="">
    <li data-v-aaec3394="">
    <NavLink to='/' className="label-form" style={{textDecoration:"none"}}>
      LOGO
      </NavLink>
      </li>
      <li data-v-aaec3394=""  className="label-form">Builder</li>
      <li data-v-aaec3394=""  className="label-form">Catalogue</li>
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
   <form className='t-form' onSubmit={handledata} style={{width:"55%"}}>
   <section   className="form t-form mxAuto dFlex" style={{marginTop:"0px"}}>
            <header className="selectText" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
              <p  className="label-form" style={{marginTop:`${style ? "15px" :"0px"}`}}>Category </p>
            </header>
            <section className="inputSelection" id="inputSelectionid" 
            style={{border:`${style ?"1px solid #ff7a34":"none"}`,borderRadius:`${style ? "13px":""}`,marginTop:`${style ? "20px":"0px"}`,height:`${style ? "40px":"auto"}`}}>
              <a compact="">
                <select style={{width:"20%",padding:"10px",height:"100%",border:"none",outline:"none",borderRadius:"13px"}}
                  default-value="All"
                  onChange={(e)=>handlechange(e)}
                >
                 
                  {users && users.map((item ,index)=> (
                    
                    <option value={item}  key={index}>
               
                      {item}
                    </option>
                  ))}
                </select>
                
                
                <input type="search" className='inputsearch' style={{width:"75%",height:"100%",outline:"none",borderRadius:"13px"}} placeholder="Search Categories" onChange={(e)=>setpoductname(e.target.value)}></input>
                
                <span className="ant-input-suffix"  onClick={(e)=>handledata(e)}>
          <i
            aria-label="icon: search"
            tabIndex={-1}
            className="anticon anticon-search ant-input-search-icon"
          >
            <svg
              viewBox="64 64 896 896"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className=""
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </i>
        </span>
              </a>
            </section>
          </section>
          </form>
  
  }
  <section
    data-v-aaec3394=""
    className="topBarActions dFlex alignItemsCenter positionRelative"
  >
    <NavLink to='/mywishlist'>
    <IconButton aria-label="cart" className='btn-clor' sx={{background:"#ffff"}}>
      <StyledBadge badgeContent={wishlist.length} color="secondary" className='btn-cl'>
      <FavoriteBorderIcon  className='btn-cl' />

      </StyledBadge>
    </IconButton>
    </NavLink>
    <NavLink to='/checkout'>
    <IconButton aria-label="cart" className='btn-clor' sx={{background:"#ffff"}}>
      <StyledBadge badgeContent={cartData.length} color="secondary" className='btn-cl'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </NavLink>
    <NavLink to='/contactus'  className="label-form" style={{textDecoration:"none"}}>
  Contact Us
    </NavLink>
    {token ? 
    
    <Profileicon/>
    :
    <button data-v-aaec3394=""  className="label-form" onClick={()=>setdisplay(!display)}>Login / Sign Up</button>
  }
    
   {display &&
    <Auth fun={auth}/>
   
   }

  </section>
</section>
</>

  )
}

export default Header