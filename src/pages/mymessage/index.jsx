import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IP_ADDRESS } from '../../ip'
import style from "./mymessage.module.css"
import pin from "./pin.png"
const MyMessage = () => {
  const [data, setdata] = useState([]);
  const location = useLocation();
  let accessToken = localStorage.getItem('prodymeApiToken')
  const dataget = () => {
    let config = {
      headers: { Authorization: `Token ${accessToken}` }
    }
    Axios.get(`${IP_ADDRESS}api/getloggedTickets/`, config).then((res) => {
      console.log(res, "message");
      setdata(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {

    if (location.state !== null) {
      setdata(location.state.data)
    } else {
      dataget()
    }
  }, [])
  return (
    <div className={style.container}>
      <div className={style.breadcrumb}>
        <h1 style={{ color: "whitesmoke" }}>
          <NavLink to='/' style={{ color: "whitesmoke", textDecoration: "none" }}>Home</NavLink>\MyMessages
        </h1>
      </div>
      <div className={style.tabscontainer}>
        <NavLink to='/myaccount' className={style.myordermainchildlink}>MY PROFILE</NavLink>
        <NavLink to='/mymessage' className="myorder-main-child-link">MY MESSAGES</NavLink>
        <NavLink to='/myorder' className="myorder-main-child-link">MY ORDERS</NavLink>
        <NavLink to='/' className="myorder-main-child-link">MY DESIGNS</NavLink>
        <NavLink to='/mywishlist' className="myorder-main-child-link">WISHLIST</NavLink>
      </div>
      <div className={style.tabscontainer}>
        <p className={style.para}>Please note you can only view the queries sent by you and response will be sent via email.</p>

      </div>
      <div className={style.optionlist}>
        <span className={style.span}>{data.length} Messages</span>
        <div>
          <select>
            <option value="1">Newest</option>
            <option value="1">Newest</option>
          </select>
        </div>
      </div>
      {data.map((data, index) => (
        <div className={style.box}>
          <div className={style.upbox}>
            <span className={style.date}>Sep 15 2021</span>
            <div style={{ width: "600px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <span className={style.order}>Order Details:{data.existing_order_number}</span>
              <span className={style.status}>{data.status_ticket === "" ? "InProgress" : data.status_ticket}</span>
            </div>
          </div>
          <span className={style.messagetitle}>{data.subject}?</span>
          <p className={style.para}>{data.description}</p>
          <div className={style.attachement}>
            <img src={pin} alt="" className={style.img} />
            <span className={style.filename}>{data.upload_attachments.split('\\')[data.upload_attachments.split('\\').length - 1]}</span>

          </div>
        </div>
      ))}

    </div>
  )
}

export default MyMessage