import React from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const priceRangeValues = [
  { value: 0, label: "$0" },
  { value: 25, label: "₹1000" },
  { value: 50, label: "₹3000" },
  { value: 75, label: "₹5000" },
  { value: 100, label: "₹7000+" },
];

function valuetext(value) {
  return `${value}`;
}

function PriceRangeSelector({ value, onChange,fun }) {
  const handlechange=(e)=>{
    console.log(e.target.value,"price");
    if(e.target.value===0){
      fun(0)
    }else if(e.target.value===25){
      fun(1000)
    }else if(e.target.value===50){
      fun(3000)
    }else if(e.target.value===75){
      fun(5000)
    }else{
      fun(7000)
    }
   
  }
  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <div  style={{width:"90%",display:"flex",justifyContent:"space-around",alignContent:"center"}}>
      <Typography id="price-range-slider"  gutterBottom sx={{textAlign:"center",mt:4,width:"20%"}}>
        Select Price Range
      </Typography>
      <div style={{width:"70%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Slider
        value={value}
        onChange={handlechange}
        getAriaValueText={valuetext}
        step={null}
        marks={priceRangeValues}
        track={false}
        aria-labelledby="price-range-slider"
      />
      </div>
      </div>
    </div>
  );
}

export default PriceRangeSelector;
