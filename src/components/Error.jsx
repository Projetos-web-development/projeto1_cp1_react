
import React, { useState } from 'react';
import '../estilo.css'; 

const Error = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Erro! Por favor, preencha todos os campos.');
    } else {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div className="error">
      <h1>Página de Erro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Error;
