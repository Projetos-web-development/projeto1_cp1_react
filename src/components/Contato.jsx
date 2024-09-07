
import React, { useState } from 'react';
import '../estilo.css'; 
import { handleValidation } from './Error'; 

const Contato = () => {
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
    handleValidation(formData); 
  };

  return (
    <div className="contato">
      <h1>Contato</h1>
      <form className="contato-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange}></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
