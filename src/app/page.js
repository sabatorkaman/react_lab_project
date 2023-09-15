"use client";

import { useState } from "react";
import style from "./page.module.css";
// import Squarerandom from "@/squareComponent/Squarerandom";

import Galery from "@/componentGAlery/Galery";
import Slider from "@/slidercomponent/Slider";
import Squarerandom from "@/squareComponent/Squarerandom";
import Numberrandom from "./Boxcomponent/Numberrandom";
import Test16 from "./Boxcomponent/Test16";

export default function Home() {
  return (
    <>
      {/* <Galery></Galery> */}
      <Slider />
      <hr/>
      {/* <Squarerandom /> */}
      <hr/>
      <Numberrandom />
      <Test16/>
    </>
  );
}
