import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] w-full h-full mx-auto px-8 flex flex-col justify-center text-white'>
        <p className='text-[19px] text-blue-400'>Hi, my name is</p>
        <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>Coldea David-Beniamin</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Developer</h2>
        <p className='text-[25px] text-[#8892b0] py-4 max-w-[700px]'>I'm a Developer focused on developing great applications. Let's transform your digital vision into reality!</p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
          >
            <button className='group text-[20px] flex border-2 px-6 text-white py-2 my-2 items-center hover:bg-blue-400 hover:border-blue-400'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className='ml-4' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home