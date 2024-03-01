import React, { useEffect, useState } from 'react';
import logo from '../assets/david-image.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={logo} style={{ width: '40px' }} alt="Logo" />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {!toggle ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!toggle ? 'hidden' : 'absolute top-0 left-0 w-full min-h-[900px] sm:h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-4 text-4xl'>
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
            <a href='https://www.linkedin.com/in/david-coldea-31578b273' className='w-full flex justify-between items-center text-gray-300'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
            <a href='https://github.com/davidz811' className='w-full flex justify-between items-center text-gray-300'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]'>
            <a href='mailto:davidb.coldea@gmail.com' className='w-full flex justify-between items-center text-gray-300'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
            <a href='/' className='w-full flex justify-between items-center text-gray-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
