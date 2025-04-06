import React, { useEffect, useState } from 'react';
import './menu.scss';

function Menu( toggleMenu ) {

  const [menuOpen, setMenuOpen] = useState("");
  const [i, setI] = useState(0);
  

  
  useEffect(() => {

    if (i > 0) {
      if (!toggleMenu?.Bedeutung) {
        setMenuOpen("menu-item__inactive");
      } else if (toggleMenu?.Bedeutung) {
        setMenuOpen("menu-item__active");
      }
    }

    setI(i+1);
  }, [toggleMenu?.Bedeutung]);
  

  return (
    <nav className={`menu-item ${menuOpen}`}>
      <ul className='menu-item__list'>
        <h1 className='menu-item__item'>Home</h1>
        <h1 className='menu-item__item'>About</h1>
        <h1 className='menu-item__item'>Services</h1>     
        <h1 className='menu-item__item'>Contact</h1>
      </ul>
    </nav>
  );
}

export default Menu;