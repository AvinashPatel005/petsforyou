import React from 'react'

export default function AboutSection() {
  return (
    <section className="about-us">
    <div className="about-container">
        <img className = "about-image" src="https://images.unsplash.com/photo-1541354007378-7b3964743d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Happy Pets"/>

        <div className="about-content">
            <div className="border heading"><h4>ABOUT US</h4>
            <h2>WE KEEP YOUR PETS HAPPY ALL TIME</h2></div>
            <p>Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore.</p>
            <div className="about-boxes">
                <div className="box">
                    <h5>OUR MISSION</h5>
                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.</p>
                </div>
                <div className="box">
                    <h5>OUR VISION</h5>
                    <p>Sanctus clita duo justo et tempor consetetur takimata eirmod. Dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
