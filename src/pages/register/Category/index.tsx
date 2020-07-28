import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';

const RegisterCategory = () => {
  return (
    <BaseTemplate>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">Ir para a Home</Link>
    </BaseTemplate>
  );
};

export default RegisterCategory;
