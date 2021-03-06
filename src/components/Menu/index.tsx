import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Menu.css';

import { Button } from '../Button';

const Menu = (): JSX.Element => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="ASDevFlix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
