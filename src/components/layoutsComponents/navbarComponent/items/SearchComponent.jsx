import React, { useContext, useEffect, useState, useRef } from 'react';
import './searchComponent.scss';
import { LanguageContext } from '../../../../context/LanguageContext';

import getApiUrl from '../../../../api/api';

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SearchComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useContext(LanguageContext); 
  const [inputPlaceholder, setInputPlaceholder] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const lastQueryTime = useRef(0);
  const searchTimeout = useRef(null);

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) {
      setSearchQuery('');
      setResults([]);
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

  // Поиск при вводе
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    const api = getApiUrl();

    // Debounce and throttle: не чаще 1 раза в 3 секунды
    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    searchTimeout.current = setTimeout(() => {
      const now = Date.now();
      if (now - lastQueryTime.current < 1000) {
        return;
      }
      lastQueryTime.current = now;
      setIsLoading(true);
      axios
        .get(`${api}/api/search/${language}?q=${encodeURIComponent(searchQuery)}`)
        .then((response) => {
          // Для отладки: покажите, что реально приходит от сервера
          console.log('Search API response:', response.data);
          setResults((response.data.results || []).slice(0, 5));
        })
        .catch((err) => {
          console.error('Search error:', err);
          setResults([]);
        })
        .finally(() => setIsLoading(false));
    }, 10);

    return () => clearTimeout(searchTimeout.current);
  }, [searchQuery, language]);

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
        {isSearchOpen && searchQuery && (
          <div className="search-component__results">
            {isLoading && <div className="search-component__loading">
                {
                  language === 'uz' ? 'Yuklanmoqda...' : 
                  language === 'ru' ? 'Загрузка...' :
                  'Loading...'
                }
              </div>}
            {!isLoading && results.length === 0 && (
              <div className="search-component__no-results">
                {
                  language === 'uz' ? 'Natija topilmadi' : 
                  language === 'ru' ? 'Нет результатов' :
                  'No results found'
                }
                </div>
            )}
            {!isLoading && results.length > 0 && (
              <ul>
                {results?.map((item, idx) => (
                  <li key={idx} className="search-component__result-item">
                    <Link to={item.pageUrl} className="search-component__result-link">
                      {
                        item.text
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <button
        className="search-component__button"
        onClick={handleSearchToggle}
        aria-label="Toggle search"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
