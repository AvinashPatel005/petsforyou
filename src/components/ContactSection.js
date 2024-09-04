import React from "react";

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <div className="border heading">
            <h4>CONTACT US</h4>
            <h2>PLEASE FEEL FREE TO CONTACT US</h2>
          </div>
          <form action="#" method="post">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="upper-info">
            <div className="info-card">
              <i className="bi bi-geo-alt"></i>
              <div>
                <h4>OUR OFFICE</h4>
                <p>Location, City, Country</p>
              </div>
            </div>
            <div className="info-card">
              <i className="bi bi-envelope-open"></i>
              <div>
                <h4>EMAIL US</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="info-card">
              <i className="bi bi-phone-vibrate"></i>
              <div>
                <h4>CALL US</h4>
                <p>+012 345 6789</p>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15371683.781881569!2d62.119717455778805!3d19.84619363658271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sbd!4v1724167732682!5m2!1sen!2sbd"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
