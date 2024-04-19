import travelimg from '../assets/travelImg.jpg';
import gymimg from '../assets/gymImg.jpg';
import cryptoimg from '../assets/cryptoImg.jpg';


const Work = () => {
    const projects = [
        // { image: gymimg, title: 'Gym Application', demo: 'https://gymexercises.davidcoldea.online', code: 'https://github.com/davidz811/gym_exercises' },
        { image: travelimg, title: 'Travel Application', demo: 'https://travelapp.davidcoldea.online', code: 'https://github.com/davidz811/travel-app' },
        { image: cryptoimg, title: 'Crypto Application', demo: 'https://cryptoapp.davidcoldea.online', code: 'https://github.com/davidz811/crypto-app' }
    ];

    return (
        <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center'>
                <div className='ml-4'>
                    <p className='font-bold text-4xl inline border-b-4 border-blue-400'>Work</p>
                    <p className='py-4 text-xl'>// Check out some recent work</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {projects.map((project, index) => (
                        <div
                            key={project.index}
                            style={{ backgroundImage: `url(${project.image})` }}
                            className='group shadow-lg shadow-[#040c16] container flex justify-center items-center mx-auto content-div'
                        >
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-xl font-bold text-gray-300 tracking-wider'>{project.title}</span>
                                <div className='flex justify-center pt-8'>
                                    <a href={project.demo}>
                                        <button className='mr-5 text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>Demo</button>
                                    </a>
                                    <a href={project.code}>
                                        <button className='text-2xl bg-white text-gray-700 rounded-lg text-center font-bold p-2'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Work;