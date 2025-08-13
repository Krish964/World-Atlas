import React from 'react'
import App from '../App'
import { FaLongArrowAltRight } from 'react-icons/fa'
import About from './About'

function Home() {
  return (
    <div className='bg-black text-white'>
      <main className="Hero-section flex flex-col gap-15 ">
        <div className="container flex justify-between gap-6 m-auto">
          <div className="left  flex flex-col gap-8 justify-center items-center">
            <h1 className='text-6xl font-bold'>Explore the <span className='text-teal-400'>world</span> one at a time!!</h1>
            <p className='text-xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nisi maxime non asperiores beatae quasi sit fugiat ad. Ea, non.</p>
            <button className='px-[2rem] py-[0.7rem] border-1 rounded-2xl flex items-center justify-center gap-3 cursor-pointer duration-200 hover:scale-105'>Start Exploring <FaLongArrowAltRight/></button>
          </div>
          <div className="right ">
            <img className=' w-[600px]  slow-spin rounded-full ' src="./src/assets/earth-11015_1280.jpg" alt="" />
          </div>
        </div>

        <About />
      </main>

      
    </div>
  )
}

export default Home
