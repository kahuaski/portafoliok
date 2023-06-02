import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { rotateInDownLeft } from 'react-animations';
const Homes = () => {



    return (
        <section className='static   bg-[url("/picture/medium-shot-man-working-computer.jpg")] bg-cover min-h-screen w-[100%]  font-[Oregano] shadow-xl flex place-items-center p-48 '>
        
        
        
        <div className='   grid gap-6  '>
            
            <div className=' hover:translate-x-4 duration-700 hover:bg-blue-800 hover:box-border h-20 w-[400px] hover:rounded-s-xl'>
                <h1 className='text-white font-extrabold font-[Oregano] text-6xl hover:text-red-800 hover:p-2  '>Diego Cahuasqui </h1>
            </div>
                <span className='text-white font-extrabold font-[Oregano] text-4xl  bg-blue-800 p-4 box-border h-16 w-64 rounded-s-xl'>Web Developer</span>
                
               <div>
               <button className='rounded-br-xl text-white bg-blue-700  box-border h-12 w-32 hover:bg-blue-400 duration-700 font-bold text-xl hover:translate-y-2'>About</button>

               </div> 
            </div>
        
        <section className='fixed top-[30%] right-0'>
        <div>
          <ul className='grid gap-2' >
            <li className=' rounded-xl bg-black  mr-1 p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-200 ' >
              <a href=""><i className='bx bxl-github  text-white text-4xl '></i></a>
            </li>
            <li className='rounded-xl bg-blue-800  mr-1 p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-200 '>
              <a href=""><i class='bx bxl-linkedin  text-white text-3xl'></i></a>
            </li>
            <li className='rounded-xl bg-sky-500  mr-1 p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-100 text-center '>
            <a href=""><i class='bx bxl-twitter  text-white text-3xl  '></i></a>
            </li>
            <li className='rounded-xl bg-gradient-to-br from-orange-500 to-red-500  mr-1 p-4  hover:-translate-x-8 hover:p-4 hover:border-white duration-300 hover:bg-blue-200  '>
            <a href=""><i class='bx bxl-instagram   text-white text-4xl'></i></a>
            </li>
          </ul>
        </div>
      </section>
                     
        
        
            
            
        </section>
    )
}
export default Homes