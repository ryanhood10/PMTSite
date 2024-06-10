import React, { useState, useEffect } from "react";
// import DumpsterImage from '../PMTphotos/alphabet-word-images-1293460_1920.png';
import stock2 from '../images/Screenshot 2024-01-26 at 1.23.22 PM.png'
// import NashMap from '../PMTphotos/NashMap1.png';
import { FaCheckCircle } from 'react-icons/fa';
import Slider from "react-slick"; // Import the Slider component
import Basketball from "../images/basketball.jpeg"
import Barrels from "../images/IMG_2080.webp"
// import Tractor from '../images/Screenshot 2024-02-10 at 1.43.36 AM.png';
import Contractor from '../images/stockContractor-transformed.jpeg';
import Contractor2 from '../images/stockContractor2-transformed.webp';
import Team from '../images/PMTMeeting.webp';
import { Link } from 'react-router-dom';
import Shell1 from '../images/Shell4.webp'

// carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DumpsterRentalCompany = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        const divRef = document.querySelector(".animation-container");

        if (divRef) {
            observer.observe(divRef);
        }

        return () => {
            if (divRef) {
                observer.unobserve(divRef);
            }
        };
    }, []);

    const animationClasses = (isVisible) =>
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    // const handleContactUs = () => {
    //     const newsletterRef = document.querySelector(".newsletter-section");
    //     if (newsletterRef) {
    //         newsletterRef.scrollIntoView({
    //             behavior: "smooth",
    //         });
    //     }
    // };
   // Settings for the slider
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
};


    return (
        <div className="w-full bg-white py-16 px-4">
            {/* first column */}
            <div className="w-full py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className={`animation-container ${animationClasses(isVisible)}`}>
  <h1 className="text-[#84BD00] text-xl font-bold">
    Nashville Subcontracting Services | PMT Site
  </h1>
  <p className="text-lg">
    Founded in 2019, PMT Site is your reliable subcontracting partner 
    in Middle Tennessee. We strive to bring you the best results, based off of our 3 principles:
    

  <br></br>
<span className="font-bold">SITE-</span> Every site is unique and comes with its own challenges, PMT us here to attack those challenges with you.
    <br></br>
    <span className="font-bold">SERVICE-</span> Our experienced team is committed to 
    clear communication and delivering exceptional results on every 
    project we take on.
<br></br>
<span className="font-bold">COMPLETION-</span> We are by your side from start to finish ensuring a quality and operational product.</p>

  <p className="text-[#84BD00] text-lg">
    Contact us today to learn more about how we can help you with your project.
  </p>
  <Link to="/Contact">
    <button 
      className="bg-[#84BD00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white active:bg-[#001489] hover:bg-[#c1e867]"
    >
      Get a Free Quote
    </button>
  </Link>
  {/* Add an image here (consider using a relevant image component) */}
</div>

                <div className={`animation-container ${animationClasses(isVisible)}`}>
                    {/* Carousel integration starts here */}
                    <Slider {...settings}>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={stock2} alt="BNA-airport-site-work" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Basketball} alt="0ur-team" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Shell1} alt="Nashville-shell-site" />
                        </div>
                    </Slider>
                </div>
            </div>
            {/* second column */}
            <div className="max-w-[1240px] mx-auto pt-2 pb-28 space-x-4 grid md:grid-cols-2">
                <div className={`animation-container  ${animationClasses(isVisible)}`}>
                    {/* Carousel integration starts here */}
                    <Slider {...settings}>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Barrels} alt="middletn-site-preparation" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Contractor} alt="pavement-work-middletn" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Contractor2} alt="site-prep-nashville" />
                        </div>
                    </Slider>
                    <h4 className="py-8 text-center md:text-xl sm:text-xl text-xl justify-center font-semibold">
                        <span className="text-[#001489]]">PMT Site:  </span>
                        Your trusted Middle Tennessee Subcontractor for all your site development needs.
                    </h4>
                </div>
                <div className={`animation-container px-2 py-2 ${animationClasses(isVisible)}`}>
                    <h2 className="text-center md:text-xl sm:text-2xl text-xl font-bold py-2">
                        <span className="text-[#001489] text-2xl">Trusted Nashville Subcontracting Services: </span>
                        <br></br>
                        <br></br>
                        Excavation, Concrete, Utilities & More!
                        <br></br>
                    </h2>
                    <div className="flex flex-wrap justify-center py-4">
                        <ul className="py-2 px-2 font-semibold text-lg grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-[#001489]">
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Excavation and Site Preparation</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Grading and Concrete Flatwork</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Sanitary Sewer Installation</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Public and Private Water Water Set-Up</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Stormwater Piping and Infastructure</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Site Development and Erosion Control</span>
                            </li>
                        </ul>
                        <Link to="/Contact">
                        <button 
                          className="bg-[#84BD00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white active:bg-[#001489] hover:bg-[#c1e867]"
                        >
                          Get a Free Quote
                        </button>
                      </Link>
                    </div>
                    
                </div>
            </div>
            {/* 3rd column */}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 pb-2">
  <img className="rounded-3xl" src={Team} alt="Satisfied Customer with PMT Site" />
  <div className={`animation-container col-span-4 flex ${animationClasses(isVisible)}`}>
    <div className="col-span-2 space-x-8 px-8">
      <h2 className="text-2xl text-[#001489] font-bold ">
        Why Choose PMT Site: Your Top Nashville Subcontractor
      </h2>
      <div className="flex flex-col justify-center text-lg">
        <ul className="py-2 px-2 font-light list-disc list-inside pl-4 text-gray-500">
          <li>
            <span className="font-bold text-black">
              Nashville Subcontracting Expertise
            </span>
            <br />
            We have in-depth knowledge of the Nashville landscape and building codes, ensuring a smooth project experience.
          </li>
          <li>
            <span className="font-bold text-black">Experienced & Expert </span>
            <br />
            Our team consists of seasoned professionals with proven success.
          </li>
          <li>
            <span className="font-bold text-black">Comprehensive Services </span>
            <br />
            We handle all your subcontracting needs, from excavation to final touches. Visit our <a className="font-bold text-blue-400 hover:text-blue-600" href="/Services">Services</a> page to learn more.
          </li>
          <li>
            <span className="font-bold text-black">Unwavering Safety </span>
            <br />
            We prioritize worker and public safety on every project.
          </li>
          <li>
            <span className="font-bold text-black">Dedicated Customer Service: </span>
            <br />
            You'll always have a point of contact and clear communication.
          </li>
          <li>
            <span className="font-bold text-black">Competitive & Transparent Pricing: </span>
            <br />
            No hidden fees, just upfront quotes you can trust.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


        </div>
    );
}

export default DumpsterRentalCompany;
