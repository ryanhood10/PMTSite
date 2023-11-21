import React, { useState } from 'react';
import {data} from '../data/data';
import { useNavigate } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';




const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
//   const [checkoutVisible, setCheckoutVisible] = useState(false); // Add this state


  const navigate = useNavigate();

    const handleGoToCheckout = () => {
        // console.log('Cart Items:', cartItems); // Add this line to check the cart items before navigating
        navigate('/CheckOut', { state: { cartItems: cartItems } });
        };

  const handleRemoveClick = (item) => {
    setItemToRemove(item);
    setConfirmationVisible(true);
  };

  const handleRemoveConfirm = () => {
    // Remove the item from the cart and update the local storage
    if (itemToRemove) {
      const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }

    // Close the confirmation modal
    setConfirmationVisible(false);
  };

  const handleRemoveCancel = () => {
    // Close the confirmation modal
    setConfirmationVisible(false);
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Cart content */}
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>Your Cart</h2>
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
              <button
                className='text-red-600'
                onClick={() => handleRemoveClick(item)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      {/* Remove Confirmation Modal */}
      {confirmationVisible && (
        <div className='fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/50'>
          <div className='bg-white p-4 rounded'>
            <p>Are you sure you want to remove this item?</p>
            <div className='flex justify-center mt-4'>
              <button
                className='px-4 py-2 bg-red-600 text-white rounded mr-4'
                onClick={handleRemoveConfirm}
              >
                Yes
              </button>
              <button
                className='px-4 py-2 bg-gray-300 text-gray-700 rounded'
                onClick={handleRemoveCancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Close Button */}
      <button
        className='absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none'
        onClick={onClose}
      >
        Close
      </button>

       {/* Check Out Button */}
       <button
            className='bg-green-500 text-white px-4 py-2 rounded-full mt-4 flex items-center' // Added flex and items-center
            onClick={handleGoToCheckout} // Go to Checkout page
        >
            <BsFillCartFill className='h-5 w-5 mr-2'/>  {/* Added mr-2 for a little spacing */}
            Check Out
        </button>


      {/* Render the Checkout component if checkoutVisible is true */}
      {/* {checkoutVisible && <CheckOut cartItems={cartItems} />} */}

    </div>
  );
};

export default Cart;
