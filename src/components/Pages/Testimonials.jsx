import React from 'react';

const testimonials = [
    { text: "I love my Roomba! It's incredible how it navigates around my house and keeps everything clean. My floors have never looked better.", author: "Samantha" },
    { text: "The customer service team here is fantastic. I had some questions about the different robots available, and they were so patient and helpful in guiding me to the right choice. The robot I got has become a valuable addition to my home.", author: "Alex" },
    { text: "I can't believe how advanced these robots are. The way they interact with us and their surroundings is mind-blowing. My kids are fascinated, and I'm amazed by the technology behind these products.", author: "Daniel" },
    { text: "This website is a game changer. The variety of robots available is impressive, and the quality of the products is top-notch. I've recommended this site to all my friends.", author: "Emily" },
    { text: "I ordered a robot for my elderly parents, and it has brought them so much joy and companionship. It's like having a new member of the family. Thank you for offering such thoughtful products.", author: "Grace" },
    { text: "As a tech enthusiast, I'm always on the lookout for innovative gadgets. These robots exceeded my expectations. They're not only functional but also aesthetically pleasing. They're like pieces of art!", author: "Ethan" },
    { text: "I've been a loyal customer for years, and I've never been disappointed. The products are high-quality, and the shopping experience is seamless. Keep up the great work!", author: "Olivia" },
    { text: "My kids are absolutely obsessed with the toy robots I got them from here. They provide hours of entertainment and even have educational features. It's a win-win for both parents and kids!", author: "Sophia" },
    { text: "These robots have made my life so much easier. From cleaning to entertainment, they do it all. I can't imagine my home without them now.", author: "Benjamin" }
    // Add more testimonials as needed
  ];
  

const TestimonialsPage = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Customer Testimonials</h1>

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
