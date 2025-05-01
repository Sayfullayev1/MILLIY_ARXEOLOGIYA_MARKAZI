import React, { useContext, useEffect, useState } from 'react';
import './searchComponent.scss';
import { LanguageContext } from '../../../../context/LanguageContext';

export default function SearchComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useContext(LanguageContext); 
  const [inputPlaceholder, setInputPlaceholder] = useState('');

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  useEffect(() => {
    switch (language) {
      case 'uz':
        setInputPlaceholder('Qidiruv...');
        break;
      case 'ru':
        setInputPlaceholder('Поиск...');
        break;
      default:
        setInputPlaceholder('Search...');
    }
  }, [language]);

  return (
    <div className="search-component">
      <div className="search-component__input-wrapper">
        <input
          type="text"
          className={`search-component__input ${isSearchOpen ? 'open' : ''}`}
          placeholder={inputPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        className="search-component__button"
        onClick={() => handleSearchToggle()}
        aria-label="Toggle search"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
  