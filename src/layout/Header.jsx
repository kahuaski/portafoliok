import React, { useState } from 'react'
const Header = () => {
  const [home, sethome] = useState(false)

  const handlenClik = (e) => {
    sethome(!home)
  }


  return (
    <section className='fixed w-[100%] h-24 font-[Oregano] font-extrabold shadow-md p-2 bg-black z-0 '>


      <div className='  flex justify-start p-2 ' >
        <img className='w-[20px] h-[20px]' src="/picture/pngwing.com (1).png" alt="" />
        <span className='text-white font-sm text-2xl px-4 '> Kahuaski </span>
      </div>



      <div className='text-xl  w-[100%]  text-white     '>
        <ul className='flex justify-end items-center gap-0' >
          <li onClick={handlenClik} className=' px-4 rounded-xl  hover:translate-x-2 duration-500 hover:bg-blue-900  hover:translate-y-2 hover:px-10 hover:text-white cursor-pointer ' >Home</li>
          <li className=' px-4 rounded-xl  hover:translate-x-2 duration-500 hover:bg-blue-900  hover:translate-y-2 hover:px-10 hover:text-white cursor-pointer '>  About</li>
          <li className=' px-4 rounded-xl  hover:translate-x-2 duration-500 hover:bg-blue-900  hover:translate-y-2 hover:px-10 hover:text-white cursor-pointer '>  Projects</li>
          <li className=' px-4 rounded-xl  hover:translate-x-2 duration-500 hover:bg-blue-900  hover:translate-y-2 hover:px-10 hover:text-white cursor-pointer '>   Technologies</li>
          <li className=' px-4 rounded-xl  hover:translate-x-2 duration-500 hover:bg-blue-900  hover:translate-y-2 hover:px-10 hover:text-white cursor-pointer '>  Contact</li>
        </ul>




      </div>
    </section>
  )
}

export default Header