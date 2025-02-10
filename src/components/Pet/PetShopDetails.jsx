import React from "react";

const PetShopDetails = ({ details, closeDetails, openCataloge }) => {
  return (
    <div className="petshop-detail-card" key={details.id}>
      <img
        src="https://media.istockphoto.com/id/1355290974/photo/dog-near-different-variation-of-goods-for-animals.jpg?s=612x612&w=0&k=20&c=mL_5zyUinqzo32fKV_0lb0ycD8NnvvlsKCBg51CbO2Q="
        alt={`${details.name}`}
      />
      <div className="petshop-card-content">
        <i className="bi bi-x-circle-fill detail-close-btn" onClick={closeDetails}></i>
        <h2>{details.name}</h2>
        <p>
          <strong>Address:</strong> {details.location.address}, {details.location.city},{" "}
          {details.location.state}, {details.location.postal_code}
        </p>
        <div>
          <strong>Hours:</strong>
          <div className="petshop-hours">
            {Object.keys(details.hours).map((key, index) => (
              <div key={index}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {details.hours[key]}
              </div>
            ))}
          </div>
        </div>
        <div className="petshop-card-contact">
          <p>
            <strong>Contact:</strong>
          </p>
          <p>Phone: {details.contact.phone}</p>
          <p>
            Email: <a href={`mailto:${details.contact.email}`}>{details.contact.email}</a>
          </p>
          <p>
            <a href={details.contact.website} rel="noreferrer" target="_blank">
              Visit Website
            </a>
          </p>
          <i
            className="bi bi-arrow-right-circle-fill cataloge-open-btn"
            onClick={openCataloge}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default PetShopDetails;