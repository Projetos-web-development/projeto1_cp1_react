// src/BaseSite.jsx
import React from 'react';
import './BaseSite.css'; // Importa o arquivo CSS

const BaseSite = () => {
  return (
    <div>
      <header className="header">Loja de Esportes</header>
      
      <main className="main">
        <div className="item">
          <p>
            Camiseta Esportiva
            <img src="/img/camiseta_esportiva.png" alt="Camiseta Esportiva" className="image" />
          </p>
        </div>
        
        <div className="item">
          <p>
            Tênis de Corrida
            <img src="/img/tenis_corrida.png" alt="Tênis de Corrida" className="image" />
          </p>
        </div>

        <div className="item">
          <p>
            Colchonete de Yoga
            <img src="/img/colchonete_yoga.png" alt="Colchonete de Yoga" className="image" />
          </p>
        </div>

        <div className="item">
          <p>
            Bola de Futebol
            <img src="/img/bola_futebol.png" alt="Bola de Futebol" className="image" />
          </p>
        </div>

        <div className="item">
          <p>
            Prancha de Surfe
            <img src="/img/prancha_surf.png" alt="Prancha de Surfe" className="image" />
          </p>
        </div>

        <div className="item">
          <p>
            Óculos de Natação
            <img src="/img/oculos_natacao.png" alt="Óculos de Natação" className="image" />
          </p>
        </div>

        <div className="item">
          <p>
            Capacetes Esportivos
            <img src="/img/capacete.png" alt="Capacetes Esportivos" className="image" />
          </p>
        </div>

        <div className="item">
          <p>
            Apitos
            <img src="/img/apito.png" alt="Apitos" className="image" />
          </p>
        </div>
      </main>

      <footer className="footer">
        Integrantes: <br />
        Alexandre Silva de Faria - RM:558270
        <br />
        Renato Françoso Babichak - RM556942
      </footer>
    </div>
  );
}

export default BaseSite;