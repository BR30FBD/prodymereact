import React from 'react'
import "./cards.css"
const Card = ({card}) => {
  return (
    <section className="globalCard whiteBg br20 cardBorder" style={{margin:"20px"}}>
    <section className="cardImage">
      <figure className="_image noMargin dFlex">
        <img src={card.image} alt="Card Image" className="mxAuto"></img>
      </figure>
    </section>
    <article className="cardDesc textLeft plb20 pt12">
      <header className="_heading mb6">
        <h5 className="noMargin ellipsisLine fs16">{card.name}</h5>
      </header>
      <aside className="_rating mb10">
      <span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
<span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
<span className="fa fa-star checked" style={{color:"#ff7a34"}}></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
      </aside>
      <article className="_description">
        <p className="fs16 ellipsis2Lines"> {card.description} </p>
      </article>
      <section className="_separator mb16">
     <hr/>
      </section>
      <article className="_price mb24 dFlex alignItemsCenter">
        <strong className="fs28">₹ {card.price}</strong>
        <b className="fs16 pl10">per box</b>
      </article>
      <footer className="_comparator mb20">
        <input type="checkbox" className='ant-checkbox' style={{backgroundColor:"#ff7a34"}}/>
        <a-checkbox > Compare </a-checkbox>
      </footer>
    </article>
  </section>
  )
}

export default Card