import React, { useState } from 'react';

const PetCataloge = ({ closeCataloge, pets }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pet-search-container">
      {/* Back Button */}
      <i
        className="bi bi-arrow-left-circle-fill detail-back-btn"
        onClick={closeCataloge}
      ></i>

      {/* Search Bar */}
      <div className="pet-search">
        <i className="bi bi-search"></i>
        <input
          type="text"
          placeholder="Search Pets"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Display Filtered Pets */}
      <div className="pet-list">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="pet-item">
            <h3>{pet.name}</h3>
            <p>{pet.location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCataloge;