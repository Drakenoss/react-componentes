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
                React es una biblioteca de JavaScript de código abierto y el estándar de la industria para crear interfaces de usuario (UI) interactivas, tanto en web como en móviles. Se basa en un modelo de componentes reutilizables, utiliza un DOM virtual para la eficiencia del rendimiento y es conocida por su simplicidad, flexibilidad y un gran ecosistema de herramientas y soporte comunitario. 
              </p>
            </article>
            <article className="content-article">
              <h4>Artículo 2</h4>
              <p>
                React permite la creación de componentes reutilizables, algo que, para la fecha de su estreno, era muy innovador. Los componentes facilitan enormemente el desarrollo y el mantenimiento de las páginas y aplicaciones web. Podemos imaginarlos como piezas de un Lego o bloques de un Jenga.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
