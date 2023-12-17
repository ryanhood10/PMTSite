import React from "react";
import DumpsterImage from '../../PMTphotos/PMT-community-1.png'
import { FaCheckCircle } from 'react-icons/fa'; 
import NashMap from '../../PMTphotos/NashMap1.png'

const AboutUs = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 pb-2">
                <div className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    <h1 className="text-[#84BD00] text-xl font-bold">About PMT Site: Nashville Subcontracting Experts</h1>
                    <p className="text-lg pb-4">
                        Searching for reliable subcontracting services in Nashville? Look no further than PMT Site! We're your trusted partner for top-notch excavation, concrete, utilities, landscaping, and more. Since 2019, we've built a reputation for excellence, safety, and exceeding client expectations on every project.
                    </p>
                    <p className="text-2x text-[#84BD00]">
                        Why Choose PMT Site for Your Nashville Project?
                    </p>
                    <ul className="py-2 px-2 font-thin list-disc list-inside pl-4 text-gray-500">
                        <li><span className="font-bold text-black">Nashville-based: <br/></span>We know the local landscape and building codes inside-out.</li>
                        <li><span className="font-bold text-black"> Experienced & Expert: <br/></span>Our team boasts seasoned professionals with proven success.</li>
                        <li><span className="font-bold text-black">EComprehensive Services: <br/></span>We handle all your subcontracting needs, from excavation to final touches.</li>
                        <li><span className="font-bold text-black">EUnwavering Safety: </span><br/>We prioritize worker and public safety on every project.</li>
                        <li><span className="font-bold text-black">EDedicated Customer Service: </span><br/>You'll always have a point of contact and clear communication.</li>
                        <li><span className="font-bold text-black">ECompetitive & Transparent Pricing: </span><br/>No hidden fees, just upfront quotes you can trust.</li>
                    </ul>
                </div>
                <div>
                    <img className="max-h-[400px] rounded-3xl" src={DumpsterImage} alt="Dumpster" />
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto pt-2 pb-28 space-x-4 grid md:grid-cols-2">
                <div>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Our Nashville Subcontracting Services
                    </h2>
                    <p>
                        PMT Site offers a comprehensive range of subcontracting services designed to meet the diverse needs of our clients in the greater Nashville area. Our services include:
                    </p>
                    <ul className="py-2 px-2 font-semibold text-lg grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-[#84BD00]">
                        <li className="flex space-x-2 items-center">
                            <FaCheckCircle className="mr-2 text-4xl" />
                            Excavation and Site Preparation
                        </li>
                        <li className="flex space-x-2 items-center">
                            <FaCheckCircle className="mr-2 text-4xl" />
                            Concrete Foundations and Slabs
                        </li>
                        <li className="flex space-x-2 items-center">
                            <FaCheckCircle className="mr-2 text-4xl" />
                            Public and Private Utilities
                        </li>
                        <li className="flex space-x-2 items-center">
                            <FaCheckCircle className="mr-2 text-4xl" />
                            Public and Private Water/Fire Water Supply
                        </li>
                        <li className="flex space-x-2 items-center">
                            <FaCheckCircle className="mr-2 text-4xl" />
                            Stormwater and Sanitary Sewer
                        </li>
                        <li className="flex space-x-2 items-center">
                            <FaCheckCircle className="mr-2 text-4xl" />
                            Site Development and Landscaping
                        </li>
                    </ul>
                </div>
                <div>
                    <img className="w-full rounded-3xl" src={NashMap} alt="Nashville Map" />
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 pb-2">
                <img className="max-h-[400px] rounded-3xl" src={DumpsterImage} alt="Dumpster" />
                <div className="col-span-4 flex">
                    <div className="col-span-2">
                        <p className="text-2xl font-semibold pb-6">
                            "We're Not Just Stepping Up to the Plate, We're Climbing the Ladder"
                        </p>
                        <div className="flex flex-col justify-center text-lg">
                            <p className="text-lg font-bold">Beyond Subcontracting: Additional Services</p>
                            <ul className="list-disc list-inside pl-6 mt-2 text-[#84BD00]">
                                <li>Electrical Services: Lighting, power, and electrical system expertise.</li>
                                <li>Plumbing & HVAC Services: Keeping your buildings comfortable and functional.</li>
                                <li>Carpentry Services: From framing to finish carpentry, we handle it all.</li>
                                <li>Project Management: We oversee every detail so you can focus on the big picture.</li>
                                <li>General Contracting: We can be your one-stop shop for all your construction needs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;