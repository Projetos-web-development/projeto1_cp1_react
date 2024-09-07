
import React, { useState } from 'react';
import Home from './Home';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Error from './components/Error';
import Nav from './components/Nav'; 
import Footer from './components/Footer'; 

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
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Nav setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
