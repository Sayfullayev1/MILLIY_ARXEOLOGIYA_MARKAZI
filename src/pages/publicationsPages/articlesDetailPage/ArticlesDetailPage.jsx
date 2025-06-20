import React from 'react';
import styles from './articlesDetailPage.module.scss'; // Убедитесь, что файл articlesDetailPage.module.scss существует


import Main from './items/main/Main';




export default function ArticlesDetailPage() {

  return (
    <div className={styles.wrapper}>
      <Main/>
    </div>
  );
}
