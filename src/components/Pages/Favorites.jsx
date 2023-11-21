import React, { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/solid';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(item => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='max-w-[1840px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Your Favorites</h1>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4'>
        {favorites.map((item) => (
          <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img className='w-full h-[250px] object-contain rounded-t-lg' src={item.image} alt={item.name} />
            <div className='flex justify-between px-4 py-6'>
              <p className='font-bold'>{item.name}</p>
              <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
              {/* Remove From Favorites Button */}
              <button
                className='bg-red-500 text-white px-2 py-1 rounded-full hover:bg-pink-500 flex items-center'
                onClick={() => removeFromFavorites(item.id)}
              >
                <HeartIcon className='h-6 w-6' /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
