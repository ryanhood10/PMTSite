import React from 'react';
import TDOTbanner from '../images/TDOT Banner.png';
import { FaCheckCircle } from 'react-icons/fa';

function TNBanner() {
  return (
    <div className="hidden lg:flex w-full mx-auto p-4 relative">
      {/* overlay */}
      <div className="absolute inset-0 text-black bg-black/10 rounded-2xl flex flex-col justify-center">
        <div className="flex justify-end">
          <div className="sm:text-2xl md:text-3xl lg:text-5xl w-2/3 space-y-6">
            <div className="flex items-center">
              <FaCheckCircle className="mr-2 text-4xl" />
              <h1 className="px-4 text-xl font-bold">
                Registered TDOT Contractor
              </h1>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="mr-2 text-4xl" />
              <h1 className="px-4 text-xl font-bold">
                Registered Metro Contractor
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img className="max-h-[100px]" src={TDOTbanner} alt="robot1" />
    </div>
  );
}

export default TNBanner;
