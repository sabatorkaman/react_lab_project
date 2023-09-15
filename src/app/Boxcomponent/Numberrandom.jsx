"use client";
import { useState } from "react";
import  "./style.css";

const Numberrandom = () => {
  const [numrandom, setNumrandom] = useState(1);

  const clickHandele = () => {
    let num1 = Math.floor(Math.random() * 100);
    setNumrandom(num1);
  };

  return (
    <>
      <section className="parent">
        <div
          className={`${numrandom > 80 ? "green" : ""} ${
            numrandom < 60 ? "red" : "yellow"
          } box2 `}
        onClick={clickHandele}
        >
          <span className="span">{numrandom}</span>
        </div>
      </section>
    </>
  );
};
export default Numberrandom;
