// src/components/Nav.jsx
import React from 'react';
import '../estilo.css';

const Nav = ({ setPage }) => {
  return (
    <header className="header">
      Loja de Esportes -     
      <nav className="nav-links">
        <a onClick={() => setPage('home')}>Home</a> | 
        <a onClick={() => setPage('contato')}>Contato</a> | 
        <a onClick={() => setPage('sobre')}>Sobre</a> 
      </nav>
    </header>
  );
};

export default Nav;
