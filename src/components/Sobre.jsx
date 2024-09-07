
import React from 'react';
import '../estilo.css'; 
import sobreImagem from '/img/fiap.png';

const Sobre = () => {
  return (
    
    <div className="sobre">
      <h1>Sobre Nós</h1>
      <div className="image_sobre">
      <img src={sobreImagem} alt="Sobre Nós"  />
      </div>
      <p>
      Bem-vindo à Loja de Esportes, sua principal fonte para equipamentos e roupas esportivas de alta qualidade. Nosso catálogo inclui uma vasta gama de itens, desde roupas esportivas modernas e funcionais até acessórios essenciais para diversas modalidades esportivas.       </p>
    </div>
  );
};

export default Sobre;
