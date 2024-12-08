import React from 'react'

export default function MembershipSection() {
  return (
    <section className="pricing-plan">
        <div className="border heading heading-full"><h4>PRICING PLAN</h4>
            <h2>COMPETITIVE PRICING FOR PET SERVICES</h2>
        </div>
    <div className="pricing-cards">
        <div className="pricing-card">
            <h3>BASIC</h3>
            <p>The Best Choice</p>
            <div className="price-tag">
                <span>₹</span>49<span>/ Mo</span>
            </div>
            <ul>
                <li>HTML5 &amp; CSS3 <span><i className='bi-check2'></i></span></li>
                <li>Bootstrap v5 <span><i className='bi-check2'></i></span></li>
                <li>Responsive Layout <span className='red' style={{rotate:"45deg"}}><i className='bi-plus-lg'></i></span></li>
                <li>Browsers Compatibility <span className='red' style={{rotate:"45deg"}}><i className='bi-plus-lg'></i></span></li>
            </ul>
            <a href="#temp" className="primary-button">ORDER NOW</a>
        </div>

        <div className="pricing-card center-card">
            <h3>STANDARD</h3>
            <p>The Best Choice</p>
            <div className="price-tag">
                <span>₹</span>99<span>/ Mo</span>
            </div>
            <ul>
                <li>HTML5 &amp; CSS3 <span><i className='bi-check2'></i></span></li>
                <li>Bootstrap v5 <span><i className='bi-check2'></i></span></li>
                <li>Responsive Layout <span><i className='bi-check2'></i></span></li>
                <li>Browsers Compatibility <span className='red' style={{rotate:"45deg"}}><i className='bi-plus-lg'></i></span></li>
            </ul>
            <a href="#temp" className="primary-button">ORDER NOW</a>
        </div>

        <div className="pricing-card">
            <h3>EXTENDED</h3>
            <p>The Best Choice</p>
            <div className="price-tag">
                <span>₹</span>149<span>/ Mo</span>
            </div>
            <ul>
                <li>HTML5 &amp; CSS3 <span><i className='bi-check2'></i></span></li>
                <li>Bootstrap v5 <span><i className='bi-check2'></i></span></li>
                <li>Responsive Layout <span><i className='bi-check2'></i></span></li>
                <li>Browsers Compatibility <span><i className='bi-check2'></i></span></li>
            </ul>
            <a href="#temp" className="primary-button">ORDER NOW</a>
        </div>
    </div>
</section>
    
  )
}
