import React, { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaHome, FaBriefcase, FaUsers, FaEnvelope } from 'react-icons/fa';
import { MdHelp } from 'react-icons/md';
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

  // URL for sharing
  const currentUrl = window.location.href;

  // Copying the URL to clipboard to invite friends
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
        <Link to="/">
          <img src={PMTsiteLogo} alt="PMTsiteLogo" className="h-16" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-4">
        <Link className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium" to="/">
          Home
        </Link>
        <Link className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium" to="/services">
          Services
        </Link>
        <Link className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium" to="/AboutUs">
          About Us
        </Link>
        <Link className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium" to="/JoinOurTeam">
          Join Our Team
        </Link>
        <Link className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium" to="/Contact">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex justify-center items-center space-x-16 pr-4 md:hidden">
        <Link to="/Contact">
          <button className="bg-[#001489] text-white font-bold text-2xl hidden md:flex items-center py-2 px-4 justify-center rounded-full">
            Contact Us
          </button>
        </Link>
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>}

      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
        <h2 className="text-2xl p-4 ">
          PMT <span className="font-bold"> Site</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <Link to="/" className="flex items-center" onClick={() => setNav(false)}>
                <FaHome size={25} className="mr-4" /> Home
              </Link>
            </li>
            <li className="text-xl py-4 flex">
              <Link to="/services" className="flex items-center" onClick={() => setNav(false)}>
                <TbTruckDelivery size={25} className="mr-4" /> Services
              </Link>
            </li>
            <li className="text-xl py-4 flex">
              <Link to="/AboutUs" className="flex items-center" onClick={() => setNav(false)}>
                <MdHelp size={25} className="mr-4" /> About Us
              </Link>
            </li>
            <li className="text-xl py-4 flex">
              <Link to="/JoinOurTeam" className="flex items-center" onClick={() => setNav(false)}>
                <FaBriefcase size={25} className="mr-4" /> Join Our Team
              </Link>
            </li>
            <li className="text-xl py-4 flex">
              <Link to="/NuestroEquipo" className="flex items-center" onClick={() => setNav(false)}>
                <FaUsers size={25} className="mr-4" /> Nuestro Equipo
              </Link>
            </li>
            <li className="text-xl py-4 flex">
              <Link to="/Contact" className="flex items-center" onClick={() => setNav(false)}>
                <FaEnvelope size={25} className="mr-4" /> Contact Us
              </Link>
            </li>
            <li className="text-xl py-4 flex flex-col">
              <span className="mb-2">Share PMT site on your social:</span>
              <div className="flex space-x-2">
                <FacebookShareButton id="facebook-button" url={currentUrl}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton id="twitter-button" url={currentUrl}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton id="whatsapp-button" url={currentUrl}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <button id="copy-link-button" onClick={copyCurrentUrlToClipboard}>
                  <AiFillTag size={25} />
                </button>
              </div>
            </li>
          </ul>
          <div className="absolute font-sans bottom-16 w-full">
            <div className="w-full flex lg:hidden p-4 relative">
              <div className="absolute inset-0 text-black rounded-2xl flex flex-col justify-center">
                <div className="flex justify-end pl-10">
                  <div className="text-[#001489] py-8 pb-16 px-4 text-md w-2/3 space-y-2">
                    <div className="flex items-end">
                      <FaCheckCircle className="mr-2 text-4xl" />
                      <h1 className="px-4 font-bold">Registered TDOT Contractor</h1>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="mr-2 text-4xl" />
                      <h1 className="px-4 font-bold">Registered Metro Contractor</h1>
                    </div>
                  </div>
                </div>
              </div>
              <img className="max-h-[100px] " src={TDOTBanner} alt="robot1" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
