import { useState } from "react";
import BabyNames from "./BabyNames";

import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (name) => {
    setFavorites([...favorites, name]);
  };

 

  return (
    <div className="App">
      <h1>Baby Names App</h1>
 <BabyNames onAddFavorite={addFavorite} />
     
     
     
    </div>
  );
}

export default App;
