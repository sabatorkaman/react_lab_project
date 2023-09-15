"use client";
import { useState } from "react";
import "./style-galery.css";
const IMAGE = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
];
const Galery = () => {
  const [bigimg, setBigimg] = useState(IMAGE[0]);
  const handleClick = (item) => {
    console.log(item);
    setBigimg(item)
    
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>galery</h1>
       
        <section className="parent">
          <img width="500px" height="300" src={`${bigimg}`} alt="" />
        </section>

        <section className="parent">
          {IMAGE.map((item, index) => {
            return (
              <img
                className={item === bigimg ? "active" : {}}
                key={index}
                src={`${item}`}
                onClick={()=>handleClick(item)}
                
                width="200"
                height="150"
              />
            );
          })}
        </section>
      
      </div>
    </>
  );
};

export default Galery;
