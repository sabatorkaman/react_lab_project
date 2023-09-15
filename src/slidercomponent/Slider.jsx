"use client";
import { useState } from "react";
import   "./slider.css";
const PRODUCTS = [
  { id: 1, src: "./images/1.png", title: "model 1" },
  { id: 2, src: "./images/2.png", title: "model 2" },
  { id: 3, src: "./images/3.png", title: "model 3" },
  { id: 4, src: "./images/4.png", title: "model 4" },
  { id: 5, src: "./images/5.png", title: "model 5" },
];
const Slider = () => {
  const [bigimg, setBigimg] = useState(PRODUCTS[0]);
  const handeleClick = (item) => {
    setBigimg(item);
  
  
  };
  const handeleNext = () => {
      let nextMe = PRODUCTS[bigimg.id];
    console.log(nextMe);
   nextMe.id ;
    if (nextMe.id == 5) {
      nextMe.id = 0;
    }

    setBigimg(PRODUCTS[bigimg.id]);
   };

  //bag
   
    const handelePrve = () => {
       
    let pervMe = PRODUCTS[bigimg.id];
    let text = pervMe.id -1;
    console.log(pervMe.id);

 ;
    if (pervMe.id == 5) {
      pervMe.id = 0;
    }


     setBigimg(PRODUCTS[bigimg.id]);


  };

     const[prev,setPrev]=useState(PRODUCTS[5])

 

  return (
    <>
      <h1>slider cars</h1>

      <section className="parent">
        <img
          src={`${bigimg.src}`}
          id={bigimg.id}
          width="500"
          height="400"
          alt=""
        />
        <button style={{position:"absolute", right:"130px"}} onClick={handeleNext}> next</button>
        <button style={{ position:"absolute", left:"130px" }} onClick={handelePrve}>prve</button>
      </section>
      <div
        style={{ textAlign: "center", fontSize: "20px", marginBottom: "10px" }}
      >
        {bigimg.title}
      </div>

      <section className="parentone">
        {PRODUCTS.map((item, index) => {
          return (
      
            <img
              className={item === bigimg ? "active ": " "}
              onClick={() => handeleClick(item)}
              key={index}
              src={item.src}
              width="200"
              height="150"
              />
              
        
          );
        })}
        
      </section>
    </>
  );
};
export default Slider;
