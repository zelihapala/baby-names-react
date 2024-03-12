import React from 'react';
import FavoritesList from './FavoritesList';

function Favorites({ favorites, removeFavorite }) {
  return (
    <div>
      <h3>Favorites:</h3>
      <FavoritesList favorites={favorites} onRemoveFavorite={removeFavorite} />
    </div>
  );
}

export default Favorites;