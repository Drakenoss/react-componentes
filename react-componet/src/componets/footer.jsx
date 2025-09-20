import React from 'react';

/**
 * Componente Footer
 * Contiene información de contacto y enlaces adicionales
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Mi Aplicación</h4>
          <p>
            Una aplicación React moderna construida con Vite.
            Desarrollada con las mejores prácticas y tecnologías actuales.
          </p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#acerca">Acerca</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <div className="contact-info">
            <p>📧 info@miaplicacion.com</p>
            <p>📱 +1 (555) 123-4567</p>
            <p>📍 Ciudad, País</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a href="#facebook" className="social-link">Facebook</a>
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#linkedin" className="social-link">LinkedIn</a>
            <a href="#github" className="social-link">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#privacidad">Política de Privacidad</a>
            <a href="#terminos">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
