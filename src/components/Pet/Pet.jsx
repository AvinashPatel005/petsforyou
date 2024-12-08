import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Cluster from "react-leaflet-cluster";
import { divIcon, Icon } from "leaflet";
import petShops from "../../data";
import ShopCard from "./ShopCard";
import Divider from "../Divider";
function Pet() {
  const [isDetails, setIsDetails] = useState(false);
  const [details,setDetails] = useState(null);
  const offset = 0.01;
  const currentLocation = [20.298059, 85.8248];
  const offsetCenter = [currentLocation[0], currentLocation[1] + offset];
  const [map, setMap] = useState(null);
  const IconCreateFunction = (cluster) => {
    return divIcon({
      html: `<p>${cluster.getChildCount()}</p>`,
      className: "marker-cluster",
      iconSize: [36, 36],
    });
  };
  const onClick = (center = currentLocation, level,id) => {
    map.setView([center[0], center[1] + offset], level);
    setIsDetails(true);
    setDetails(petShops[id-1])
  };
  const closeDetails = () => {
    setIsDetails(false);
    setDetails(null);
  };
  return (
    <div className="pet-container">
      <MapContainer
        className="pet-map"
        center={offsetCenter}
        zoom={14}
        ref={setMap}
      >
        <TileLayer
          attribution="stadia-maps"
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Cluster
          maxClusterRadius={30}
          chunkedLoading
          iconCreateFunction={IconCreateFunction}
        >
          {petShops.map((petShelter, index) => (
            <Marker
              key={index}
              position={[
                petShelter.location.latitude,
                petShelter.location.longitude,
              ]}
              icon={
                new Icon({
                  iconUrl:
                    "https://icons-for-free.com/iff/png/256/market+open+shop+shopping+store+icon-1320184216006471806.png",
                  iconSize: [36, 36],
                })
              }
            >
              <Popup offset={[0, -10]}>
                <h2 onClick={onClick}>{petShelter.name}</h2>
              </Popup>
            </Marker>
          ))}
        </Cluster>
        <Marker
          position={currentLocation}
          icon={
            new Icon({
              iconUrl: require("../../img/gps.png"),
              iconSize: [60, 60],
            })
          }
          zIndexOffset={100}
        ></Marker>
      </MapContainer>
      <div className="map-panel">
        {
            isDetails && 
            <div class="petshop-detail-card" key={setDetails.id}>
          <img
            src="https://media.istockphoto.com/id/1355290974/photo/dog-near-different-variation-of-goods-for-animals.jpg?s=612x612&w=0&k=20&c=mL_5zyUinqzo32fKV_0lb0ycD8NnvvlsKCBg51CbO2Q="
            alt={details.name}
          />
          <div class="petshop-card-content">
            <i
              class="bi bi-x-circle-fill detail-close-btn"
              onClick={closeDetails}
            ></i>
            <h2>{details.name}</h2>
            <p>
              <strong>Address:</strong> {details.location.address}, {details.location.city}, {details.location.state}, {details.location.postal_code}
            </p>
            <p>
              <strong>Services:</strong> {details.services.join(", ").toUpperCase()}
            </p>
            <p>
              <strong>Hours:</strong> Mon-Fri: 9:00 AM - 8:00 PM, Sat: 10:00 AM
              - 6:00 PM, Sun: Closed
            </p>
            <div class="petshop-card-contact">
              <p>
                <strong>Contact:</strong>
              </p>
              <p>Phone: {details.contact.phone}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${details.contact.email}`}>{details.contact.email}</a>
              </p>
              <p>
                <a href={details.contact.website} rel="noreferrer" target="_blank">
                  Visit Website
                </a>
              </p>
            </div>
            <ul class="petshop-card-features">
              {
                Object.keys(details.features).filter((feature)=>details.features[feature]===true).map((feature, index) => (
                    <li key={index}>{feature.replace('_'," ").toUpperCase()}</li>
                    ))
              }
            </ul>
          </div>
        </div>
        }

        <div className="map-info">
          <div className="pet-search">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search Pets, Shelters, etc" />
          </div>
          <p className="map-info-hint">
            <i class="bi bi-dot"></i>
            <i class="bi bi-dot"></i>
            <i class="bi bi-dot"></i>
            Nearby
            <i class="bi bi-dot"></i>
            <i class="bi bi-dot"></i>
            <i class="bi bi-dot"></i>
          </p>
          <ul>
            {petShops.map((petShelter, index) => (
              <>
                <ShopCard key={index} onClick={onClick} {...petShelter} />
                <Divider />
              </>
            ))}
          </ul>
        </div>
      </div>
      <i
        class="bi bi-geo-alt-fill location-btn"
        onClick={() => onClick(offsetCenter, 14)}
      ></i>
    </div>
  );
}

export default Pet;
