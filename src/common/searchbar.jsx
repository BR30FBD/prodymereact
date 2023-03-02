import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAllUsers } from '../action/slice'
import Loader from './Loader'
import style from '../pages/Home/banner/banner.css'
import { IP_ADDRESS } from '../ip'
const Searchbar = () => {
  const  [load,setload]=useState(false)
  const [productname,setpoductname]=useState('')
  const [categoryname,setcategoryname]=useState('ALL')

  

  const [users, setUsers] = useState([]);

 
  const nav=useNavigate()
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
  }else{
    fetch(`${IP_ADDRESS}api/getproduct/${categoryname}`,{
      cache: "no-store",
     
  }).then((res)=>{
      return res.json()
  }).then((res)=>{
    setload(false)

    nav("/searchresults",{state:{id:"1",data:res.data,category:categoryname,product:productname}})
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
}).catch((err)=>{

})
}
   

}
useEffect(() => {
  Axios.get(`${IP_ADDRESS}api/getCategory/`,{ mode: 'no-cors'}).then((res)=>{
    setUsers(res.data.data)
  })
 
}, []);
  return (
    <>
    {load &&
      <Loader/>
    }
   <form onSubmit={handledata} >
     <section  {...style} className="form mxAuto dFlex" style={{marginTop:"0px"}}>
              <header className="selectText" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <p  className="label-form">Category :</p>
              </header>
              <section className="inputSelection" id="inputSelectionid">
                <a compact="">
                  <select style={{width:"20%",padding:"10px",height:"100%",border:"none",outline:"none",borderRadius:"13px"}}
                    default-value="All"
                    onChange={(e)=>handlechange(e)}
                  >
                   
                    {users && users.map(item => (
                      
                      <option value={item} >
                 
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
    </>
  )
}

export default Searchbar