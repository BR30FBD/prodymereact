import React from 'react'
import "./loader.css"
const Loader = () => {
  return (
<>
<div style={{width:"100vw",height:"100vh",zIndex:"99999999999999999",background:"#fdfdfd",position:"fixed",top:"0"}}>
<div class="ring">Loading
  <span className='spanitem'></span>
</div>
</div>
</>
  )
}

export default Loader