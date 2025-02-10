import React, { useState } from 'react';
import PetCard from './PetCard';

const PetCataloge = ({ closeCataloge, pets = 
  [
  {
    "id": 1,
    species: "Dog",
    breed: "Golden Retriever",
    age: 2,
    gender: "Male",
    status: "Available",
    price: 500,
    description: "Friendly and playful Golden Retriever. Great with kids and other pets.",
    images: ["https://example.com/golden1.jpg", "https://example.com/golden2.jpg"],
    category: "Adult",
    vaccinations: ["Rabies", "Distemper", "Parvovirus"],
    healthStatus: "Healthy"
  },
  {
    "id": 2,
    species: "Cat",
    breed: "Siamese",
    age: 1,
    gender: "Female",
    status: "Available",
    price: 300,
    description: "Elegant and affectionate Siamese cat. Loves to cuddle and play.",
    images: ["https://example.com/siamese1.jpg", "https://example.com/siamese2.jpg"],
    category: "Kitten",
    vaccinations: ["Feline Leukemia", "Rabies"],
    healthStatus: "Healthy"
  },
  {"id": 3,
    species: "Bird",
    breed: "Parakeet",
    age: 3,
    gender: "Male",
    status: "Sold",
    price: 50,
    description: "Vibrant and chirpy parakeet. Perfect for bird enthusiasts.",
    images: ["https://example.com/parakeet1.jpg"],
    category: "Adult",
    vaccinations: [],
    healthStatus: "Healthy"
  },
  {"id": 4,
    species: "Fish",
    breed: "Betta",
    age: 1,
    gender: "Male",
    status: "Available",
    price: 20,
    description: "Beautiful Betta fish with vibrant colors. Low maintenance and peaceful.",
    images: ["https://example.com/betta1.jpg"],
    category: "Adult",
    vaccinations: [],
    healthStatus: "Healthy"
  },
  {"id": 5,
    species: "Rabbit",
    breed: "Holland Lop",
    age: 4,
    gender: "Female",
    status: "Adopted",
    price: 100,
    description: "Sweet and gentle Holland Lop rabbit. Loves carrots and hopping around.",
    images: ["https://example.com/rabbit1.jpg", "https://example.com/rabbit2.jpg"],
    category: "Adult",
    vaccinations: [],
    healthStatus: "Healthy"
  },
  {"id": 6,
    species: "Other",
    breed: "Guinea Pig",
    age: 2,
    gender: "Male",
    status: "Available",
    price: 40,
    description: "Adorable guinea pig. Great for kids and easy to care for.",
    images: ["https://example.com/guineapig1.jpg"],
    category: "Adult",
    vaccinations: [],
    healthStatus: "Healthy"
  },
  {"id": 7,
    species: "Dog",
    breed: "German Shepherd",
    age: 5,
    gender: "Male",
    status: "Available",
    price: 700,
    description: "Loyal and intelligent German Shepherd. Excellent guard dog.",
    images: ["https://example.com/germanshepherd1.jpg", "https://example.com/germanshepherd2.jpg"],
    category: "Senior",
    vaccinations: ["Rabies", "Distemper", "Parvovirus"],
    healthStatus: "Healthy"
  },
  {"id": 8,
    species: "Cat",
    breed: "Maine Coon",
    age: 2,
    gender: "Female",
    status: "Available",
    price: 600,
    description: "Majestic Maine Coon cat. Gentle giant with a loving personality.",
    images: ["https://example.com/mainecoon1.jpg", "https://example.com/mainecoon2.jpg"],
    category: "Adult",
    vaccinations: ["Feline Leukemia", "Rabies"],
    healthStatus: "Healthy"
  }
] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPets = pets.filter((pet) =>
    pet.species.toLowerCase().includes(searchTerm.toLowerCase())||
    pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="petshop-detail-card">
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
        {pets && filteredPets.map((pet) => (
          <PetCard pet={pet} key={pet.id} />
        ))}
      </div>
    </div>
  );
};

export default PetCataloge;