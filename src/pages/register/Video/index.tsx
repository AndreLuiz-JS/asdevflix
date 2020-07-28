import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';

const RegisterVideo = () => {
  return (
    <BaseTemplate>
      <h1>Cadastro de Vídeos</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </BaseTemplate>
  );
};

export default RegisterVideo;
