import React from "react";
export default function Header() {
  return (
    <div className="top-info-bar">
      <div className="top-info-card">
        <i className="bi-geo-alt"></i>
        <div>
          <h5>OUR OFFICE</h5>
          <p>Bhubaneswar, Odisha, India</p>
        </div>
      </div>
      <div className="separator"></div>
      <div className="top-info-card">
        <i className="bi-envelope"></i>
        <div>
          <h5>EMAIL US</h5>
          <p>petsforyou@gmail.com</p>
        </div>
      </div>
      <div className="separator"></div>
      <div className="top-info-card">
        <i className="bi-phone-vibrate"></i>
        <div>
          <h5>CALL US</h5>
          <p>50001 50001</p>
        </div>
      </div>
    </div>
  );
}
