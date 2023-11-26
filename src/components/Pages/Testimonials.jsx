import React from 'react';

const testimonials = [
  { text: "PMT's professionalism and attention to detail on our office renovation project was outstanding. They managed every aspect seamlessly, ensuring minimal disruption to our daily operations.", author: "Nashville Tech Solutions" },
  { text: "We partnered with PMT for a major expansion of our hotel chain. Their project management skills and quality of work were exceptional, making the entire process smooth and stress-free.", author: "Grand Nashville Hotels" },
  { text: "As a growing restaurant in Nashville, we needed a reliable subcontractor for our kitchen upgrade. PMT exceeded our expectations with their efficient and high-quality service.", author: "The Southern Spoon" },
  { text: "PMT's team played a crucial role in the construction of our new retail spaces. Their expertise in managing various subcontractors and ensuring timely completion was invaluable.", author: "Music City Mall" },
  { text: "For our historic building restoration, we chose PMT. Their respect for architectural integrity and skilled craftsmanship was evident throughout the project.", author: "Nashville Heritage Foundation" },
  { text: "In the fast-paced world of event management, PMT has been our go-to for setting up complex event spaces. Their team is quick, efficient, and always delivers top-notch results.", author: "Nashville Events Co." },
  { text: "We required specialized subcontracting for our custom manufacturing facility, and PMT delivered. Their team's technical expertise and commitment to safety were impressive.", author: "Innovate Nashville Industries" },
  { text: "PMT's contribution to our residential development projects has been phenomenal. Their ability to coordinate multiple trades and maintain high standards is exactly what we needed.", author: "Cumberland Homes" },
  { text: "As a healthcare provider, we needed a subcontractor who could navigate the complexities of medical facility upgrades. PMT's team was knowledgeable, compliant, and highly professional.", author: "Nashville Health Network" }
  // Add more testimonials as needed
];

  

const TestimonialsPage = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-[#001489] font-bold text-4xl text-center'>Customer Testimonials</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-4'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300'
          >
            <div className='p-4'>
              <p className='font-bold text-lg mb-2'>" {testimonial.text} "</p>
              <p className='font-bold text-gray-700'>- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage;
