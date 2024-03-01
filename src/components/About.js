import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hi, I'm David , nice to meet you. Thank you for taking a look around.</p>
                        </div>
                        <div className='text-lg'>
                            <p>As a Front-End Developer, I bring a passion for crafting visually stunning and seamlessly functional digital experiences. With a keen eye for design aesthetics, a commitment to user-centric development, and proficiency in cutting-edge technologies, I am eager to contribute my skills to your team.</p>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default About