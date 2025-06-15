import React, { useContext } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует

import { LanguageContext } from '../../../../../context/LanguageContext';
import Container from '../../../../../components/container/Container';

export default function Section(Data) {
  const { language } = useContext(LanguageContext);



  const articlesListData = [
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
    <div className={styles.container}>


      <Container>


        <section className={styles.section}>
          
        </section>


      </Container>
     

    </div>
  );
}
