import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signInUser } from '../action/signin'
import { signupUser } from '../action/signup'
import "./auth.css"
const Auth = ({fun}) => {
  const nav=useNavigate()
   const [isHidden,setIsHidden]=useState(false)
   const [signup,setSignUp]=useState({
    email:"",
    name:"",
    password:""
   })
   const [signin,setSignIn]=useState({
    email:"",
    password:""
   })
   const dispatch = useDispatch();
   const list = useSelector((state) => state);

   const handlesignup=(e)=>{
    const newdata={...signup};
    newdata[e.target.id]=e.target.value;
    setSignUp(newdata)
   }
   const handlesignin=(e)=>{
    const newdata={...signin};
    newdata[e.target.id]=e.target.value;
    setSignIn(newdata)
   }
const hide=()=>{setIsHidden(false)}
 const handlesubmit=()=>{
  dispatch(signupUser(signup,hide))
  if(list.userSignUp.list.message=='Registration Successfully'){
    setTimeout(()=>{
      setIsHidden(false)

    },500)
  }
 }

 const handlelogin=()=>{
  dispatch(signInUser(signin,fun))
 
  }
 
  return (
<>
<section id="auth" className="topBarActions dFlex alignItemsCenter positionRelative">
      
            <transition name="auth-fade">
          
                <aside className="positionAbsolute authWidget">
                  <section className="sign-in whiteBg positionRelative" style={{paddingTop:"10px",paddingBottom:"0px"}}>
                 {isHidden ? 
                 <article>
                  {list.userSignUp.list.message!=='' &&
                        <h3 className="heading textCenter">{list.userSignUp.list.message}</h3>

                  
                  }

                        <h4 className="heading textCenter label-form" style={{margin:"0px"}}>Sign Up</h4>
                        <section className="inputFeed">
                          <label>Enter Name: </label>
                          <br/>
                          <input
                            type="text"
                            className='ant-input'
                            placeholder="Name"
                            id="name"
                            value={signup.name}
                            onChange={(e)=>handlesignup(e)}
                          />
                        </section>
                        <section className="inputFeed">
                          <label>Enter Email: </label>
                          <br/>
                          <input
                            type="email"
                            className='ant-input'
                            placeholder="Email"
                            id="email"
                            value={signup.email}
                            onChange={(e)=>handlesignup(e)}
                          ></input>
                        </section>
                        <section className="inputFeed">
                          <label>Enter Password: </label>
                          <br/>
                          <input
                            type="password"
                            className='ant-input'
                            placeholder="Password"
                            id="password"
                            value={signup.password}
                            onChange={(e)=>handlesignup(e)}
                          ></input>
                        </section>
                        <button className="ctaBtn label-form" onClick={handlesubmit}>
                          Create Account
                        </button>
                        <footer className="altCta dFlex label-form" style={{justifyContent:"flex-start",alignItems:"center"}}>
                          <p>Existing user ?</p>
                          <a
                            className="txtBtn label-form"
                            onClick={()=>setIsHidden(!isHidden)}
                          >
                            Sign in
                          </a>
                        </footer>
                      </article>:
                       <article>
                        {list.userSignIn.list.message!=='' &&
                          <h3 className="heading textCenter">{list.userSignIn.list.message==='Login Successful'? 'Login Successfully !':list.userSignIn.list.message}</h3>
                        
                        }
                       <h4 className="heading textCenter label-form" style={{margin:"0px"}}>Sign In</h4>
                       
                       <section className="inputFeed ">
                         <label>Enter Email: </label>
                         <br/>
                         <input
                           type="email"
                           className='ant-input'
                           placeholder="Email"
                           id="email"
                           value={signin.email}
                          onChange={(e)=>handlesignin(e)}
                         ></input>
                       </section>
                       <section className="inputFeed">
                         <label>Enter Password: </label>
                         <br/>
                         <input
                           type="password"
                           className='ant-input'
                           placeholder="Password"
                           id="password"
                           value={signin.password}
                           onChange={(e)=>handlesignin(e)}
                         ></input>
                       </section>
                       <section className="inputFeed"       style={{textAlign:"center",width:"100%"}}>
                       <a
                           className="txtBtn label-form" 
                     
                          
                         >
                        Forgot password
                         </a>
                         </section>
                       <button className="ctaBtn " onClick={handlelogin}>
                         Login
                       </button>
                       <footer className="altCta dFlex" style={{justifyContent:"flex-start",alignItems:"center"}}>
                         <p className='label-form'>New user ?</p>
                         <a
                           className="txtBtn label-form"
                           onClick={()=>setIsHidden(!isHidden)}
                          
                         >
                           Create Account
                         </a>
                       </footer>
                     </article> }
                     
                 
                  </section>
                  </aside>
                 
                  </transition>
                  </section>
</>
  )
}

export default Auth