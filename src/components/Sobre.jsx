// src/components/Sobre.jsx
import React from 'react';
import '../estilo.css'; // Importa o CSS
import sobreImagem from '/img/fiap.png'; // Substitua pelo caminho correto da imagem

const Sobre = () => {
  return (
    <div>
      <h1>Sobre Nós</h1>
      <img src={sobreImagem} alt="Sobre Nós" className="image" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus erat eget nulla luctus, ac volutpat elit gravida. Vestibulum aliquet, eros et facilisis faucibus, est libero vestibulum justo, sit amet ultrices metus elit sed felis. Integer consectetur, mi ut pretium dictum, libero lectus varius urna, eu tempor elit ligula vel sapien. Proin sit amet felis et tortor dictum aliquet. Fusce lacinia purus eget velit dignissim scelerisque. Morbi sollicitudin ligula non varius dignissim. Praesent nec facilisis metus, eget consectetur tortor. Aenean euismod, dui sit amet posuere cursus, justo eros tincidunt orci, a consequat nunc ligula sed lorem. Nulla facilisi. Vestibulum et consectetur urna. Curabitur auctor ex sed justo luctus, a feugiat erat tempor. Suspendisse potenti. Nulla at sollicitudin ligula.
      </p>
    </div>
  );
};

export default Sobre;
