import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Cluster from "react-leaflet-cluster";
import { divIcon, Icon } from "leaflet";

const PetMap = ({ petShops, onClick, currentLocation, offsetCenter, details, setMap }) => {
  const IconCreateFunction = (cluster) => {
    return divIcon({
      html: `<p>${cluster.getChildCount()}</p>`,
      className: "marker-cluster",
      iconSize: [36, 36],
    });
  };

  return (
    <MapContainer className="pet-map" center={offsetCenter} zoom={14} ref={setMap}>
      <TileLayer
        attribution="stadia-maps"
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Cluster maxClusterRadius={30} chunkedLoading iconCreateFunction={IconCreateFunction}>
        {petShops.map((petShelter) => (
          <Marker
            key={petShelter.id}
            position={[petShelter.location.latitude, petShelter.location.longitude]}
            eventHandlers={{
              click: () =>
                onClick(
                  [petShelter.location.latitude, petShelter.location.longitude],
                  16,
                  petShelter.id
                ),
            }}
            icon={
              new Icon({
                iconUrl:
                  "https://media.istockphoto.com/id/1355290974/photo/dog-near-different-variation-of-goods-for-animals.jpg?s=612x612&w=0&k=20&c=mL_5zyUinqzo32fKV_0lb0ycD8NnvvlsKCBg51CbO2Q=",
                iconSize: details && details.id === petShelter.id ? [60, 60] : [36, 36],
                className:
                  details && details.id === petShelter.id ? "petshop-marker selected" : "petshop-marker",
              })
            }
          />
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
      />
    </MapContainer>
  );
};

export default PetMap;