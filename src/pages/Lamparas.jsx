import React from 'react';
import { Link } from 'react-router-dom';

function Lamparas() {
    
  return (
    <div className="escritorio-container">
      <Link to="/" className="no-style-link">
        <h1 className="app-title">Lámparas</h1>
      </Link>
      <p className="from-home2">O1HL</p>

      <div className="escritorios">
        <div className="escritorio-card">
          <img
            src="https://cdn.homedepot.com.mx/productos/165032/165032-d.jpg"
            alt="Lámpara 1"
          />
          <h3 className="product-title">Mate-one</h3>
          <p className="product-description">Artesanal</p>
          <p className="product-price">750.00</p>
        </div>
        <div className="escritorio-card">
          <img
            src="https://www.ikea.com/mx/es/images/products/vindkast-lampara-de-techo-blanco__0805859_pe769705_s5.jpg"
            alt="Lámpara 2"
          />
          <h3 className="product-title">Vindkast</h3>
          <p className="product-description">Selecta Plus</p>
          <p className="product-price">999.00</p>
        </div>
        <div className="escritorio-card">
          <img
            src="https://m.media-amazon.com/images/I/61yiMLI-5BL._AC_UF894,1000_QL80_.jpg"
            alt="Lámpara 3"
          />
          <h3 className="product-title">Candelabro</h3>
          <p className="product-description">Artesanal</p>
          <p className="product-price">1,299.00</p>
        </div>
        <div className="escritorio-card">
          <img
            src="https://i5-mx.walmartimages.com/samsmx/images/product-images/img_large/981020376-3l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt="Lámpara 4"
          />
          <h3 className="product-title">WL-3</h3>
          <p className="product-description">Premium</p>
          <p className="product-price">2,000.00</p>
        </div>
      </div>
      <Link to="/"className="no-style-link">
      <button className="view-contact-button">
      <strong>Inicio</strong>
      </button>
     </Link>
      <Link to="/escritorio"className="no-style-link">
      <button className="view-contact-button">
      <strong>Escritorios</strong>
      </button>
     </Link>
     <Link to="/contacto"className="no-style-link">
     <button className="view-contact-button">
      <strong>Contacto</strong>
      </button>
      </Link>
      <a href="https://github.com/alexdgbs" target="_blank" rel="noopener noreferrer" className="no-style-link">
  <button className="view-contact-button">
    <strong>GitHub</strong>
  </button>
</a>

    </div>
  );
}

export default Lamparas;
