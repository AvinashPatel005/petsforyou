import React from 'react'
import blog1 from '../img/blog1.jpg'
import blog2 from '../img/blog2.jpg'
import blog3 from '../img/blog3.jpg'
export default function BlogSection() {
  return (
    <section className="blog-section">
    <div className="container">
        <div className="border heading heading-full"><h4>LATEST BLOG</h4>
            <h2>LATEST ARTICLES FROM OUR BLOG POST</h2>
    </div>
        <div className="blog-cards">
            <div className="blog-card">
                <img src={blog1} alt="Corgi Running"/>
                <div className="blog-content">
                    <div className="blog-meta">
                        <span><i className="bi-folder"></i> Web Design</span>
                        <span><i className="bi-calendar"></i> 01 Jan, 2045</span>
                    </div>
                    <h3>Dolor Sit Magna Rebub Clita Rebub Dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p>
                    <a href="#temp" className="blog-read-more">Read More <i className="bi-arrow-right"></i></a>
                </div>
            </div>

            <div className="blog-card">
                <img src={blog2} alt="Dog in Park"/>
                <div className="blog-content">
                    <div className="blog-meta">
                        <span><i className="bi-folder"></i> Web Design</span>
                        <span><i className="bi-calendar"></i> 01 Jan, 2045</span>
                    </div>
                    <h3>Dolor Sit Magna Rebub Clita Rebub Dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p>
                    <a href="#temp" className="blog-read-more">Read More <i className="bi-arrow-right"></i></a>
                </div>
            </div>

            <div className="blog-card">
              <img src={blog3} alt="Dog in Park"/>
              <div className="blog-content">
                  <div className="blog-meta">
                      <span><i className="bi-folder"></i> Web Design</span>
                      <span><i className="bi-calendar"></i> 01 Jan, 2045</span>
                  </div>
                  <h3>Dolor Sit Magna Rebub Clita Rebub Dolor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p>
                  <a href="#temp" className="blog-read-more">Read More <i className="bi-arrow-right"></i></a>
              </div>
          </div>
        </div>
    </div>
</section>
  )
}
