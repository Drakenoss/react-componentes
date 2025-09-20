import React from 'react';
import Header from './componets/header';
import Sidebar from './componets/sidebar';
import MainContent from './componets/maincontent';
import Footer from './componets/footer';
import './assets/styles.css';

/**
 * Componente principal de la aplicación
 * Organiza la estructura general de la página con todos los componentes
 */
function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
