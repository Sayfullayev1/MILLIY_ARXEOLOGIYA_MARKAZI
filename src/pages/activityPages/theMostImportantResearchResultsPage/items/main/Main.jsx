import React from 'react';
import './main.scss';
import Category from '../../../../../components/category/Category';
import Section from '../section/Section';

export default function Main() {
  
  const menuData = [
    {
      text: {
        uz: "Bosh sahifa",
        ru: "Главная",
        en: "Main",
      },
      link: "/",
    },
    {
      text: {
        uz: "Eng muhim ilmiy kashfiyotlar",
        ru: "Важнейшие результаты исследований",
        en: "The most important research results",
      },
      link: "/",
    },
  ];

  return (
    <main className="contacts-page__main">

      <Category data={menuData} />

      <Section />

    </main>
  );
}
