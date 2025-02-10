import React from "react";
import Rating from "./Rating";
function ShopCard({
  id,
  name,
  ratings: { average, total_reviews },
  location,
  hours,
  contact,
  onClick,
  selected
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
    <div className={`petshop-card ${selected===id?"selected":""}`} onClick={()=>onClick([location.latitude,location.longitude],16,id)}>
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
            <i key={index} onClick={(e)=>{
                e.stopPropagation()
                copyToClipboard(contact[key])
            }} className={`bi bi-${iconMap[key]} contact-btn`}></i>
          ))}
        </div>
      </div>
      <img
        className="petshop-logo"
        src="https://media.istockphoto.com/id/1355290974/photo/dog-near-different-variation-of-goods-for-animals.jpg?s=612x612&w=0&k=20&c=mL_5zyUinqzo32fKV_0lb0ycD8NnvvlsKCBg51CbO2Q="
        alt=""
      />
    </div>
  );
}

export default ShopCard;
