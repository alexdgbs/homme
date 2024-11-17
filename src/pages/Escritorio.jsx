import React from 'react';
import { Link } from 'react-router-dom';

function Escritorio() {
    
  return (
    <div className="escritorio-container">
      <Link to="/" className="no-style-link">
        <h1 className="app-title">Escritorio</h1>
      </Link>
      <p className="from-home">FROM HOME</p>
      <p className="from-home">Design</p>

      <div className="escritorios">
        <div className="escritorio-card">
          <img
            src="https://www.officedepot.com.mx/medias/100118401-8.jpg-515ftw?context=bWFzdGVyfHJvb3R8NjM0Nzl8aW1hZ2UvanBlZ3xhRGszTDJnM09TOHhNVFE1TVRjeU56WXpPRFUxT0M4eE1EQXhNVGcwTURFdE9DNXFjR2RmTlRFMVpuUjN8NDYwMGM2ZmIxYjViZjRlYTJmNzQ3YzI1ODkyZTYyYmJjNjcwNDBlNmY4MzNiMzU2Yjc0Zjg4ZjJiZmJmZTc3OA"
            alt="Escritorio 1"
          />
          <h3 className="product-title">Escritorio Maderkit</h3>
          <p className="product-description">Madera: Galés</p>
          <p className="product-price">149.00 USD</p>
        </div>
        <div className="escritorio-card">
          <img
            src="https://promart.vteximg.com.br/arquivos/ids/6421484-1000-1000/image-e948cfe6fb8a467a8861c01cdb608133.jpg?v=637964449446170000"
            alt="Escritorio 2"
          />
          <h3 className="product-title">Escritorio Borja</h3>
          <p className="product-description">Madera: Paulonia</p>
          <p className="product-price">199.00 USD</p>
        </div>
        <div className="escritorio-card">
          <img
            src="https://mubson.com/cdn/shop/files/OLTEN_NG_06.jpg?v=1726177148&width=1022"
            alt="Escritorio 3"
          />
          <h3 className="product-title">Escritorio Mubson</h3>
          <p className="product-description">Madera: Pino</p>
          <p className="product-price">115.00 USD</p>
        </div>
      </div>
    </div>
  );
}

export default Escritorio;