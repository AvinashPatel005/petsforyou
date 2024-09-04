import React from 'react'
import productImg from '../img/product-3.png'
export default function ProductSection() {
  return (
    <section className="products">
        <div className="border heading heading-full"><h4>PRODUCTS</h4>
            <h2>PRODUCTS FOR YOUR BEST FRIEND</h2>
        </div>
        <div className="product-show">
            <div className="product-item">
                <img src={productImg} alt="Product 1"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 1"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 1"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 1"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 1"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 1"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 2"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 3"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
            <div className="product-item">
                <img src={productImg} alt="Product 4"/>
                <h3>Quality Pet Foods</h3>
                <p>₹199.00</p>
                <a href="#temp" className="add-to-cart"><i className='bi-cart2'></i></a>
            </div>
        </div>
        <div className="show-controls">
      <div className="arrow left-arrow"><i className="bi-arrow-left"></i></div>
      <div className="arrow right-arrow"><i className="bi-arrow-right"></i></div>
    </div>
    </section>
  )
}
