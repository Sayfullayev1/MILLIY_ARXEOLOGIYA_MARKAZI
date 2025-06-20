import React, { useContext } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует

export default function Section(news) {

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        {news.newsData?.content && (
          <div
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: news.newsData.content }}
          />
        )}
      </div>
    </section>
  );
}
