import React from "react";
import ShopCard from "./ShopCard";
import Divider from "./Divider";

const MapPanel = ({ petShops, onClick ,selected }) => {
  return (
    <div className="map-info">
      <div className="pet-search">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search Pets, Shelters, etc" />
      </div>
      <p className="map-info-hint">
        <i className="bi bi-dot"></i>
        <i className="bi bi-dot"></i>
        <i className="bi bi-dot"></i>
        Nearby
        <i className="bi bi-dot"></i>
        <i className="bi bi-dot"></i>
        <i className="bi bi-dot"></i>
      </p>
      <ul>
        {petShops.map((petShelter) => (
          <div key={petShelter.id}>
            <ShopCard onClick={onClick} selected = {selected} {...petShelter} />
            <Divider />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MapPanel;