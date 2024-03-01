import React, { useState } from 'react'

const Contact = () => {

  return (
    <div name='contact' className='h-screen w-full bg-[#0a192f] text-gray-300 flex justify-center py-32'>
        <form method='POST' action='https://getform.io/f/77c39f61-4b9f-4e02-83ed-8cc7d1a27372' className='h-full max-w-[450px] sm:max-w-[650px] md:max-w-[700px] w-full flex flex-col ml-4'>
            <div className='mb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Contact</p>
                <p className='py-4 text-xl'>// Submit the form below or send me an email - davidb.coldea@gmail.com</p>
            </div>

            <input className='p-2 text-black bg-[#ccd6f6]' name='name' type='text' placeholder='Name' />
            <input className='my-4 p-2 text-black bg-[#ccd6f6]' name='email' type='email' placeholder='Email' />
            <textarea className='p-2 text-black bg-[#ccd6f6]' name='message' rows='10' placeholder='Message'></textarea>
            <button className='flex justify-center my-5 border-2 text-white font-serif hover:bg-blue-400 hover:border-blue-400 p-2 mx-auto'>
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact