import React, { useState } from "react";
import babyNamesData from "./babyNamesData.json";
import GenderFilter from "./GenderFilter";
import FavoritesList from "./FavoritesList";

function BabyNames({ onAddFavorite }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (name) => {
    if (!favorites.find((favorite) => favorite.id === name.id)) {
      setFavorites([...favorites, name]);
      onAddFavorite(name);
    }
  };

  const removeFromFavorites = (name) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== name.id));
  };

  const filteredNames = babyNamesData.filter((name) => {
    const matchesSearchQuery = name.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (selectedGender === "all") {
      return matchesSearchQuery;
    } else {
      return matchesSearchQuery && name.sex === selectedGender;
    }
  });

  const sortedNames = filteredNames.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="BabyNamesContainer">
      <input
        type="text"
        placeholder="Search names..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <GenderFilter
        selectedGender={selectedGender}
        onSelectGender={setSelectedGender}
      />
          <h3>Favorites:</h3>
      <FavoritesList
        favorites={favorites}
        onRemoveFavorite={removeFromFavorites}
      />



      <h3>All Names:</h3>
      <ul className="NameList">
        {sortedNames.map((name) => (
          <li
            key={name.id}
            className={name.sex}
            onClick={() => addToFavorites(name)}
          >
            {name.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BabyNames;
