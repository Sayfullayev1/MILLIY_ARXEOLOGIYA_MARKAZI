import React, { useContext } from 'react';
import './footerComponent.scss';

import { LanguageContext } from '../../../context/LanguageContext';

export default function FooterComponent() {

  const { language } = useContext(LanguageContext);


  const links = [
    {
      href: "https://botany.uz/uz/category/science_ads/",
      text: "Dissertatsiya himoyalari va avtoreferatlar",
      multiline: true,
    },
    {
      href: "https://botany.uz/uz/category/lab/goel/",
      text: "Geobotanika laboratoriyasi",
    },
    {
      href: "https://botany.uz/uz/category/lab/lmfb/",
      text: "Molekulyar filogeniya va biogeografiya laboratoriyasi",
      multiline: true,
    },
    {
      href: "https://botany.uz/uz/category/lab/lfu/",
      text: "O'zbekiston florasi laboratoriyasi",
    },
    {
      href: "https://botany.uz/uz/category/lab/lma/",
      text: "Mikologiya va algologiya laboratoriyasi",
    },
  ];
  
  // Data for bottom navigation
  const bottomNavLinks = [
    { text: "Bosh sahifa", href: null },
    { text: "Biz haqimizda", href: "https://botany.uz/uz/about/" },
    { text: "Aloqa", href: "https://botany.uz/uz/contacts/" },
  ];

  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4 className="footer__title">MA’LUMOT</h4>
          <p>O‘zbekiston Respublikasi Fanlar akademiyasi Botanika instituti</p>
          <p>O‘zbekiston Respublikasi Prezidentining 2017 yil 4 sentyabrdagi «O‘zbekiston Respublikasi Fanlar akademiyasi Botanika instituti va Zoologiya instituti faoliyatini takomillashtirish choralari bo‘yicha» №PQ-3256-sonli Qaroriga asosan tashkil etilgan.</p>
          <div className="footer__social">
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">HAVOLALAR</h4>
          <ul className="footer__links">
            <li>› Dissertatsiya himoyalari va avtoreferatlar</li>
            <li>› Geobotanika laboratoriyasi</li>
            <li>› Molekulyar filogeniya va biogeografiya laboratoriyasi</li>
            <li>› O‘zbekiston florasi laboratoriyasi</li>
            <li>› Mikologiya va algologiya laboratoriyasi</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">SAYTDAN IZLASH</h4>
          <input type="text" className="footer__search" placeholder="Search..." />
          <img src="https://botany.uz/wp-content/uploads/2024/05/Yoshlar-va-biznesni-qo%E2%80%98llab-quvvatlash-yili.jpg" alt="2024" className="footer__image" />
        </div>

        <div className="footer__section">
          <h4 className="footer__title">MANZIL</h4>
          <p>100125, Toshkent, Do‘rmon yo‘li ko‘chasi 32</p>
          <p>Telefonlar: (99871) 262-37-95, 262-37-89, 262-37-97, 262-38-23</p>
          <p>Faks: (99871) 262-79-38</p>
          <p>E-mail: botany@academy.uz, info-botany@academy.uz</p>
        </div>
      </div>
    </footer>
  );
}
