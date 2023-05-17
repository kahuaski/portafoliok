import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { rotateInDownLeft } from 'react-animations';
const Homes = () => {

    const elementRef = useRef(null);

    useEffect(() => {
      gsap.from(elementRef.current, {
        opacity: 1,
        scale: 0.5,
        x:-100,
        y:-150,
        duration: 6,
        ease: 'power1.out',
      });
    }, []);
    return (
        <section className='   text-center text-white  p-6 grid grid-cols-2 items-end  '>
            <div  className=''>
            
            <motion.div
      initial={{ opacity: 0, y: 20,  }}
      animate={{ opacity: 1, x: 10, scale:0.9, }}
      transition={{ duration: 6}}
      
     className=''>
     
<img src="/picture/3918927.png" alt=""/>
    </motion.div>
            
            </div>
            <div >
                <div className='flex justify-center items-start'>
            
                
                <img className='w-[100px] hover:w-[200px] duration-1000 rounded-full border-2 border-teal-500 ' src="/picture/kahauski11.png" alt="" />
                </div>
                <div className='py-2 hover:translate-x-4 duration-500 text-center skew-x-12  font-[Oregano] hover:text-4xl'>
                    <h1 className='text-xl font-extrabold text-black  ' >I'm Diego  <span className='text-teal-500 text-xl'>Cahuasqui
                    </span> </h1>

                </div>
                <div className='p-2 text-black font-[Oregano]  text-xl'>
                    <p>I am an experienced web developer with a passion for creating clean and functional websites. My portfolio showcases a range of projects that demonstrate my skills in front-end and back-end technologies, including HTML, CSS, JavaScript, React, Next.js. I am also familiar with project management tools, and have experience with version control using Git. If you are interested in working with me or have any questions about my portfolio, please feel free to contact me.</p>
                </div>
            </div>
            <hr />
            <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, x: 10, scale:1.5, rotate:10 }}
      transition={{ duration: 6 }}
      
     className='absolute bg-black'>
     
    </motion.div>
        </section>
    )
}

export default Homes