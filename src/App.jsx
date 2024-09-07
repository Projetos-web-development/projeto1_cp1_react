// src/App.jsx
import React, { useState } from 'react';
import Home from './Home';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Error from './components/Error';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'contato':
        return <Contato />;
      case 'sobre':
        return <Sobre />;
      case 'error':
        return <Error />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header className="header">
        Loja de Esportes -     
        <nav>
          <a href="#home" onClick={() => setPage('home')}>Home</a> | 
          <a href="#contato" onClick={() => setPage('contato')}>Contato</a> | 
          <a href="#sobre" onClick={() => setPage('sobre')}>Sobre</a> | 
          <a href="#error" onClick={() => setPage('error')}>Erro</a>
        </nav>
      </header>
      <main>
      {renderPage()}
      </main>
      <footer className="footer">
        2024        

      </footer>
    </div>
  );
};

export default App;
