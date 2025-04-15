import React, { useContext, useState } from 'react';
import './headerComponent.scss';

import { LanguageContext } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

import logoImage from '../../../public/images/logoImage/605db5a8b7a81.png';
import Menu from './items/menu/Menu';
import Topbar from './items/topbar/Topbar';
import Info from './items/info/Info';


export default function HeaderComponent() {
  const { language } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);


  const toggleMenu = () => {
    setIsDisabled(true);
    setMenuOpen(!menuOpen);

    const element = document.querySelector('.container'); // Найти элемент
    if (element) {
      element.style.overflow = 'hidden';
    }

    // Удаление скролла страницы
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    document.documentElement.style.overflow = menuOpen ? 'auto' : 'hidden';

    setTimeout(() => {
      setIsDisabled(false); // Включаем кнопку через 1 секунду
    }, 1000);
  };


  const LogoTitle = {
    uz: {
      title: "O'zbekiston Respublikasi Fanlar akademiyasi",
      subtitle: "MILLIY ARXEOLOGIYA MARKAZI",
    },
    ru: {
      title: "Академия наук Республики Узбекистан",
      subtitle: "НАЦИОНАЛЬНЫЙ ЦЕНТР АРХЕОЛОГИИ",
    },
    en: {
      title: "Academy of Sciences of the Republic of Uzbekistan",
      subtitle: "NATIONAL ARCHAEOLOGY CENTER",
    },
  };


  return (
    <header className='header'>

      <div className='header__topbar_wrapper'>
        <Topbar/>
      </div>

      <div className='header_wrapper'>

        <div className='header__container'>
          <div className='header__logo'>
            <Link to={`/${language}`}>
              <img src={logoImage} alt="Логотип" />
            </Link>
          </div>

          <h1 className='header__title'>
            {LogoTitle[language].title}
            <span className='header__subtitle'>{LogoTitle[language].subtitle}</span>
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

        <div className='header__info-wrapper'>
          <Info/>
        </div>

        {/* <div className='header__menu-wrapper'> */}
          {<Menu Bedeutung={ menuOpen } />}
        {/* </div> */}

      </div>
    </header>
  );
}
