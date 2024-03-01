import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import firebase from '../assets/firebase.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import postgresql from '../assets/postgresql.png';

const Skills = () => {
  return (
    <div name='skills' className='h-screen w-full bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center'>
            <div className='ml-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Skills</p>
                <p className='text-xl py-5'>// These are the technologies I have worked with</p>
            </div>

            {/* icons container */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={html} alt='HTML' className='mx-auto w-20' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={css} alt='CSS' className='mx-auto w-20' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={javascript} alt='Javascript' className='mx-auto w-20' />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={react} alt='React Js' className='mx-auto w-20' />
                    <p className='my-4'>React Js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={firebase} alt='Firebase' className='mx-auto w-20' />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={tailwind} alt='Tailwind' className='mx-auto w-20' />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={postgresql} alt='Postgresql' className='mx-auto w-20' />
                    <p className='my-4'>PostgreSQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={node} alt='Nodejs' className='mx-auto w-20' />
                    <p className='my-4'>Node.js</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills