import React from 'react';

function FavoritesList({ favorites, onRemoveFavorite }) {
  return (
    <ul>
      {favorites.map((favorite) => (
        <li key={favorite.id} className={favorite.sex}>
          {favorite.name}
          <button className="removeBtn" onClick={() => onRemoveFavorite(favorite)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;