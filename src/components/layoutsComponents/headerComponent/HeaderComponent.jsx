import React, { useContext, useState } from 'react';
import './headerComponent.scss';

import { LanguageContext } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

import logoImage from '../../../images/logoImage/605db5a8b7a81.png';
import Menu from './items/menu/Menu';

export default function HeaderComponent() {
  const { language } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);


  const toggleMenu = () => {
    setIsDisabled(true);
    setMenuOpen(!menuOpen);

    setTimeout(() => {
      setIsDisabled(false); // Включаем кнопку через 1 секунду
    }, 1000);
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <Link to={`/${language}`}>
            <img src={logoImage} alt="Логотип" />
          </Link>
        </div>

        <h1 className='header__title'>
          O'zbekiston Respublikasi Fanlar akademiyasi
          <span className='header__subtitle'>MILLIY ARXEOLOGIYA MARKAZI</span>
        </h1>
      </div>

      <div className='menu-button_wrapper'>
        <button
          className={`menu-button ${menuOpen ? 'menu-button__open' : ''}`}
          disabled={isDisabled}
          onClick={toggleMenu}
        >
          <span className={`menu-button__line ${menuOpen ? "menu-button__line__animation-true" : "menu-button__line__animation-false"}`}></span>
          <span className={`menu-button__line ${menuOpen ? "menu-button__line__animation-true" : "menu-button__line__animation-false"}`}></span>
          <span className={`menu-button__line ${menuOpen ? "menu-button__line__animation-true" : "menu-button__line__animation-false"}`}></span>
        </button>
      </div>

      {<Menu Bedeutung={ menuOpen } />}

    </header>
  );
}
