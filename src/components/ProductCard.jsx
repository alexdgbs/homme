
import React from 'react';

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
