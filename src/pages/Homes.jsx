import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { rotateInDownLeft } from "react-animations";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Slide } from "react-awesome-reveal";
import {AnimateGroup,Animate} from "react-simple-animate"
const Homes = () => {
  return (
    <section className='static   bg-[url("/picture/medium-shot-man-working-computer.jpg")] bg-cover min-h-screen w-[100%]  font-[Oregano] shadow-xl flex justify-center items-center p-2  '>
      <div className="  absolute z-100  gap-2 grid grid-flow-row text-center">
        <div className=" hover:translate-x-4 duration-700  hover:box-border  ">
        

<AnimateGroup
  play={true}
  
>
  <div className=" flex">

  {['D', 'I', 'E', 'G', 'O',' - ', 'C', 'A', 'H', 'U','A', 'S', 'Q', 'U', 'I'].map((item, index) => {
    return (
      <Animate 
      play  
      key={item}
        sequenceIndex={index}
        end={{ opacity: 1, transform: 'translateY(10px)' }}
        start={{ opacity: 0, transform: 'translateY(0)' }}
        
        
        
      >
      <h1 className="text-white font-extrabold font-[Oregano] text-7xl  text-center   ">
              {item.toString()}
            </h1>
      </Animate>
    )
  })}
  </div>
</AnimateGroup>
            
         
        </div>
        <Fade delay={2000} cascade damping={3000}>
          <span className="text-white font-extrabold font-[Oregano] text-4xl  p-4 box-border  rounded-s-xl text-center">
            DESARROLLADOR WEB
          </span>
        </Fade>
        <div>
          <button className="rounded-xl p-1.5  text-white  box-border bg-blue-600  font-bold text-2xl text-center ">
            Descargar CV
          </button>
        </div>
      </div>

      <section className="fixed flex-1 bottom-[10%] right-0">
        <div>
          <ul className="grid gap-2 ">
            <li className=" rounded-xl bg-black  mr- p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-200 ">
              <a href="">
                <i className="bx bxl-github  text-white text-4xl "></i>
              </a>
            </li>
            <li className="rounded-xl bg-blue-800  mr- p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-200 ">
              <a href="">
                <i className="bx bxl-linkedin  text-white text-3xl"></i>
              </a>
            </li>
            <li className="rounded-xl bg-sky-500  mr- p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-100 text-center ">
              <a href="">
                <i className="bx bxl-twitter  text-white text-3xl  "></i>
              </a>
            </li>
            <li className="rounded-xl bg-gradient-to-br from-orange-500 to-red-500  mr- p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-200  ">
              <a href="">
                <i className="bx bxl-instagram   text-white text-4xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
export default Homes;
