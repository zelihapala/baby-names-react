import React, { useState } from "react";
import BabyNames from "./BabyNames";
import Favorites from "./Favorites";
import GenderFilter from "./GenderFilter";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (name) => {
    setFavorites([...favorites, name]);
  };

  const removeFavorite = (nameToRemove) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== nameToRemove.id
    );
    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <h1>Baby Names App</h1>
 <BabyNames onAddFavorite={addFavorite} />
     
     
     
    </div>
  );
}

export default App;
