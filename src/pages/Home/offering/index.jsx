import React from 'react'
import "./offering.css"

const Offering = () => {
  return (
    <section className="pt30 pb70 backBg offering">
    <article className="container">
      <header className="heading textCenter">
        <h2>Get the Perfect Product</h2>
      </header>
      <article className="wrapper dFlex justifyBetween alignItemsCenter" data-v-dfd357c6>
        <section className="video">
          <iframe
            src="https://www.youtube.com/embed/pRpeEdMmmQ0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
          <article className="videoCaption">
            <em>Wall tiling process</em>
          </article>
        </section>
        <article className="content">
          <header>
            <h3>
              Title about a product and its installation process, etc.
            </h3>
          </header>
          <article>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam{" "}
            </p>
          </article>
        </article>
      </article>
    </article>
  </section>
  )
}

export default Offering