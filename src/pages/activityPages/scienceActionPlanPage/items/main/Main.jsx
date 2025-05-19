import React from 'react';
import style from './main.module.scss';
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
        uz: "Ilim-fan chora-tadbirlar rejasi",
        ru: "План действий по науке",
        en: "Science Action Plan",
      },
      link: "/",
    },
  ];

  return (
    <main className={style.main}>

      <Category data={menuData} />

      <Section />

    </main>
  );
}
