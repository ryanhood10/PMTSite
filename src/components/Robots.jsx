import React, {useState} from 'react'
import { data} from '../data/data'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/solid';



const Robots = () => {
//adding states
const [robots, setRobots] = useState(data);

//filter functions
//filter type
const filterType = (category) => {
    setRobots(
        data.filter((item) => {
            return item.category === category;
        })
    );
};

//filter price
const filterPrice = (minPrice, maxPrice) => {
    setRobots(data.filter((item) => {
      const priceNumber = parseInt(item.price.replace(/\D/g, ''));
      return priceNumber >= minPrice && priceNumber <= maxPrice;
    }));
  };
  
  const filterPriceCheap = () => {
    filterPrice(0, 499);
  };
  
  const filterPriceMedium = () => {
    filterPrice(500, 999);
  };
  
  const filterPriceLarge = () => {
    filterPrice(1000, 1500);
  };
  
  const filterPriceExpensive = () => {
    filterPrice(1500, Infinity);
  };
  
//AddToCart Button
const addToCart = (item) => {
  // Fetch existing cart items from localStorage or initialize an empty array
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  // Add the new item to the cart
  const updatedCart = [...existingCart, item];
  // Store the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  // Show Notification
  const notification = document.createElement('div');
  notification.className = 'bg-green-500 text-white p-2 rounded fixed top-4 right-4';
  notification.textContent = 'Robot was added to cart!';
  document.body.appendChild(notification);

  // Remove the notification after a delay
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 4000); // 2 seconds delay, adjust as needed

};

// Add to Favorites
const addToFavorites = (item) => {
  const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // Check if the item is already in favorites
  if (!existingFavorites.some(favItem => favItem.id === item.id)) {
    const updatedFavorites = [...existingFavorites, item];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    // Show Notification
    const notification = document.createElement('div');
    notification.className = 'bg-red-500 text-white p-2 rounded fixed top-4 right-4';
    notification.textContent = 'Robot was added to favorites!';
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 4000);
  }
};


    return(
        <div id='robotsComponent'  className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Search for Robots</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setRobots(data)} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=> filterType('Cleaning Robots')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Cleaning Robots</button>
                    <button onClick={()=> filterType('Toy Robots')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Toy Robots</button>
                    <button onClick={()=> filterType('Robotic Pets')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pet Robots</button>
                    <button onClick={()=> filterType('Humanoid Robots')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Human Robots</button>
                    </div>

                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={filterPriceCheap} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={filterPriceMedium} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={filterPriceLarge} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={filterPriceExpensive} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>

                    </div>
                </div>
            </div>

            {/* Display Robots */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {robots.map((item, index) => (
        <div key={item.id} id={`robot-${item.id}`} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img className='w-full h-[200px] object-contain rounded-t-lg' src={item.image} alt={item.name} />
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{item.name}</p>
            <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
            {/* Add To Cart Button */}
            <button
              className='bg-orange-500 text-white px-1 rounded-full hover:bg-blue-500'
              onClick={() => addToCart(item)}
            >
              <ShoppingCartIcon className='h-5 w-5' />
            </button>
            {/* Add To Favorites Button */}
            <button
              className='bg-red-500 text-white px-1 rounded-full hover:bg-pink-500 ml-2 flex items-center'
              onClick={() => addToFavorites(item)}
            >
              <HeartIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      ))}

            </div>
        </div>

    )
}

export default Robots