// src/Home.jsx

import Nav from './components/Nav'; // Certifique-se de que o arquivo Nav.jsx está no mesmo diretório
import Footer from './components/Footer'; // Certifique-se de que o arquivo Footer.jsx está no mesmo diretório
import Produtos from './components/Produtos'; // Certifique-se de que o arquivo Produtos.jsx está no mesmo diretório
import './estilo.css'; // Certifique-se de que o arquivo estilo.css está no mesmo diretório

const Home = () => {
  return (
    <div>

      <Produtos />

    </div>
  );
};

export default Home;
