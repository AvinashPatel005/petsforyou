import React from "react";
import "./index.css";
import Rating from "../Rating";
function ShopCard({
  id,
  name,
  ratings: { average, total_reviews },
  location,
  hours,
  services,
  contact,
  onClick
}) {
  const day = new Date().getDay();
  const iconMap = {
    phone: "phone",
    email: "envelope",
    website: "globe",
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="petshop-card" onClick={()=>onClick([location.latitude,location.longitude],16,id)}>
      <div className="petshop-info">
        <h3 className="petshop-name">{name}</h3>
        <div className="rating-card">
          <span>{average}</span>
          <Rating rating={average} />
          <span>({total_reviews})</span>
        </div>
        <p className="petshop-address">{location.address}</p>
        <p className="petshop-address">{Object.values(hours)[day]}</p>
        <div className="contact-card">
          {Object.keys(contact).map((key, index) => (
            <i onClick={(e)=>{
                e.stopPropagation()
                copyToClipboard(contact[key])
            }} className={`bi bi-${iconMap[key]} contact-btn`}></i>
          ))}
        </div>
        <div className="service-card">
          {services.map((service) => (
            <span className="service-cyl">{service}</span>
          ))}
        </div>
      </div>
      <img
        className="petshop-logo"
        src="https://icons-for-free.com/iff/png/256/market+open+shop+shopping+store+icon-1320184216006471806.png"
        alt=""
      />
    </div>
  );
}

export default ShopCard;
