import React from 'react';

/**
 * Componente Sidebar
 * Contiene el menú lateral con enlaces de navegación secundarios
 */
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Menú</h3>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="#dashboard" className="sidebar-link">
              <span className="sidebar-icon">📊</span>
              Dashboard
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#proyectos" className="sidebar-link">
              <span className="sidebar-icon">📁</span>
              Proyectos
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#tareas" className="sidebar-link">
              <span className="sidebar-icon">✅</span>
              Tareas
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#mensajes" className="sidebar-link">
              <span className="sidebar-icon">💬</span>
              Mensajes
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#configuracion" className="sidebar-link">
              <span className="sidebar-icon">⚙️</span>
              Configuración
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
