import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Contacto.css";

function Contact() {
  return (
    <div className="contact-container">
      <Link to="/" className="no-style-link">
        <h1 className="app-title">Contacto</h1>
      </Link>
      <p className="from-home">¿Tienes alguna pregunta? ¡Contáctanos!</p>

      <div className="contact-info">
        <p>Correo electrónico: <a href="mailto:fromhomme@gmail.com">fromhomme@gmail.com</a></p>
        <p>Teléfono: +52 55 1234 5678</p>
      </div>

      <Link to="/" className="no-style-link">
        <button className="view-contact-button">
          <strong>Inicio</strong>
        </button>
      </Link>
    </div>
  );
}

export default Contact;