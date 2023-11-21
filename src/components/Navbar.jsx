import React, { useState, useRef } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaHome } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { data} from '../data/data'
import Cart from './Cart'; // Adjust the import path based on your project structure
import { Link } from 'react-router-dom';
import PMTsiteLogo from '../PMTphotos/PMTsiteLogo.png'
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
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const [isCartOpen, setIsCartOpen] = useState(false); // Add this state

  //url for sharing
  const currentUrl = window.location.href;

  //handle cart
  // const handleToggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // };

  // const handleCloseCart = () => {
  //   setIsCartOpen(false);
  // };

  //pressing enter to search for robot
  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     // Find the robot with a matching name
  //     const matchingRobot = data.find((robot) =>
  //       robot.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  
  //     if (matchingRobot) {
  //       // Scroll to the robot using the ID of the matching robot
  //       const robotId = `robot-${matchingRobot.id}`;
  //       scrollToRobot(robotId);
  //     }
  //   }
  // };
  
//jumping to searched robot
  // const scrollToRobot = (robotId) => {
  //   const element = document.getElementById(robotId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
  //     // Apply highlight effect by adding a Tailwind CSS class to the element
  //     element.classList.add('ring-2', 'ring-blue-600', 'transition-transform', 'transform', 'scale-110');
  //     setTimeout(() => {
  //       element.classList.remove('ring-2', 'ring-blue-600', 'transition-transform', 'transform', 'scale-110');
  //     }, 5000); // Remove the class after 3 seconds (adjust as needed)
  //   }
  // };
  
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
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Cyber<span className="font-bold">Mart</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div> */}
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        {/* <AiOutlineSearch size={30} />
        <input
          ref={searchInputRef}
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Robots"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        /> */}
      </div>
<div className='flex justify-center items-center space-x-16 pr-4'>
      <button className="bg-[#001489] text-white font-bold text-2xl hidden md:flex items-center py-2 px-4 justify-center rounded-full"
        > Contact Us </button>   
        
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer"
        >
          <AiOutlineMenu size={30} />
        </div></div>

           {/* Cart button */}
      {/* <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full"
       onClick={handleToggleCart} >
        <BsFillCartFill size={20} className="ar-2" /> Cart
      </button> */}


     {/* Dark overlay for the cart */}
     {/* {isCartOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-screen bg-black/70 z-20"></div>
          <div
            className={`fixed top-0 right-[-400px] h-screen w-[400px] bg-white z-30 p-4 transition-transform duration-300 
              ${isCartOpen ? 'right-0' : 'right-[-400px]'}`}
          > */}
            {/* Cart component */}

            {/* <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
          </div>
        </>
      )}
       */}

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
          Best <span className="font-bold"> Robots</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                  <Link to="/" className="flex items-center">
                    <FaHome size={25} className="mr-4" /> Home
                  </Link>
                </li>

                <li className="text-xl py-4 flex">
                    <Link to="/orders" className="flex items-center">
                      <TbTruckDelivery size={25} className="mr-4" /> Orders
                    </Link>
                  </li>

            <li className="text-xl py-4 flex">
            <Link to="/favorites" className="flex items-center">
              <MdFavorite size={25} className="mr-4" /> Favorites{' '}
              </ Link>
            </li>
            {/* <li className="text-xl py-4 flex">
              {' '}
              <FaWallet size={25} className="mr-4" /> Wallet{' '}
            </li> */}

            <li className="text-xl py-4 flex">
              {' '}
              <MdHelp size={25} className="mr-4" /> Promotions{' '}
            </li>

            <li className="text-xl py-4 flex">
            <Link to="/testimonials" className="flex items-center">
              <AiFillTag size={25} className="mr-4" /> Testimonials{' '}
              </Link>
            </li>

            {/* <li className="text-xl py-4 flex">
              {' '}
              <BsFillSaveFill size={25} className="mr-4" /> Best One{' '}
            </li> */}
            
            <li className="text-xl py-4 flex flex-col">
      <span className="mb-2">Invite Friends:</span>
      <div className="flex space-x-2">
        {/* Facebook Share */}
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        {/* Twitter Share */}
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        {/* WhatsApp Share (can be used for text message on mobile) */}
        <WhatsappShareButton url={currentUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        {/* Copy to Clipboard (your existing functionality) */}
        <button onClick={copyCurrentUrlToClipboard}>
          <AiFillTag size={25} />
        </button>
      </div>
    </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
