import React from 'react';

function Favorites({ favorites, removeFavorite }) {
  return (
    <div>
     
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.name}
            <button onClick={() => removeFavorite(favorite)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
