import React from "react";
import PMTkid from '../../PMTphotos/PMT-community-1.png'
import { FaCheckCircle } from 'react-icons/fa'; 
import NashMap from '../../PMTphotos/NashMap1.png'
import teamPMT from '../../PMTphotos/PMT_community_2.png'


const AboutUs = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto block align-middle items-center px-4 py-2">
            <div className="flex align-middle items-center">
                    <img className="max-h-[400px] rounded-3xl" src={teamPMT} alt="Dumpster" />
                </div>
                <div className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                <h1 className="text-[#84BD00] text-2xl py-2 font-bold"> Your Local Nashville Subcontracting Team</h1>
<p className="text-lg pb-4">
    PMT Site is your trusted local partner for subcontracting services in Nashville. 
    Since 2019, we have proudly served our community with top-quality excavation, concrete, utilities, landscaping, and more. 
    <br></br>
    We are dedicated to ensuring satisfaction on every project we undertake.
</p>
</div>
<div className="max-w-[1240px]  flex align-middle items-center px-4 py-2">
<div className="px-4 py-4">
<p className="text-4xl font-semibold text-[#84BD00]">
    Our Commitment to Nashville
</p>
<p className="text-lg">Being a team of Nashville locals, PMT Site takes pride in serving the Middle Tennesse Community.</p>
{/* <br/>
<p className="text-xl text-[#84BD00]">
    PMT & Community Service
</p> */}</div>

                   
            
                    <img className="max-h-[400px] rounded-3xl" src={PMTkid} alt="Local_Nashville_Subcontractors" />
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

        
        </div>
    );
}

export default AboutUs;

