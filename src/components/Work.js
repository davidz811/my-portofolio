import travelimg from '../assets/travelImg.jpg';
import gymimg from '../assets/gymImg.jpg';
import cryptoimg from '../assets/cryptoImg.jpg';


const Work = () => {
    return (
        <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center'>
                <div className='ml-4'>
                    <p className='font-bold text-4xl inline border-b-4 border-blue-400'>Work</p>
                    <p className='py-4 text-xl'>// Check out some recent work</p>
                </div>

                <div className='flex gap-6'>
                    <div style={{ backgroundImage: `url(${gymimg})`, width: '460px' }}
                        className='group shadow-lg shadow-[#040c16] container flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                                Gym Application
                            </span>
                            <div className='flex justify-center pt-8'>
                                <a href='/'>
                                    <button className='mr-5 text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${travelimg})`, width: '460px' }}
                        className='group shadow-lg shadow-[#040c16] container flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                                Travel Application
                            </span>
                            <div className='flex justify-center pt-8'>
                                <a href='/'>
                                    <button className='mr-5 text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${cryptoimg})`, width: '460px' }}
                        className='group shadow-lg shadow-[#040c16] container flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                                Crypto Application
                            </span>
                            <div className='flex justify-center pt-8'>
                                <a href='/'>
                                    <button className='mr-5 text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;