import React from 'react';
import './main.scss';
import Category from '../../../../../components/category/Category';
import Section from '../section/Section';

export default function Main() {
  
  const newsData = [
      {
        id: 1,
        title: 'Новость 1',
        description: 'Краткое описание новости 1.',
        date: '2023-10-01',
        image: 'https://picsum.photos/300/180?random=1',
        link: '/news/1',
      },
      {
        id: 2,
        title: 'Новость 2',
        description: 'Краткое описание новости 2.',
        date: '2023-10-02',
        image: 'https://picsum.photos/300/180?random=2',
        link: '/news/2',
      },
      {
        id: 3,
        title: 'Новость 3',
        description: 'Краткое описание новости 3.',
        date: '2023-10-03',
        image: 'https://picsum.photos/300/180?random=3',
        link: '/news/3',
      },
      {
        id: 4,
        title: 'Новость 4',
        description: 'Краткое описание новости 4.',
        date: '2023-10-04',
        image: 'https://picsum.photos/300/180?random=4',
        link: '/news/4',
      },
      {
        id: 5,
        title: 'Новость 5',
        description: 'Краткое описание новости 5.',
        date: '2023-10-05',
        image: 'https://picsum.photos/300/180?random=5',
        link: '/news/5',
      },
      {
        id: 6,
        title: 'Новость 6',
        description: 'Краткое описание новости 6.',
        date: '2023-10-06',
        image: 'https://picsum.photos/300/180?random=6',
        link: '/news/6',
      },
    ];


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
        uz: "Yangiliklar",
        ru: "Новости",
        en: "News",
      },
      link: "/news",
    },
    {
      text: {
        uz: "Yangiliklar",
        ru: "Новости",
        en: "News",
      },
      link: `/news/${newsData[0].id}`,
    },
  ];


  

  return (
    <main className="contacts-page__main">
      <Category data={menuData} />
      <Section newsData = {newsData}/>
    </main>
  );
}
