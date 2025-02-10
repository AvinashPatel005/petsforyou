import React, { useState } from "react";
import PetMap from "./PetMap";
import PetShopDetails from "./PetShopDetails";
import PetCataloge from "./PetCataloge";
import MapPanel from "./MapPanel";
import petShops from "../../data"
import "./Pet.css";

function Pet() {
  const [isDetails, setIsDetails] = useState(false);
  const [details, setDetails] = useState(null);
  const [cataloge, setCataloge] = useState(false);
  const [map, setMap] = useState(null);

  const offset = 0.01;
  const currentLocation = [20.298059, 85.8248];
  const offsetCenter = [currentLocation[0], currentLocation[1] + offset];

  const onClick = (center = currentLocation, level, id) => {
    map.setView([center[0], center[1] + offset], level);
    if (id) {
      setCataloge(false);
      setIsDetails(true);
      setDetails(petShops.find((shop) => shop.id === id));
    }
  };

  const closeDetails = () => {
    setIsDetails(false);
    setDetails(null);
  };

  const openCataloge = () => setCataloge(true);
  const closeCataloge = () => setCataloge(false);

  return (
    <div className="pet-container">
      <PetMap
        petShops={petShops}
        onClick={onClick}
        currentLocation={currentLocation}
        offsetCenter={offsetCenter}
        details={details}
        setMap={setMap}
      />
      <div className="map-panel">
        {isDetails && !cataloge && (
          <PetShopDetails
            details={details}
            closeDetails={closeDetails}
            openCataloge={openCataloge}
          />
        )}
        {isDetails && cataloge && <PetCataloge closeCataloge={closeCataloge} />}
        <MapPanel petShops={petShops} selected={details?details.id:-1} onClick={onClick} />
      </div>
      <i 
        className="bi bi-geo-alt-fill location-btn"
        onClick={() => onClick(offsetCenter, 14)}
      ></i>
    </div>
  );
}

export default Pet;