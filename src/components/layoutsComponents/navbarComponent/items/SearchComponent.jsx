import React, { use, useContext, useEffect, useState } from 'react';
import './searchComponent.scss';
import { LanguageContext } from '../../../../context/LanguageContext';

export default function SearchComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useContext(LanguageContext); 
  const [ inputLearning, setInputLearning ] = useState('');

  const handleSearch = () => {
    if (!isSearchOpen) {
        setIsSearchOpen(true);
    } else if( isSearchOpen && searchQuery.trim() === '') {
      setIsSearchOpen(false);
    }

  };


  useEffect(() => {
    if (language === 'uz') {
        setInputLearning('Qidiruv...')
    }   
    else if (language === 'ru') {
        setInputLearning('Поиск...');
    } else if (language === 'en') {
        setInputLearning('Search...');
    }
  }, [language])

  return (
    <div className="search-component">

        <div className='search-component__input-wrapper'>
            <input
              type="text"
              className={`search-component__input search-component__input__${isSearchOpen ? 'open' : 'close'}`}
              placeholder={inputLearning}
            //   value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>

        <div className='search-component__button-wrapper'>
            <button
                className="search-component__button"
                onClick={() => handleSearch()}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.65" y1="16.65" x2="21" y2="21" />
                </svg>
            </button>  
        </div>

    </div>
  );
}
