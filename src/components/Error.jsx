
import React from 'react';
import '../estilo.css'; 

const handleValidation = (formData) => {
  if (!formData.nome || !formData.email || !formData.mensagem) {
    alert('Erro! Por favor, preencha todos os campos.');
    return false;
  }


  alert('Formulário enviado com sucesso!');
  return true;
};

const Error = ({ formData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation(formData);
  };

  return (
    <div className="error">
      <h1>Página de Erro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" />
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Error;
export { handleValidation };
