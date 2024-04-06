import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon from react-icons

const ContactCards = () => {
   

    const contacts = [
      {
        name: "Phil Terhaar",
        title: "Estimating and Project Management ",
        email: "pterhaar@pmtsite.com"
      },
      {
        name: "Craiger Eshleman",
        title: "Sales, Marketing and HR",
        email: "ceshleman@pmtsite.com"
      },
      {
        name: "Brett Alfrey",
        title: "Finance and Accounting",
        email: "balfrey@pmtsite.com"
      }
    ];

    return (
      <div >
      <h1  className='text-center text-3xl font-semibold text-[#001489]'> Contact Information </h1>
      <div className='mx-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {contacts.map((contact, index) => (
          <div key={index} className='rounded-xl relative hover:scale-105 duration-300 border-2 border-black shadow-md bg-gray-200'>
            <div className='absolute top-4 right-4'>
              <FaUserCircle size={50} /> {/* Profile Icon */}
            </div>
            <div className='p-4 text-black'>
              <h3 className='font-bold text-xl'>{contact.name}</h3>
              <p className='text-md'>{contact.title}</p>
              <p className='text-md'>{contact.phone}</p>
              <a href={`mailto:${contact.email}`} className='text-md text-blue-600 font-semibold hover:font-bold '>{contact.email}</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
}

export default ContactCards;
