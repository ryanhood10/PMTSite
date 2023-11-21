import React from 'react';

const OrdersPage = () => {
  return (
    <div className="max-w-screen-xl m-auto px-4 py-12 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Orders</h2>
        <p className="text-gray-600 text-lg">
          <span className='text-orange-600 font-bold'>No Order History! </span>
          <br />
          Check email for any orders or log in to a different account.
        </p>
      </div>
    </div>
  );
};

export default OrdersPage;
