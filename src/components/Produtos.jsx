import '../estilo.css'; // Importa o CSS

const Produtos=()=> {
  return (
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
  );
};

export default Produtos;

