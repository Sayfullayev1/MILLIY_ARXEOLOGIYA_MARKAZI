import React, { useContext, useEffect } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует
import { LanguageContext } from '../../../../../context/LanguageContext';



export default function Section() {
  const { language } = useContext(LanguageContext);



  return (
    <section className={styles.container}>
      
      акаак
          
    </section>
  );
}
