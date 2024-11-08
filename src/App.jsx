import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; 
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); 
      return newMode;
    });
  };

  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div id="root" className={darkMode ? "dark" : "light"}>
      <Topbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Navbar />
      <div className="app-container"> 
        <h1 className="app-title">Homme</h1>
        <p className="from-home">FROM HOME</p>
        <p className="welcome">Bienvenido</p>
        <section className="product-section">
          <div className="product-grid">
            <ProductCard
              title="Lampara Vintage"
              description="Material: Metal/Madera"
              price="89.00 USD"
              imageUrl="https://casapajaros.com.mx/cdn/shop/products/Lamparaescritoriovintage_1024x.jpg?v=1600816440"
            />
            <button className="view-products-button">
              <strong>Explorar Productos</strong>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
