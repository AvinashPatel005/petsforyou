import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upper-footer">
        <div className="footer-column">
          <h5 className="border">Get In Touch</h5>
          <p>
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor
          </p>
          <p>
            <i className="bi-geo-alt"></i>Location, City, Country
          </p>
          <p>
            <i className="bi-envelope"></i>
            info@example.com
          </p>
          <p>
            <i className="bi-phone-vibrate"></i>+012 345 67890
          </p>
        </div>
        <div className="footer-column">
          <h5 className="border">Quick Links</h5>
          <a href="#Home">
            <i className="bi-arrow-right"></i>Home
          </a>
          <a href="#About">
            <i className="bi-arrow-right"></i>About Us
          </a>
          <a href="#Service">
            <i className="bi-arrow-right"></i>Our Services
          </a>
          <a href="#Team">
            <i className="bi-arrow-right"></i>Meet The Team
          </a>
          <a href="#BLog">
            <i className="bi-arrow-right"></i>Latest Blog
          </a>
          <a href="#Contact">
            <i className="bi-arrow-right"></i>Contact Us
          </a>
        </div>
        <div className="footer-column">
          <h5 className="border">Popular Links</h5>
          <a href="#Home">
            <i className="bi-arrow-right"></i>Home
          </a>
          <a href="#About">
            <i className="bi-arrow-right"></i>About Us
          </a>
          <a href="#Service">
            <i className="bi-arrow-right"></i>Our Services
          </a>
          <a href="#Team">
            <i className="bi-arrow-right"></i>Meet The Team
          </a>
          <a href="#BLog">
            <i className="bi-arrow-right"></i>Latest Blog
          </a>
          <a href="#Contact">
            <i className="bi-arrow-right"></i>Contact Us
          </a>
        </div>
        <div className="footer-column">
          <h5 className="border">Newsletter</h5>
          <form className="newsletter" action="">
            <div>
              <input type="text" placeholder="Your Email" />
              <button>Sign Up</button>
            </div>
          </form>
          <h6>Follow Us</h6>
          <div className="social-media">
            <a href="https://freewebsitecode.com/">
              <i className="bi-twitter"></i>
            </a>
            <a href="https://facebook.com/freewebsitecode/">
              <i className="bi-facebook"></i>
            </a>
            <a href="https://freewebsitecode.com/">
              <i className="bi-linkedin"></i>
            </a>
            <a href="https://youtube.com/freewebsitecode/">
              <i className="bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="middle-footer">
        <a href="/term">Terms &amp; Conditions</a>
        <span>|</span>
        <a href="/term">Privacy Policy</a>
        <span>|</span>
        <a href="/term">Customer Support</a>
        <span>|</span>
        <a href="/term">Payments</a>
        <span>|</span>
        <a href="/term">Help</a>
        <span>|</span>
        <a href="/term">FAQs</a>
      </div>
      <div className="bottom-footer">
          <p>© PetsForYou. All Rights Reserved. | Designed by <a href="https://teamdiversity.web.app/" rel="noreferrer" target="_blank">Team Diversity</a></p>
      </div>
    </div>
  );
}
