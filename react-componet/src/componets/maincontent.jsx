import React from 'react';

/**
 * Componente MainContent
 * Contiene el contenido principal de la aplicación
 */
const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        <section className="hero">
          <h2>Bienvenido a Mi Aplicación</h2>
          <p className="hero-description">
            Esta es una aplicación React moderna construida con Vite.
            Explora las diferentes secciones usando la navegación superior o el menú lateral.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Comenzar</button>
            <button className="btn btn-secondary">Saber Más</button>
          </div>
        </section>

        <section className="features">
          <h3>Características</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Rápido</h4>
              <p>Desarrollado con Vite para una experiencia de desarrollo ultrarrápida.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h4>Responsive</h4>
              <p>Diseño adaptativo que funciona en todos los dispositivos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h4>Moderno</h4>
              <p>Utiliza las últimas tecnologías de React y mejores prácticas.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h3>Contenido Principal</h3>
          <div className="content-grid">
            <article className="content-article">
              <h4>Artículo 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris.
              </p>
            </article>
            <article className="content-article">
              <h4>Artículo 2</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
