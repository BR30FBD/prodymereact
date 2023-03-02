import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from '../../../common/Card'
import "./product.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  Axios  from 'axios';
import { IP_ADDRESS } from '../../../ip';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius:"6px",
  boxShadow: 24,
  p: 4,
};
const Product = () => {
 const [data,setdata]=useState([])
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 const [msg,setmsg]=useState('')
    var settings123 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };
      const handlewishlist=(e)=>{
        let accessToken=localStorage.getItem('prodymeApiToken')

        if(!accessToken){
          handleOpen()
          setmsg('Please Login First !')
          setTimeout(()=>{
            handleClose()
            setmsg('')
          },2000)
        }
        let wishlistData=data.filter((data,index)=>{
          if(data.product_id===e){
            return data;
          }
        });
        let newobj={
          product_list:wishlistData
        }
        let config={
            headers: { Authorization: `Token ${accessToken}` }
        }
        Axios.post(`${IP_ADDRESS}wishlist/`,newobj,config).then((res)=>{
          handleOpen()
          setmsg(res.data.message)
          setTimeout(()=>{
            handleClose()
            setmsg('')
          },2000)
        }).catch((err)=>{
          console.log(err)
        })
      }
    useEffect(()=>{
      fetch(`${IP_ADDRESS}getTodayDeals/`,{
            cache: "no-store",
           
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err,"err")
        })
    },[])
      
  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
         {msg}
          </Typography>
       
        </Box>
      </Modal>
    <section className="pt30 pb70 backBg products" style={{width:"100%"}}>
    <section className="container">
    <div style={{width:"100%",margin:"20px"}}>
      <header className="heading textCenter">
        <p className="header-class">Products you may like</p>
      </header>
      <aside  >
      <Slider {...settings123}>
          {data.map(card => (
            <Card card={card} fun={handlewishlist} />
          ))}
        </Slider>
      </aside>
      </div>
    </section>
  </section>
  </>
  )
}

export default Product