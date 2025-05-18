import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '../../../../../context/LanguageContext';

export default function Section() {
  const { language } = useContext(LanguageContext);

  const data = [
    {
      title: {
        uz: "O‘zbekistonning tosh davri madaniyati",
        ru: "Культура каменного века Узбекистана",
        en: "",
      },
      text: [
        {
          uz: "",
          ru: "Получены новые археологические и палеоантропологические материалы, раскрывающие древнейшую историю народов Узбекистана и Центральной Азии в целом.",
          en: "",
        },
        {
          uz: "",
          ru: "С открытием и исследованием ферганотропов история заселения Центральной Азии была удревнена на 1,5 млн. лет...",
          en: "",
        },
        {
          uz: "",
          ru: "В области изучения палеолитических стоянок Кульбулак, Кутурбулак, Зирабулак проведена четкая технико-типологическая классификация технокомплексов...",
          en: "",
        },
      ],
    },
  ];

  return (
    <section className={styles.container}>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title[language]}</h1>

          <ul>
            {item.text.map((textItem, i) => (
              <li key={i}>
                <p>{textItem[language]}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
