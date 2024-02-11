import React, { useState, useEffect } from "react";
import DumpsterImage from '../PMTphotos/alphabet-word-images-1293460_1920.png';
import stock2 from '../images/Screenshot 2024-01-26 at 1.23.22 PM.png'
import NashMap from '../PMTphotos/NashMap1.png';
import { FaCheckCircle } from 'react-icons/fa';
import Slider from "react-slick"; // Import the Slider component
import Basketball from "../images/basketball.jpeg"
import Barrels from "../images/IMG_2080.jpeg"
import Tractor from '../images/Screenshot 2024-02-10 at 1.43.36 AM.png';
import Contractor from '../images/stockContractor-transformed.jpeg';
import Contractor2 from '../images/stockContractor2-transformed.jpeg';
import Snowman from '../images/snowman2.png';


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

    const handleContactUs = () => {
        const newsletterRef = document.querySelector(".newsletter-section");
        if (newsletterRef) {
            newsletterRef.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
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
                    <h1 className="text-[#84BD00] text-xl font-bold">PMT Site</h1>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Your Expert Subcontracting Partner in Middle Tennessee
                    </h2>
                    <p className="text-xl">
                        Founded in 2019, we specialize in providing high-quality subcontracting services to a wide range of clients in the greater Nashville area. Our experienced team is committed to delivering exceptional results on every project we take on.
                    </p>
                    <p className="text-[#84BD00] text-lg">
                        Contact us today to learn more about how we can help you with your project.
                    </p>
                    <button
                        onClick={handleContactUs}
                        className="bg-[#84BD00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white active:bg-[#001489] hover:bg-[#c1e867]"
                    >
                        Contact Us
                    </button>
                </div>
                <div className={`animation-container ${animationClasses(isVisible)}`}>
                    {/* Carousel integration starts here */}
                    <Slider {...settings}>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={stock2} alt="Dumpster" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Basketball} alt="Dumpster" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={stock2} alt="Dumpster" />
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
                            <img className="max-h-[400px] w-full rounded-3xl" src={Barrels} alt="Dumpster" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Contractor} alt="Contractor" />
                        </div>
                        <div>
                            <img className="max-h-[400px] w-full rounded-3xl" src={Contractor2} alt="Contractors" />
                        </div>
                    </Slider>
                    <h4 className="py-8 text-center md:text-xl sm:text-xl text-xl justify-center font-semibold">
                        <span className="text-[#84BD00]">PMT Subcontracting:  </span>
                        Providing exceptional subcontracting services to the greater Nashville area, built on trust, integrity, and a commitment to quality.
                    </h4>
                </div>
                <div className={`animation-container px-2 py-2 ${animationClasses(isVisible)}`}>
                    <h2 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Our Comprehensive Subcontracting Services
                    </h2>
                    <div className="flex flex-wrap justify-center py-4">
                        <ul className="py-2 px-2 font-semibold text-lg grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-[#84BD00]">
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Excavation and Site Preparation</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Concrete Foundations and Slabs</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Public and Private Utilities</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Public and Private Water/ Fire Water Supply</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Stormwater and Sanitary Sewer</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <FaCheckCircle className="mr-2 text-4xl" />
                                <span>Site Development and Landscaping</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 3rd column */}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 pb-2">
                <img className="max-h-[400px] rounded-3xl" src={Snowman} alt="Snow Man" />
                <div className={`animation-container col-span-4 flex ${animationClasses(isVisible)}`}>
                    <div className="col-span-2 px-8">
                        <p className="text-2xl font-semibold pb-6"> Why Choose PMT Site for Your Nashville Project?</p>
                        <div className="flex flex-col justify-center text-lg">
                            {/* <p className="text-2xl text-[#84BD00]">
                                Why Choose PMT Site for Your Nashville Project?
                            </p> */}
                            <ul className="py-2 px-2 font-light list-disc list-inside pl-4 text-gray-500">
                                <li><span className="font-bold text-black">Nashville-based: <br/></span>We know the local landscape and building codes inside-out.</li>
                                <li><span className="font-bold text-black">Experienced & Expert: <br/></span>Our team consists of seasoned professionals with proven success.</li>
                                <li><span className="font-bold text-black">Comprehensive Services: <br/></span>We handle all your subcontracting needs, from excavation to final touches.</li>
                                <li><span className="font-bold text-black">Unwavering Safety: </span><br/>We prioritize worker and public safety on every project.</li>
                                <li><span className="font-bold text-black">Dedicated Customer Service: </span><br/>You'll always have a point of contact and clear communication.</li>
                                <li><span className="font-bold text-black">Competitive & Transparent Pricing: </span><br/>No hidden fees, just upfront quotes you can trust.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DumpsterRentalCompany;
