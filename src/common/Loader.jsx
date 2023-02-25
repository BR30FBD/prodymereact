import React from 'react'
import "./loader.css"
const Loader = () => {
  return (
<>
<div style={{width:"100vw",height:"100vh",zIndex:"99999999999999999",background:"#fdfdfdb0",position:"fixed",top:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>
<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

</div>
</>
  )
}

export default Loader