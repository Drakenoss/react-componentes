import React from 'react';

/**
 * Componente Header
 * Contiene la navegación principal y el logo de la aplicación
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Mi Aplicación</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#inicio" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#acerca" className="nav-link">Acerca</a>
            </li>
            <li className="nav-item">
              <a href="#servicios" className="nav-link">Servicios</a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
