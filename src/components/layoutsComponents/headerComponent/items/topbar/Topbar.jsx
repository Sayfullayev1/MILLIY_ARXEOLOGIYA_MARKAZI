import React, { useContext } from 'react'
import "./topbar.scss"

import { LanguageContext } from '../../../../../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Topbar() {

    const { changeLanguage } = useContext(LanguageContext); // Убедитесь, что эта функция доступна в контексте
    const navigate = useNavigate();
    const location = useLocation();


    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
      
        const pathParts = location.pathname.split("/");
      
        // Если в пути есть язык, заменяем его
        if (lang === "uz") {
          // Если выбран узбекский, удаляем его из URL, если он есть
          if (pathParts[1]?.match(/^[a-z]{2}$/)) {
            pathParts.splice(1, 1); // Удаляем первый элемент (язык)
          }
        } else {
          // Если язык уже есть, заменяем его
          if (pathParts[1]?.match(/^[a-z]{2}$/)) {
            pathParts[1] = lang;
          } else {
            // Если языка нет, добавляем его
            pathParts.splice(1, 0, lang);
          }
        }
      
        const newPath = pathParts.join("/");
        navigate(newPath);
      };


  return (
    <div className='header__topbar' >
        
        <div className='header__topbar__text'>

            <h1 onClick={() => handleLanguageChange("uz") } >O`zbekcha</h1>

            <h1 onClick={() => handleLanguageChange("ru") } >Русский</h1>
            
            <h1 onClick={() => handleLanguageChange("en") } >English</h1>

        </div>

        <div className='header__topbar__socials'>
            <p className='header__topbar__socials__text'>
                <i class="bi bi-house-fill"></i> 100125, Toshkent shahar Do`rmon yo`li ko`chasi, 32-uy
            </p>
        </div>

    </div>
  )
}
