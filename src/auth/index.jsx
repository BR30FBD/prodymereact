import React, { useState } from 'react'
import "./auth.css"
const Auth = () => {
   const [isHidden,setIsHidden]=useState(false)
  return (
<>
<section className="topBarActions dFlex alignItemsCenter positionRelative">
      
            <transition name="auth-fade">
          
                <aside className="positionAbsolute authWidget">
                  <section className="sign-in whiteBg positionRelative" style={{paddingTop:"10px",paddingBottom:"0px"}}>
                 {isHidden ? 
                 <article>
                        <h4 className="heading textCenter">Sign Up</h4>
                        <section className="inputFeed">
                          <label>Enter Name: </label>
                          <br/>
                          <input
                            type="text"
                            className='ant-input'
                            placeholder="Name"
                            id="username"
                          ></input>
                        </section>
                        <section className="inputFeed">
                          <label>Enter Email/Mobile Number: </label>
                          <br/>
                          <input
                            type="text"
                            className='ant-input'
                            placeholder="Email/Mobile Number"
                            id="email"
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
                          ></input>
                        </section>
                        <button className="ctaBtn" >
                          Create Account
                        </button>
                        <footer className="altCta dFlex" style={{justifyContent:"flex-start",alignItems:"center"}}>
                          <p>Existing user ?</p>
                          <a
                            className="txtBtn"
                            onClick={()=>setIsHidden(!isHidden)}
                          >
                            Sign in
                          </a>
                        </footer>
                      </article>:
                       <article>
                       <h4 className="heading textCenter">Sign In</h4>
                       
                       <section className="inputFeed">
                         <label>Enter Email/Mobile Number: </label>
                         <br/>
                         <input
                           type="text"
                           className='ant-input'
                           placeholder="Email/Mobile Number"
                           id="email"
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
                         ></input>
                       </section>
                       <section className="inputFeed"       style={{textAlign:"center",width:"100%"}}>
                       <a
                           className="txtBtn" 
                     
                          
                         >
                        Forgot password
                         </a>
                         </section>
                       <button className="ctaBtn" >
                         Login
                       </button>
                       <footer className="altCta dFlex" style={{justifyContent:"flex-start",alignItems:"center"}}>
                         <p>New user ?</p>
                         <a
                           className="txtBtn"
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