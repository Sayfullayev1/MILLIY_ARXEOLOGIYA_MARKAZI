import React, { use, useContext, useEffect, useState } from 'react'
import "./topbar.scss"

import { LanguageContext } from '../../../../../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Topbar() {

    const { language, changeLanguage } = useContext(LanguageContext); // Убедитесь, что эта функция доступна в контексте
    const navigate = useNavigate();
    const location = useLocation();

    const [locationText, setLocationText] = useState();


    useEffect(() => {
        if (language === "uz") { 
          setLocationText("100125, Toshkent shahar Do`rmon yo`li ko`chasi, 32-uy");
        } else if (language === "ru") {
            setLocationText("100125, Ташкент, ул. Дормон, 32");
        } else if (language === "en") {
          setLocationText("100125, Tashkent, Dormon street, 32");
        }
    }, [language])




    const handleLanguageChange = (lang, item) => {
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

        // itme.target.classList.add('active-lang');

        item.target.style.color = '#2e2e2e';
        item.target.style.textDecoration = 'none';
        

        
      };



  return (
    <div className='header__topbar' >

        <div className='header__topbar__text'>

            <h1 onClick={(e) => handleLanguageChange("uz",e) } >O`zbekcha</h1>

            <h1 onClick={(e) => handleLanguageChange("ru",e) } >Русский</h1>
            
            <h1 onClick={(e) => handleLanguageChange("en",e) } >English</h1>

        </div>

        <div className='header__topbar__socials'>
            <p className='header__topbar__socials__text'>
                <i className="bi bi-house-fill"></i> {locationText}
            </p>
        </div>

    </div>
  )
}
