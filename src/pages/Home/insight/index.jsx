import React from 'react'
import "./insight.css"
const Insight = () => {
  
    
  return (
    <section className="inSights whiteBg">
    <aside className="container">
      <section className="dFlex justifyBetween gap80">
        <article className="highlights">
          <header>
            <h4 className="mb32">Highlights</h4>
            <h3>New Innovative Plastering solution</h3>
          </header>
          <article>
            <p className='label-form'>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum{" "}
            </p>
          </article>
          <footer>
            <button>Learn More</button>
          </footer>
        </article>
        <section className="slider positionRelative">
          <aside className="positionAbsolute zIndex1 fullCover">
            <section className="bgBorder"></section>
          </aside>
          <section className="positionAbsolute zIndex2 insightSlide fullWidth">
            <section className="fullWidth insightWrapper">
              
                {/* <img src="http://placehold.it/500x400" alt=""></img> */}
                <img src="https://photo.mybuilder.com/2_thumb/15175574_969e235d51.jpg" style={{width:"400px",height:"500px"}} alt=""></img>
                {/* <img src="http://placehold.it/600x400" alt=""></img> */}
           
            </section>
          </section>
        </section>
      </section>
    </aside>
  </section>
  )
}

export default Insight