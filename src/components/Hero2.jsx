import React from 'react';
import stock1 from '../PMTphotos/subcontractorStock-transformed.png';

const Hero2 = () => {
    return (
        <div className="w-full mx-auto p-4">
            <div className=' relative rounded-xl overflow-hidden md:max-h-[650px] lg:max-h-[800px]'>
                {/* overlay */}
                <div className='absolute w-full h-full flex flex-col pb-16 sm:pb-8 justify-between text-gray-200 bg-gradient-to-b from-black/40 to-black/10 rounded-xl'>
                    <div className='pt-8'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-8xl lg:8xl font-bold'>Your <span className='text-[#001489]'>Trusted</span></h1>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-8xl lg:8xl font-bold'>Source for <span className='text-[#84BD00]'>Subcontracting</span></h1>
                        <br></br>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 pb-4  px-4 text-center space-y-2'>
                    <div className='bg-[rgba(253,253,252,0.78)] rounded-full'>
                            <h2 className="text-xl text-black md:text-[#001489] pt-4 px-8 font-bold mb-2">Find Experienced Subcontractors</h2>
                            <p className=" hidden md:block text-lg text-[#001489] pb-4 px-4 font-semibold mb-2" >Discover top-rated subcontractors specializing in construction and housing projects.</p>
                        </div>
                        <div className='bg-[rgba(253,253,252,0.78)] rounded-full'>
                                <h2 className="text-xl text-black md:text-[#001489] pt-4 px-8 font-bold mb-2">Streamline Your Construction</h2>
                                <p className="hidden md:block text-lg text-[#001489] pb-4 px-4 font-semibold mb-2">Leverage our network of experienced subcontractors to efficiently manage your construction timeline.</p>
                            </div>
                        <div className='bg-[rgba(253,253,252,0.78)] rounded-full'>
                            <h2 className="text-xl text-black md:text-[#001489] pt-4 px-8 font-bold mb-2">Hire Reliable and Licensed Contractors</h2>
                            <p className=" hidden md:block text-lg text-[#001489] pb-4 px-4 font-semibold mb-2" >Connect with pre-screened, licensed subcontractors for your housing projects.</p>
                        </div>
                        

                    </div>
                </div>
                <div className="h-[85%]">
                    <img className='w-full h-full object-cover rounded-xl' src={stock1} alt="robot1" />
                </div>
            </div>
        </div>
    );
}



export default Hero2;
