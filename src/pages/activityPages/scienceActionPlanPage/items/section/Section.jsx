import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '../../../../../context/LanguageContext';



export default function Section() {
  const { language } = useContext(LanguageContext);


  // Пример данных для таблицы
  const tableData = [
    {
      number: 1,
      name: 'Участие в государственной научно-технической экспертизе местного научного потенциала в проведении независимого научного аудита приоритетов развития науки.',
      mechanism: 'Участвовать в формировании технического задания и заявки на научный аудит.',
      period: '2020-2022',
      responsible: 'Директор центра, заместитель директора по научной работе, учёный секретарь, заведующие отделами'
    },
    {
      number: 2,
      name: 'Формирование рейтинговой системы подразделений научной организации',
      mechanism: '1. Утверждение методики расчёта рейтинга кафедр.\n2. Составить и опубликовать рейтинг кафедр.',
      period: 'Ноябрь 2020\nКаждый год в декабре',
      responsible: 'Заместитель директора по научной работе, учёный секретарь, заведующие отделами'
    },
  ];

  return (
    <section className={styles.container}>
      <h3>
        {
          language === 'uz'
          ? 'Илм-фанни 2030 йилгача ривожлантириш концепциясини Ўзбекистон Республикаси Фанлар академияси Миллий археология марказида 2020-2022 йилларда амалга оширилувчи ишлар бўйича чора-тадбирлар'
          : language === 'ru'
          ? 'Концепция развития науки до 2030 г. Меры, которые необходимо принять в Национальном центре археологии Академии наук Республики Узбекистан в 2020-2022 гг.'
          : 'Concept for the development of science until 2030. Measures to be taken at the National Center of Archeology of the Academy of Sciences of the Republic of Uzbekistan in 2020-2022.'
        }
      </h3>

      <h2 className={styles.planTitle}>
        {
          language === 'uz'
          ? 'РЕЖАСИ'
          : language === 'ru'
          ? 'ПЛАН'
          : 'PROGRAMM'
        }
      </h2>

      <div className={styles.tableWrapper}>
        <table className={styles.planTable}>
          <thead>
            <tr>
              <th>№</th>
              <th>Название мероприятия</th>
              <th>Механизм реализации</th>
              <th>Срок реализации</th>
              <th>Исполнители и ответственные лица</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.number}</td>
                <td>{row.name}</td>
                <td>
                  {row.mechanism.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </td>
                <td>
                  {row.period.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </td>
                <td>{row.responsible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
