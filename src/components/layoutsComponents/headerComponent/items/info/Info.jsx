import React, { useContext } from 'react'
import './info.scss'

import { Link } from 'react-router-dom'
import { LanguageContext } from '../../../../../context/LanguageContext';


export default function Info() {
    const { language } = useContext(LanguageContext);

                    
  return (
    <div className='header__info'>

        <div className='header__info-item'>
            <div className='header__info-icon'>
                <i className="fa-solid fa-phone"></i>
            </div>
            <div className='header__info-text'>
                    <h1>
                        {language === 'uz' ? 'Biz bilan bog\'laning' : language === 'ru' ? 'Свяжитесь с нами' : 'Contact us '}
                    </h1>
                <span>(+998 71) 262-37-95</span>
            </div>
        </div>

        <div className='header__info-item'>
            <div className='header__info-icon'>
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className='header__info-text'>
                <h1>
                    {language === 'uz' ? 'Ish vaqti' : language === 'ru' ? 'Время работы' : 'Working hours'}
                </h1>
                <span>Dsh - Jum: 09:00 - 18:00</span>
            </div>
        </div>

        <div className='header__info-item'>
            <button className='header__info-button'>
                <Link className='header__info-link'>
                    {language === 'uz' ? 'Biz bilan bog\'laning' : language === 'ru' ? 'Свяжитесь с нами' : 'Contact us '}
                </Link>
            </button>
        </div>

    </div>
  )
}
