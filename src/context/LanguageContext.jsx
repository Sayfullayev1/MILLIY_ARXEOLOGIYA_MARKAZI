import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Проверяем: если путь начинается с /[a-z]{2}, то это язык, иначе узбекский
  const getLangFromPath = (path) => {
    const match = path.match(/^\/([a-z]{2})/);
    return match ? match[1] : 'uz';
  };

  const [language, setLanguage] = useState(getLangFromPath(location.pathname));

  useEffect(() => {
    const currentLang = getLangFromPath(location.pathname);
    if (currentLang !== language) {
      setLanguage(currentLang);
    }
  }, [location.pathname]);

  const changeLanguage = (lang) => {
    if (lang === language) return;

    const basePath = location.pathname.replace(/^\/[a-z]{2}/, '') || '/';
    let newPath;
    if (lang === 'uz') {
      newPath = basePath;
    } else {
      newPath = `/${lang}${basePath}`;
    }

    // Очистка от двойных слешей (//) и переход
    navigate(newPath.replace(/\/+/g, '/'));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
