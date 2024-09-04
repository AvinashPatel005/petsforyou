import React from 'react'
export default function Navbar() {
  return (
    <nav class="navbar">
      <div className='logo-section'>
        <i className='bi-shop'></i>
        <p>PETSFORYOU</p>
      </div>
      <ul className='nav-links'>
      <li className="nav-item nav-selected"><a href="#Home">HOME</a></li>
        <li className="nav-item"><a href="#About">ABOUT</a></li>
        <li className="nav-item"><a href="#Secvice">SERVICE</a></li>
        <li className="nav-item"><a href="#Product">PRODUCT</a></li>
        <li className="nav-item"><a href="#Pages">PAGES</a></li>
        <div className='nav-contact-btn'>
          <p>CONTACT</p>
          <i className='bi-arrow-right'></i>
        </div>
      </ul>
    </nav>
  )
}
