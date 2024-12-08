import React from 'react'

export default function HeroSection() {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>PET SHOP</h1>
            <h2>MAKE YOUR PETS HAPPY</h2>
            <p>Dolore tempor clita lorem rebus kasd eirmod dolore diam eos kasd. Kasd clita ea justo est sed kasd erat clita sea.</p>
            <div className="hero-buttons">
                <a href="#read" className="hero-button read-more">READ MORE</a>
                <a href="#play" className="hero-button play-btn">
                    <span className="play-icon">▶</span> Play Video
                </a>
            </div>
        </div>
    </section>
  )
}
