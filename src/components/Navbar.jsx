import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto">
        <ul>
        <li>
            <Link to="/">Inicio</Link>  
          </li>
          <li>
            <Link to="/Escritorio">Escritorio</Link>  
          </li>
          <li>
            <Link to="Lamparas">Lámparas</Link> 
          </li>
          <li>
            <Link to="Contacto">Contacto</Link>  
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
