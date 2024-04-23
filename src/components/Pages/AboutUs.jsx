import React from "react";
import PMTkid from "../../PMTphotos/PMT-community-1.png";
import { FaCheckCircle } from "react-icons/fa";
import NashMap from "../../PMTphotos/NashMap1.png";
import teamPMT from "../../PMTphotos/PMT_community_2.png";

const HeroSection = ({ title }) => (
  <div className="max-w-[1240px] mx-auto block align-middle items-center px-4 py-2">
    <div className="w-full flex justify-center items-center">
      <img className="max-h-[400px] pb-2 rounded-3xl" src={teamPMT} alt="PMT Site Team" />
    </div>
    <div className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
      <h1 className="text-[#84BD00] text-2xl py-2 font-bold">{title}</h1>
      <p className="text-lg pb-4">
        PMT Site is your trusted local partner for subcontracting services in Nashville.
        Since 2019, we have proudly served our community with top-quality excavation,
        concrete, utilities, landscaping, and more.
        <br />
        We are dedicated to ensuring satisfaction on every project we undertake.
      </p>
    </div>
  </div>
);

const AboutUsSection = ({ content, imageUrl, imageAlt }) => (
  <div className="max-w-[1240px] mx-auto pt-2 pb-28 space-x-4 grid md:grid-cols-2">
    <div>
      <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Our Commitment to Nashville</h2>
      <p className="text-lg font-semibold">{content}</p>
    </div>
    <div>
      <img className="max-h-[400px] max-w-[400px] w-full rounded-3xl" src={imageUrl} alt={imageAlt} />
    </div>
  </div>
);

const ServicesSection = ({ title, services }) => (
  <div className="max-w-[1240px] mx-auto pt-2 pb-28 space-x-4 grid md:grid-cols-2">
    <div>
      <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">{title}</h2>
      <p> 
       We handle all aspects of preparing your construction site, from initial planning to final grading. Our services include:
      </p>
      <ul className="py-2 px-2 font-semibold text-lg grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-[#84BD00]">
        {services.map((service) => (
          <li key={service} className="flex space-x-2 items-center">
            <FaCheckCircle className="mr-2 text-4xl" />
            {service}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <img className="w-full rounded-3xl" src={NashMap} alt="Nashville Map" />
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div className="w-full bg-white py-2 px-4">
      <HeroSection title="Your Local Nashville Subcontracting Team" />
      <AboutUsSection
        content="Since 2019, PMT Site has been a proud member of the Nashville community, 
        providing exceptional subcontracting services for Tennesseeans. Being a team of Nashville locals, PMT Site takes pride in serving the Middle Tennessee Community."
        imageUrl={PMTkid}
        imageAlt="PMT Site serving Nashville community"
      />
      <ServicesSection
        title="Our Nashville Subcontracting Services"
        services={[
          "Excavation and Site Preparation",
          "Concrete Foundations and Slabs",
          "Public and Private Utilities",
          "Public and Private Water/Fire Water Supply",
          "Stormwater and Sanitary Sewer",
          "Site Development and Landscaping",
        ]}
      />
    </div>
  );
};

export default AboutUs;
