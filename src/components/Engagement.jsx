import React, { useRef, useState, useEffect } from "react";
import DumpsterImage from '../PMTphotos/alphabet-word-images-1293460_1920.png';
import stock2 from '../PMTphotos/dialogue-window-148174_1280.png'
import NashMap from '../PMTphotos/NashMap1.png';
import { useNavigate } from 'react-router-dom';

const DumpsterRentalCompany = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

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

    return (
        <div className="w-full  bg-white py-16 px-4">

            {/* first column */}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 pb-2">

                <div className={`animation-container ${animationClasses(isVisible)}`}>
          <h1 className="text-[#84BD00] text-xl font-bold">PMT Site</h1>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Your Expert Subcontracting Partner in Hermitage, TN
          </h2>
          <p className="text-xl">
            PMT Site is a leading subcontracting company in Hermitage,
            TN, founded in 2019. We specialize in providing high-quality
            subcontracting services to a wide range of clients in the greater
            Nashville area. Our experienced team is committed to delivering
            exceptional results on every project we undertake.
          </p>
          <p className="text-[#84BD00] text-lg">
            Contact us today to learn more about how we can help you with your
            project.
          </p>
          <button
            onClick={handleContactUs}
            className="bg-[#84BD00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white active:bg-[#001489] hover:bg-[#c1e867]"
          >
            Contact Us
          </button>
        </div>

        <div className={`animation-container ${animationClasses(isVisible)}`}>
                    <img className="max-h-[400px]  rounded-3xl" src={stock2} alt="Dumpster" />
                    
                </div>

              
            </div>

                        {/* second column */}
            <div className="max-w-[1240px] mx-auto pt-2 pb-28 space-x-4 grid md:grid-cols-2">

            <div className={`animation-container  ${animationClasses(isVisible)}`}>
                    
                    <div className="flex space-y-2">
                        <img className="w-full rounded-3xl" src={NashMap} alt="Dumpster" />
                    </div>
                    <h4 className="text-center md:text-xl sm:text-xl text-xl justify-center font-semibold">PMT Subcontracting: Providing exceptional subcontracting services to the greater Nashville area, built on trust, integrity, and a commitment to quality.</h4>

                </div>

        <div className={`animation-container ${animationClasses(isVisible)}`}>
          <h2 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Our Comprehensive Subcontracting Services
          </h2>
          <p className="text-center md:text-xl sm:text-xl text-xl justify-center font-semibold">
            PMT Subcontracting offers a comprehensive range of subcontracting
            services to meet the diverse needs of our clients, including:
          </p>
          <div className="flex flex-wrap justify-center py-4">
            <ul className="font-semibold text-2xl grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-green-700">
              <li className="flex items-center">
                <span className="mr-2">Excavation and Site Preparation</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Concrete Foundations and Slabs</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Framing and Carpentry</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Roofing and Siding</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Finishing and Interior Trim</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Mechanical and Electrical Systems</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Custom Millwork and Cabinetry</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Site Development and Landscaping</span>
              </li>
                            
                        </ul>
                    </div>
                </div>

                

            </div>

                                    {/* 3rd column */}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 pb-2">
            <img className="max-h-[400px] rounded-3xl" src={DumpsterImage} alt="Dumpster" />

            <div className={`animation-container col-span-4 flex ${animationClasses(isVisible)}`}>
                

                    <div class="col-span-2">
                    <p class="text-2xl font-semibold pb-6">"We're Not Just Stepping Up to the Plate, We're Climbing the Ladder"</p>
                        <div class="flex flex-col justify-center text-lg">
                            <p class="text-lg font-bold">Why choose PMT site for your subcontracting job?</p>
                            <ul class="list-disc list-inside pl-6 mt-2">
                            <li class="mb-2">Unparalleled Experience and Expertise</li>
                            <li class="mb-2">Comprehensive Subcontracting Solutions</li>
                            <li class="mb-2">Unwavering Commitment to Safety</li>
                            <li class="mb-2">Dedicated Customer Service</li>
                            <li class="mb-2">Competitive and Transparent Pricing</li>
                            </ul>
                        </div>
                    </div>
            </div>

            </div>

         
        </div>
    )
}

export default DumpsterRentalCompany;
