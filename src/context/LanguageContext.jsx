import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [language, setLanguage] = useState('uz'); // Default language is 'uz'

  useEffect(() => {
    const pathLanguage = location.pathname.match(/\/([a-z]{2})/)?.[1] || 'uz';
    if (pathLanguage !== language) {
      setLanguage(pathLanguage);
    }
  }, [location.pathname, language]);

  const changeLanguage = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
      navigate(`/${lang}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

