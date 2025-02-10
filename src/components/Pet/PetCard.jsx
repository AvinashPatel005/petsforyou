import React, { useState } from "react";
import { useEffect } from "react";

const PetCard = ({ pet }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  var [yesterday, setYesterday] = useState("");
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    setYesterday(yyyy + '-' + mm + '-' + dd);
  }, [isExpanded]);

  return (
    <div key={pet._id} className={`pet-item ${isExpanded ? "expanded" : ""}`} onClick={toggleExpand}>
      <div className="pet-card-header">
        <div>
          <h3>{pet.breed}</h3>
          <p>{pet.gender} {pet.species}</p>
          <p>Age: {pet.age} years</p>
          <p className="petcard-desc">{pet.description}</p>
        </div>
        <div>
          <img src={"https://www.cdc.gov/healthy-pets/media/images/2024/04/GettyImages-598175960-cute-dog-headshot.jpg"} alt="dp" />
        </div>
      </div>

      {/* Show additional details when expanded */}
      {isExpanded && (
        <div className="pet-details">
          

          <div className="pet-images">
            {pet.images.map((image, index) => (
              <img key={index} src={image} alt={`${pet.breed} ${index + 1}`} />
            ))}
          </div>
          <div className="pet-vaccinations">
            <strong>Vaccinations:</strong>
            <ul>
              {pet.vaccinations.map((vaccine, index) => (
                <li key={index}>{vaccine}</li>
              ))}
            </ul>
          </div>
          <button className="toggle-button" onClick={(e) => e.stopPropagation()}>Book Appointment
          </button>
        </div>
      )}

    </div>
  );
};

export default PetCard;