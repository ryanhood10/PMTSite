import React from 'react';
import robot2 from '../images/ryanh5800_robot_current_day_bd7addf9-7568-48cf-b261-27977247aeb6.png';
import robot3 from '../images/ryanh5800_robot_current_day_9e083e76-b13d-4a6c-b01e-a6199c16fb10.png';
import react1 from '../images/ryanh5800_React_icon_programming_68468fde-6f40-4320-8555-184738340d8c.png';
import { useNavigate } from 'react-router-dom';


const HeadlineCards = () => {

    const navigate = useNavigate();

    const handleViewTestimonials = () => {
      navigate('/testimonials');
    };

    
  const scrollToRobots = () => {
    // Scroll to the target element in a different component
    const targetElement = document.getElementById('robotsComponent');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='mx-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card 1 */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>See Customer</p>
          <p className='px-2'>Testimonials</p>
          <button href='/Testimonials' className='border-white bg-white text-black mx-2 absolute bottom-4' onClick={handleViewTestimonials}>View Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={robot2} alt='robot2' />
      </div>

      {/* Card 2 */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Premium Robots</p>
          <p className='px-2'>Great Prices</p>
          <button onClick={scrollToRobots} className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={robot3} alt='robot2' />
      </div>

      {/* Card 3 */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Premium Software</p>
          <p className='px-2'>For Functional Robots</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={react1} alt='robot2' />
      </div>
    </div>
  );
}

export default HeadlineCards;
