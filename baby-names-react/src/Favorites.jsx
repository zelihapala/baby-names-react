import React from 'react';
import FavoritesList from './FavoritesList';

function Favorites({ favorites, onRemoveFavorite }) {
  return (
    <div>
      <h3>Favorites:</h3>
      <FavoritesList favorites={favorites} onRemoveFavorite={onRemoveFavorite} />
    </div>
  );
}

export default Favorites;