import React, { useContext } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует
import { LanguageContext } from '../../../../../context/LanguageContext';
import { Link } from 'react-router-dom';

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
  {
    id: 7,
    title: 'Новость 7',
    description: 'Краткое описание новости 7.',
    date: '2023-10-07',
    image: 'https://picsum.photos/300/180?random=7',
    link: '/news/7',
  },
  {
    id: 8,
    title: 'Новость 8',
    description: 'Краткое описание новости 8.',
    date: '2023-10-08',
    image: 'https://picsum.photos/300/180?random=8',
    link: '/news/8',
  },
  {
    id: 9,
    title: 'Новость 9',
    description: 'Краткое описание новости 9.',
    date: '2023-10-09',
    image: 'https://picsum.photos/300/180?random=9',
    link: '/news/9',
  },
  {
    id: 10,
    title: 'Новость 10',
    description: 'Краткое описание новости 10.',
    date: '2023-10-10',
    image: 'https://picsum.photos/300/180?random=10',
    link: '/news/10',
  },
];

export default function Section() {
  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.container}>
      
      <div className={styles.grid}>
        {newsData.map((news) => (
          <div key={news.id} className={styles.card}>
            <img src={news.image} alt={news.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{news.title}</h2>
              <p className={styles.cardDate}>{new Date(news.date).toLocaleDateString()}</p>
              <p className={styles.cardDescription}>{news.description}</p>
              <Link to={`/${language}${news.link}`} className={styles.cardButton}>
                {language === 'uz' ? 'Batafsil' : language === 'ru' ? 'Подробнее' : 'Read more'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
