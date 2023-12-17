import React from 'react'
import PMTfooter from '../PMTphotos/PMTfooter.png';



const Hero = () => {
    return (
        <div className="w-full mx-auto p-4">
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-white/10 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >PMT Site</h1>
                    <h1 className='px-4 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl' >  Nashville SubContracting</h1>
                </div>
                    <img className='w-full max-h-[500px] object-cover' src={PMTfooter}  alt="robot1" />
            </div>
        </div>
    )
}

export default Hero