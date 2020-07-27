import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';

import Button from '../Button';

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="ASDevFlix" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
