import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Инициализируем состояние из localStorage или ставим 'uz' по умолчанию
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('userLanguage') || 'uz';
  });

  useEffect(() => {
    // 2. Достаем язык из URL
    const pathLanguage = location.pathname.match(/\/([a-z]{2})/)?.[1];

    if (pathLanguage) {
      if (pathLanguage !== language) {
        setLanguage(pathLanguage);
        localStorage.setItem('userLanguage', pathLanguage); // Сохраняем, если изменился путь
      }
    } else {
      // Если в URL нет языка (например, просто /about), редиректим на сохраненный
      navigate(`/${language}${location.pathname}`);
    }
  }, [location.pathname]);

  const changeLanguage = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
      localStorage.setItem('userLanguage', lang); // 3. Сохраняем при ручном переключении
      
      // Заменяем текущий язык в пути на новый
      const newPath = location.pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
      navigate(newPath);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
