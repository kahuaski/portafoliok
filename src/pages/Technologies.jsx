import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
const Technologies = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 1,
      scale: 1,
      rotation: 120,
      duration: 10,
    });
  }, []);

  return (

    <section className=' px-60 '>

      <h1 className='font-[Oregano] font-bold text-8xl text-center align-text-top py-8' >Technologies</h1>
      <div className='  grid grid-cols-3  gap-8 p-4 w-[900px]  '>

        <div className='  hover:translate-y-4  duration-1000  hover:animate-spin'>

          <img src="/picture/css-3.png" alt="" />
         <h2 className='text-center py-4 text-4xl font-bold font-[Oregano] text-teal-900'>CSS</h2>
        </div>

        <div  className='  hover:translate-y-4  duration-1000  hover:animate-spin'>
          <img  src="/picture/html5 (1).png" alt="" />
          <h2  className='text-center py-4 text-4xl font-bold font-[Oregano] text-teal-900'>HTML5</h2>
        </div>
        <div className='  hover:translate-y-4  duration-1000  hover:animate-spin'>
          <img src="/picture/icons8-tailwind-css-480.png" alt="" />
          <h2 className='text-center py-4 text-4xl font-bold font-[Oregano] text-teal-900' >TAILWIND</h2>
        </div>
        <div  className='  hover:translate-y-4  duration-1000  hover:animate-spin' >
          <img src="public/picture/pngwing.com.png" alt="" />
          <h2 className='text-center py-4 text-4xl font-bold font-[Oregano] text-teal-900'>REACT</h2>
        </div>
        <div className='  hover:translate-y-4  duration-1000  hover:animate-spin'>
          <img src="public/picture/js.png" alt="" />
          <h2 className='text-center py-4 text-4xl font-bold font-[Oregano] text-teal-900'>JAVASCRIPT</h2>
        </div>
        <div className='  hover:translate-y-4  duration-1000  hover:animate-spin hover:scale-x-75' >
          <img src="public/picture/java.png" alt="" />
          <h2 className='text-center py-4 text-4xl font-bold font-[Oregano] text-teal-900'>JAVA</h2>
          
        </div>
        


      </div>
    </section>
  )
}

export default Technologies