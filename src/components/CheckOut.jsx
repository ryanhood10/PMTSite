import React from 'react';
import { data } from '../data/data';
import { ShoppingCartIcon } from '@heroicons/react/solid';


const CheckOut = ({ cartItems, onClose }) => {
  return (
    <div className='fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 transform'>
      {/* Checkout content */}
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>Check Out</h2>
        {/* Display cart items here */}
        {cartItems.map((item) => {
          // Find the corresponding item from 'data' based on the 'item.name'
          const correspondingItem = data.find((product) => product.name === item.name);

          return (
            <div key={item.id} className='border p-2 mb-2 flex justify-between items-center'>
              <div className="flex items-center">
                <img
                  src={correspondingItem.image} // Use the actual image URL from 'data'
                  alt={item.name}
                  className="w-8 h-8 mr-2" // Adjust size as needed
                />
                {item.name} - {item.price}
              </div>
            </div>
          );
        })}
      </div>

      {/* Close Button */}
      <button
        className='absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none'
        onClick={onClose}
      >
        Close
      </button>

      {/* Check Out Button */}
      <button
        className='bg-green-500 text-white px-4 py-2 rounded-full mt-4'
        // onClick={onClose} // Close the CheckOut component using the same button
      >
         <ShoppingCartIcon className='h-5 w-5' />
        Check Out
      </button>
    </div>
  );
};

export default CheckOut;
