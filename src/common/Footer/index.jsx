import React from 'react'
import "./footer.css"
import img1 from "../../assets/social.png"
import img2 from "../../assets/fb.png"
import img3 from "../../assets/linkedin.png"
import img4 from "../../assets/twitter.png"
import img5 from "../../assets/youtube.png"
const Footer = () => {
  return (
    <footer className="footNote">
    <section className="footLinks dFlex">
      <nav className="socialLinks dFlex justifyBetween">
        <section className="linkBlock dFlex">
          <img
            src={img1}
            alt="S"
            className="mAuto"
          ></img>
        </section>
        <section className="linkBlock dFlex">
          <img
            src={img2}
            alt="S"
            className="mAuto"
          ></img>
        </section>
        <section className="linkBlock dFlex">
          <img
            src={img3}
            alt="L"
            className="mAuto"
          ></img>
        </section>
        <section className="linkBlock dFlex">
          <img
            src={img4}
            alt="T"
            className="mAuto"
          ></img>
        </section>
        <section className="linkBlock dFlex">
          <img
            src={img5}
            alt="Y"
            className="mAuto"
          ></img>
        </section>
      </nav>
      <aside className="inHouseLinks">
        <article className="listLink">
          <p>Product Finder</p>
        </article>
        <article className="listLink">
          <p>About</p>
        </article>
        <article className="listLink">
          <p>Contact</p>
        </article>
        <article className="listLink">
          <p>About Wrhouze</p>
        </article>
        <article className="listLink">
          <p>Projects</p>
        </article>
        <article className="listLink">
          <p>FAQ</p>
        </article>
        <article className="listLink">
          <p>Corporate Website</p>
        </article>
      </aside>
    </section>
    <article className="copyRight">
      <section className="dFlex justifyCenter">
        <p>Copyright © 2021 Wrhouze. All rights reserved</p>
        <p className="onlyWeb">|</p>
        <p>Terms of use</p>
        <p className="onlyWeb">|</p>
        <p>Privacy Policy</p>
      </section>
    </article>
  </footer>
  )
}

export default Footer