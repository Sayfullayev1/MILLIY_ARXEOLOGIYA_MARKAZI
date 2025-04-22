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
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>  
        </div>

    </div>
  );
}
