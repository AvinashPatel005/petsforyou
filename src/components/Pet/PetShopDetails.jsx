import React from "react";
import Rating from "./Rating";

const PetShopDetails = ({ details, closeDetails, openCataloge }) => {
  const { ratings: { average, total_reviews } } = details;
  return (
    <div className="petshop-detail-card" key={details.id}>
      <img
        src="https://media.istockphoto.com/id/1355290974/photo/dog-near-different-variation-of-goods-for-animals.jpg?s=612x612&w=0&k=20&c=mL_5zyUinqzo32fKV_0lb0ycD8NnvvlsKCBg51CbO2Q="
        alt={`${details.name}`}
      />
      <div>
        
      <div className="petshop-card-content">
        <i className="bi bi-x-circle-fill detail-close-btn" onClick={closeDetails}></i>
        <h3>{details.name}</h3>

        <div className="rating-card">
          <span>{average}</span>
          <Rating rating={average} />
          <span>({total_reviews})</span>
        </div>

        <p>
          {details.location.address}, {details.location.city},{" "}
          {details.location.state}, {details.location.postal_code}
        </p>
        <div>
          <strong>Hours:</strong>
          <div className="petshop-hours">
            {Object.keys(details.hours).map((key, index) => (
              <div key={index}>
                {key.charAt(0).toUpperCase() + key.substring(1, 3)}: {details.hours[key]}
              </div>
            ))}
          </div>
        </div>
        <div className="petshop-card-contact">
          <strong>Contact:</strong>
          <p>Phone: {details.contact.phone}</p>
          <p>
            Email: <a href={`mailto:${details.contact.email}`}>{details.contact.email}</a>
          </p>


        </div>
        <div className="petshop-card-contact">
          <strong>Reviews:</strong>
          
          <div className="review-container">
          {
            details.reviews.map(({comment,rating,reviewer,date},index)=>(
              <div className="review-box" key={index}>
                <h5>{reviewer}</h5>
                <Rating rating={rating} />
                <p>{comment}</p>
                <p className="review-date">{date}</p>
              </div>
            ))
          }
          </div>
        </div>
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