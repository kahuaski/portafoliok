import React from 'react'

const Header = () => {
  return (
    <section className='  font-[Oregano] font-extrabold '>
      <div className=' flex justify-start p-2 ' >
        <img className='w-[20px] h-[20px]' src="/picture/pngwing.com (1).png" alt="" />
        <span className='text-black font-sm text-sm '> Kahuaski </span>
      </div>



      <div className='text-2xl  w-[100%]  text-black    '>
        <ul className='flex justify-around items-center gap-0' >
          <li className=' px-4 rounded-xl  hover:translate-x-2 duration-700 hover:bg-teal-500  hover:translate-y-2 hover:px-14 hover:text-white' >Home</li>
          <li className=' px-4 rounded-xl hover:translate-x-2 duration-700 hover:bg-teal-500 hover:translate-y-2 hover:px-14 hover:text-white'>About</li>
          <li className=' px-4 rounded-xl hover:translate-x-2 duration-700 hover:bg-teal-500 hover:translate-y-2 hover:px-14 hover:text-white'>Projects</li>
          <li className=' px-4 rounded-xl hover:translate-x-2 duration-700 hover:bg-teal-500 hover:translate-y-2 hover:px-14 hover:text-white'>Technologies</li>
          <li className=' px-4 rounded-xl hover:translate-x-2 duration-700 hover:bg-teal-500  hover:translate-y-2 hover:px-14 hover:text-white'>Contact</li>
        </ul>



      </div>

    </section>
  )
}

export default Header