
import React from 'react';

const ProductCard = ({ title, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{title}</h3>

      </div>
    </div>
  );
};

export default ProductCard;
