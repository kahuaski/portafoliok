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

                <section className='  static grid grid-cols-2  font-[Oregano] bg-[url("./picture/fondo-web.jpg")] bg-cover shadow-xl'>
                        <div className='text-center p-4 min-h-screen'>
                                <h1 className='text-center text-5xl m-4  text-white font-extrabold bg-blue-800 skew-x-12 box-border h-14 w-96'> Technologies</h1>

                                <p className='text-3xl font-bold'>As a web developer, it's important to stay up to date with the latest technologies that facilitate the design and functionality of websites. In this post, I will share some of the technologies that I master and that have helped me create quality web projects.
                                </p>

                        </div>

                        <div className='grid grid-cols-3  gap-1  '>

                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer '>

                                        <img src="/icons/pngegg.png" alt="" />

                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>
                                        <img src="/icons/pngegg (1).png" alt="" />


                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>
                                        <img src="/icons/pngegg (2).png" alt="" />



                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>

                                        <img src="/icons/pngegg (4).png" alt="" />


                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>

                                        <img src="/icons/pngegg (5).png" alt="" />


                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>

                                        <img src="/icons/pngegg (6).png" alt="" />


                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>

                                        <img src="/icons/pngegg (7).png" alt="" />


                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>

                                        <img src="/picture/pngwing.com.png" alt="" />


                                </div>
                                <div className='box-border h-[60%] w-[80%] m-2 p-2 border-4 rounded-lg border-black bg-gradient-to-tr from-neutral-400 to-blue-300 flex justify-items-center hover:translate-y-3 duration-700 cursor-pointer'>

                                        <img src="/picture/icons8-tailwind-css-480.png" alt="" />


                                </div>


                        </div>
                </section>
        )
}

export default Technologies