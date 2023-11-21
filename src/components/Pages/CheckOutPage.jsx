import React, { useState } from 'react';
import { data } from '../../data/data';
import { useLocation } from 'react-router-dom';

const CheckOut = ({ onClose }) => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleBillingToggle = () => {
    setBillingSameAsShipping(!billingSameAsShipping);
  };

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      [name]: value,
    }));
  };

  return (
    <div className='max-w-screen-xl m-auto px-4 py-12'>
      {/* Checkout content */}
      <h2 className='text-2xl font-semibold mb-4'>Check Out</h2>

      {/* Display cart items */}
      <div className='mb-4'>
        {cartItems.map((item) => {
          const correspondingItem = data.find((product) => product.name === item.name);
          return (
            <div key={item.id} className='border p-2 mb-2 flex justify-between items-center'>
              <div className='flex items-center'>
                <img
                  src={correspondingItem.image}
                  alt={item.name}
                  className='w-8 h-8 mr-2'
                />
                {item.name} - {item.price}
              </div>
            </div>
          );
        })}
      </div>

       {/* Shipping Address Form */}
<form className='mt-4'>
  <h3 className='text-lg font-semibold mb-2'>Shipping Address</h3>
  <input
    type='text'
    name='fullName'
    placeholder='Full Name'
    value={shippingAddress.fullName}
    onChange={handleShippingAddressChange}
    className='w-full mb-2 p-2 border rounded'
  />
  <input
    type='text'
    name='addressLine1'
    placeholder='Address Line 1'
    value={shippingAddress.addressLine1}
    onChange={handleShippingAddressChange}
    className='w-full mb-2 p-2 border rounded'
  />
  <input
    type='text'
    name='addressLine2'
    placeholder='Address Line 2'
    value={shippingAddress.addressLine2}
    onChange={handleShippingAddressChange}
    className='w-full mb-2 p-2 border rounded'
  />
  <input
    type='text'
    name='city'
    placeholder='City'
    value={shippingAddress.city}
    onChange={handleShippingAddressChange}
    className='w-full mb-2 p-2 border rounded'
  />
  <input
    type='text'
    name='state'
    placeholder='State'
    value={shippingAddress.state}
    onChange={handleShippingAddressChange}
    className='w-full mb-2 p-2 border rounded'
  />
  <input
    type='text'
    name='postalCode'
    placeholder='Postal Code'
    value={shippingAddress.postalCode}
    onChange={handleShippingAddressChange}
    className='w-full mb-2 p-2 border rounded'
  />
  <input
    type='text'
    name='country'
    placeholder='Country'
    value={shippingAddress.country}
    onChange={handleShippingAddressChange}
    className='w-full mb-2 p-2 border rounded'
  />
</form>


      {/* Payment Form */}
      <form className='mt-4'>
        <h3 className='text-lg font-semibold mb-2'>Payment Information</h3>
        <input
          type='text'
          name='cardNumber'
          placeholder='Card Number'
          value={paymentInfo.cardNumber}
          onChange={handlePaymentInfoChange}
          className='w-full mb-2 p-2 border rounded'
        />
        {/* Add more input fields for expirationDate and cvv */}
      </form>

      {/* Billing Toggle */}
      <div className='mt-4'>
        <input
          type='checkbox'
          checked={billingSameAsShipping}
          onChange={handleBillingToggle}
          className='mr-2'
        />
        <label htmlFor='billingSameAsShipping'>Use Shipping Address for Billing</label>
      </div>

      {/* Finalize Order Button */}
      <button
        className='bg-green-500 text-white px-4 py-2 rounded-full mt-4'
        // onClick={onClose} // Close the CheckOut component using the same button
      >
        Finalize Order
      </button>
    </div>
  );
};

export default CheckOut;
