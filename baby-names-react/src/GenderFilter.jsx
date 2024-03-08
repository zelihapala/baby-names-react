import React from "react";

function GenderFilter({ selectedGender, onSelectGender }) {
  return (
    <div className="genderFilter"> 
      <label className="all">
        <input 
          type="radio"
          value="all"
          checked={selectedGender === "all"}
          onChange={() => onSelectGender("all")}
        />
        🩵💜
      </label>

      <label className="boy">
        <input 
          type="radio"
          value="m"
          checked={selectedGender === 'm'}
          onChange={() => onSelectGender("m")}
        />
        🩵
      </label>
      <label className = "girl">
        <input 
          type="radio"
          value="f"
          checked={selectedGender === 'f'}
          onChange={() => onSelectGender('f')}
        />
        💜
      </label>
    </div>
  );
}

export default GenderFilter;
