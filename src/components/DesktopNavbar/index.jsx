import React from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import logo from '../../assets/img/logo.png';

import './styles.scss';

const DesktopNavbar = () => {
  return (
    <div className="desktop">
      <nav className="desktop__navbar">
        <img className="desktop__logo" src={logo} alt="logo" />
        <Link to="/accueil">
          <div className="link-add">Accueil</div>
        </Link>
        <Link to="/add">
          <button className="link-add">Créer un évent</button>
        </Link>
        <Link to="/profil">
          <button className="link-add">Profil</button>
        </Link>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
