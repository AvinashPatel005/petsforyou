import React, { useState } from "react";
import { useEffect } from "react";

const PetCard = ({ pet }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  var [yesterday,setYesterday] = useState("");
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
    <div key={pet._id} className={`pet-item ${isExpanded?"expanded":""}`} onClick={toggleExpand}>
      <div className="pet-card-header">
      <div>
      <h3>{pet.breed}</h3>
      <h4>{pet.species}</h4>
      <p>Age: {pet.age} years</p>
      <p>Price: ${pet.price}</p>
      </div>
      <div>
        <img src={"https://www.cdc.gov/healthy-pets/media/images/2024/04/GettyImages-598175960-cute-dog-headshot.jpg"} alt="dp" />
      </div>
      </div>

      {/* Show additional details when expanded */}
      {isExpanded && (
        <div className="pet-details">
          <p>Gender: {pet.gender}</p>
          <p>Category: {pet.category}</p>
          <p>Health Status: {pet.healthStatus}</p>
          <div className="pet-images">
            {pet.images.map((image, index) => (
              <img key={index} src={image} alt={`${pet.breed} ${index + 1}`} />
            ))}
          </div>
          <p>Description: {pet.description}</p>
          <div className="pet-vaccinations">
            <strong>Vaccinations:</strong>
            <ul>
              {pet.vaccinations.map((vaccine, index) => (
                <li key={index}>{vaccine}</li>
              ))}
            </ul>
          </div>
          <label htmlFor="date" className="toggle-button" onClick={(e)=>e.stopPropagation()}>Book Appointment
      </label>
        </div>
      )}

    </div>
  );
};

export default PetCard;