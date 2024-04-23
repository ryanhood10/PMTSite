import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import houseIcon from "../../images/IMG_1465.jpeg";
import shovelIcon from "../../images/IMG_1860.jpeg";

const ServicesPage = () => {
  const services = [
    "Excavation and Site Preparation",
    "Concrete Foundations and Slabs",
    "Public and Private Utilities",
    "Public and Private Water/Fire Water Supply",
    "Stormwater and Sanitary Sewer",
    "Site Development and Landscaping",
  ];

  const serviceDescriptions = {
    "Excavation and Site Preparation":
      "We handle all aspects of preparing your construction site, from initial planning and demolition to earthwork, grading, and erosion control.",
    "Concrete Foundations and Slabs":
      "Our team of experts can handle all your concrete foundation and slab needs, ensuring a strong and stable base for your construction project.",
    "Public and Private Utilities":
      "PMT Site is experienced in installing and maintaining a wide range of public and private utilities, ensuring your project has the necessary infrastructure.",
    "Public and Private Water/Fire Water Supply":
      "We provide reliable installation and maintenance services for public and private water and fire water supply lines.",
    "Stormwater and Sanitary Sewer":
      "Our team is equipped to handle all aspects of stormwater and sanitary sewer systems, ensuring proper drainage and waste disposal.",
    "Site Development and Landscaping":
      "From grading and drainage to planting and hardscaping, PMT Site can transform your construction site into a beautiful and functional space.",
  };

  return (
    <div className="w-full bg-white py-2 px-4">
      <div className="max-w-[1240px] mx-auto pt-2 pb-28 space-x-4 flex flex-col md:flex-row md:items-center">
        <div className="w-full md:w-1/2">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Our Nashville Subcontracting Services
          </h2>
          <p className="text-lg pb-4">
            PMT Site offers a comprehensive range of subcontracting services designed to meet the diverse needs of our clients in the greater Nashville area.
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
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              className="w-full rounded-3xl object-cover"
              src={houseIcon}
              alt="House foundation construction"
            />
            <img className="w-full rounded-3xl object-cover" src={shovelIcon} alt="Excavation work" />
          </div>
        </div>
      </div>

      {/* Individual service description sections (optional) */}
      {services.map((service) => (
        <div key={service} className="max-w-[1240px] mx-auto pt-8 pb-16 border-t border-gray-300">
          <h3 className="text-2xl font-bold py-2">{service}</h3>
          <p className="text-lg pb-4">{serviceDescriptions[service]}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
