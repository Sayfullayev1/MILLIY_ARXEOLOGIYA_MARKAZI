import React, { useContext } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует
import { LanguageContext } from '../../../../../context/LanguageContext';

export default function Section(Data) {
  const { language } = useContext(LanguageContext);

  const newsData = {
    id: 1,
    title: 'Новость 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. v Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vvv v Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: '2023-10-01',
    image: 'https://picsum.photos/300/180?random=1',
    link: '/news/1',
  };

  const newsListData = [
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
      id: 3,
      title: 'Новость 3',
      description: 'Краткое описание новости 3.',
      date: '2023-10-03',
      image: 'https://picsum.photos/300/180?random=3',
      link: '/news/3',
    },
    {
      id: 3,
      title: 'Новость 3',
      description: 'Краткое описание новости 3.',
      date: '2023-10-03',
      image: 'https://picsum.photos/300/180?random=3',
      link: '/news/3',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{newsData.title}</h2>
        <div className={styles.imgWrapper}>
          <img className={styles.big_image} src={newsData.image} alt={newsData.title} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.description}>{newsData.description}</p>
        </div>
      </div>

      <div className={styles.cardListWrapper}>
        {newsListData.map((news) => (
          <div key={news.id} className={styles.card}>
            <img src={news.image} alt={news.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{news.title}</h3>
              <p className={styles.cardDescription}>{news.description}</p>
              <p className={styles.cardDate}>{new Date(news.date).toLocaleDateString()}</p>
              <a href={news.link} className={styles.cardLink}>Read more</a>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
