import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import ProductCard from './components/ProductCard';
import Escritorio from './pages/Escritorio'; 
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
    <Router> 
      <div id="root" className={darkMode ? "dark" : "light"}>
        <Topbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="app-container"> 
              <h1 className="app-title">Homme</h1>
              <p className="from-home">FROM HOME</p>
              <p className="from-home">Bienvenue</p>
              <section className="product-section">
                <div className="product-grid">
                  <ProductCard
                    title="Lampara Vintage"
                    description="Selecta"
                    price="499.00 MXN"
                    imageUrl="https://casapajaros.com.mx/cdn/shop/products/Lamparaescritoriovintage_1024x.jpg?v=1600816440"
                  />
                    <Link to="/escritorio"className="no-style-link">
                    <button className="view-products-button">
                   <strong>Explorar productos</strong>
                   </button>
                 </Link>
                </div>
              </section>
            </div>
          } />
          <Route path="/escritorio" element={<Escritorio />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
