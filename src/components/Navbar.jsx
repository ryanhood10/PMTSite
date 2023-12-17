import React, { useState  } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import {  FaHome } from 'react-icons/fa';
import {  MdHelp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PMTsiteLogo from '../PMTphotos/PMTsiteLogo.png';
import TDOTBanner from '../images/TDOT Banner.png';
import { FaCheckCircle } from 'react-icons/fa'; 

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  //url for sharing
  const currentUrl = window.location.href;

  //copying the URL to clipboard to invite friends
  const copyCurrentUrlToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
      // Show a popup notification
  window.alert('URL copied! Paste and send to a friend');
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex text-[#84BD00] items-center">
       
        <img src={PMTsiteLogo} alt="PMTsiteLogo" />
     
      </div>

      {/* Search Input */}
      <div className="hidden lg:flex border-black border-solid rounded-full items-center px-2 w-[500px] ">
      {/* <div className="w-full  p-4 relative"> */}
      {/* overlay */}
      {/* <div className="absolute inset-0 text-black   rounded-2xl flex flex-col justify-center">
        <div className="flex justify-center pl-10">
          <div className="text-[#001489] py-8 px-4 text-md w-2/3 space-y-2">
            <div className="flex  items-center">
                <FaCheckCircle className="mr-2 text-4xl" />
                <h1 className="px-4  font-bold">
                  Registered TDOT Contractor
                </h1>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="mr-2 text-4xl" />
                <h1 className="px-4  font-bold">
                  Registered Metro Contractor
                </h1>
              </div>
          </div>
        </div>
      </div>
      <img className=" max-h-[100px]" src={TDOTBanner} alt="robot1" />
    </div> */}
      </div>

      
<div className='flex justify-center items-center space-x-16 pr-4'>
  <a href="#contact">
      <button className="bg-[#001489] text-white font-bold text-2xl hidden md:flex items-center py-2 px-4 justify-center rounded-full"
        > Contact Us </button>   
        </a>
        
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer"
        >
          <AiOutlineMenu size={30} />
        </div></div>


      {/* Mobile Menu */}
      {nav && <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 ">
          PMT <span className="font-bold"> Site</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                  <Link to="/" className="flex items-center">
                    <FaHome size={25} className="mr-4" /> Home
                  </Link>
                </li>

                <li className="text-xl py-4 flex">
                    <Link to="/solutions" className="flex items-center">
                      <TbTruckDelivery size={25} className="mr-4" /> Services
                    </Link>
                  </li>

         

            <li className="text-xl py-4 flex">
              {' '}
              <MdHelp size={25} className="mr-4" /> About Us{' '}
            </li>

            <li className="text-xl py-4 flex">
            <Link to="/testimonials" className="flex items-center">
              <AiFillTag size={25} className="mr-4" /> Testimonials{' '}
              </Link>
            </li>

          
            
            <li className="text-xl py-4 flex flex-col">
      <span className="mb-2">Share PMT site on your social:</span>
      <div className="flex space-x-2">
        {/* Facebook Share */}
        <FacebookShareButton 
        id="facebook-button"
        url={currentUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        {/* Twitter Share */}
        <TwitterShareButton url={currentUrl}
        id='twitter-button'>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        {/* WhatsApp Share (can be used for text message on mobile) */}
        <WhatsappShareButton url={currentUrl}
        id="whatsapp-button">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        {/* Copy to Clipboard (your existing functionality) */}
        <button 
        id='copy-link-button'
        onClick={copyCurrentUrlToClipboard}>
          <AiFillTag size={25} />
        </button>
      </div>
    </li>
          </ul>
          <div className="absolute font-sans  bottom-16 w-full">

            <div className="w-full flex lg:hidden p-4 relative">
      {/* overlay */}
       <div className="absolute inset-0 text-black   rounded-2xl flex flex-col justify-center">
        <div className="flex justify-end pl-10">
          <div className="text-[#001489] py-8 px-4 text-md w-2/3 space-y-2">
            <div className="flex  items-end">
                <FaCheckCircle className="mr-2 text-4xl" />
                <h1 className="px-4  font-bold">
                  Registered TDOT Contractor
                </h1>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="mr-2 text-4xl" />
                <h1 className="px-4  font-bold">
                  Registered Metro Contractor
                </h1>
              </div>
          </div>
        </div>
      </div>
      <img className=" max-h-[100px]" src={TDOTBanner} alt="robot1" />
    </div>
    </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
