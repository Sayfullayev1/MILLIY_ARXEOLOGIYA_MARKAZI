import React, { useContext, useState, useEffect } from 'react';
import './section.scss';
import { LanguageContext } from '../../../../context/LanguageContext';



export default function Section() {
    const { language } = useContext(LanguageContext);
    

    return (
        <section className="contacts-page__section">
        
        <div className="contacts-page__section__formWrapper">

            <h2 className="contacts-page__section__formWrapper__title">{`${language === "uz" ? "Xabar yuborish" : language === "ru" ? "Отправить сообщение" : "Send a message"}`}</h2>
            

            <form className="contacts-page__section__form">
          
              <div className="contacts-page__section__form-group">
                <input
                  type="text"
                  id="name"
                  className="contacts-page__section__form__input"
                  placeholder={
                    language === "uz"
                    ? "Ismingiz *"
                    : language === "ru"
                    ? "Ваше имя *"
                    : "Your name *"
                  }
                />
              </div>

              <div className="contacts-page__section__form-group">
                <input type="email" id="email" className="contacts-page__section__form__input" 
                  placeholder={
                    language === "uz"
                    ? "E-mailingiz *"
                    : language === "ru"
                    ? "Ваш e-mail *"
                    : "Your e-mail *"
                  }
                />
              </div>

              <div className="contacts-page__section__form-group">
                <input type="text" id="theme" className="contacts-page__section__form__input" 
                  placeholder={
                    language === "uz"
                    ? "Mavzu *"
                    : language === "ru"
                    ? "Tема *"
                    : "Theme *"
                  }
                />
              </div>

              <div className="contacts-page__section__form-group">
                <textarea id="message" className="contacts-page__section__form__textarea"
                  placeholder={
                    language === "uz"
                    ? "Matn *"
                    : language === "ru"
                    ? "Текст *"
                    : "Text *"
                  }
                ></textarea>
              </div>
              

              <div>
                <button type="submit" className="contacts-page__section__form__button">
                  {
                      language === "uz"
                      ? "Xabar yuborish"
                      : language === "ru"
                      ? "Отправить сообщение"
                      : "Send a message"
                    }
                </button>
              </div>
            </form>
            
        </div>

        <div className="contacts-page__section____info">
          <h2 className="contacts-page__section____info__title">Наши контакты</h2>
          <p className="contacts-page__section____info__address">
            Ташкент, Мирзо Улугбекский район, ул.М.Улугбека 81, Узбекистан, 100060 
          </p>
          <p className="contacts-page__section____info__contact__phone">  
            Телефоны:
            <br />
            +998 71 262-64-62; 
            <br />
            +998 71 233-95-31 
          </p>
          <p className="contacts-page__section____info__contact__fax">
            Факс: +998 71 262-64-62 
          </p>
          <p className="contacts-page__section____info__contact__email">
            E-mail: 	uzarchae@academy.uz
            {/* <br /> */}
            {/* info-botany@academy.uz */}
          </p>
        </div>

        </section>
    );
}
