import React, { useContext } from 'react';
import './main.scss';
import Category from '../../../../../components/category/Category';
import { LanguageContext } from '../../../../../context/LanguageContext';



import peopleImg1 from '../../../../../public/images/managementImages/image 1.svg';
import peopleImg2 from '../../../../../public/images/managementImages/image 1 (1).svg';
import peopleImg3 from '../../../../../public/images/managementImages/image 1 (2).svg';
import peopleImg4 from '../../../../../public/images/managementImages/image 1 (3).svg';
import peopleImg5 from '../../../../../public/images/managementImages/image 1 (4).svg';
import peopleImg6 from '../../../../../public/images/managementImages/image 1 (5).svg';
import peopleImg7 from '../../../../../public/images/managementImages/image 1 (6).svg';
import peopleImg8 from '../../../../../public/images/managementImages/image 1 (7).svg';
import { Link } from 'react-router-dom';



export default function Main() {

  const { language } = useContext(LanguageContext);


  const menuData = [
    {
      text: {
        uz: 'Bosh sahifa',
        ru: 'Главная',
        en: 'Main',
      },
      link: '/',
    },
    {
      text: {
        uz: 'Rahbariyat',
        ru: 'Руководство',
        en: 'Management',
      },
      link: '/',
    },
  ];


  const managementData = [
    {
      Name: {
        uz: "Maqsudov Farhod Alijonovich",
        ru: "Максудов Фарход",
        en: "Maksudov Farhod",
      },
      job_title: {
        uz: "Markaz Direktori",
        ru: "Директор Центра",
        en: "Director of the Center",
      },
      Contact: {
        uz: "Telefon: +9989-71 262-95-31 +998-71 262-64-62",
        ru: "Телефон: +9989-71 262-95-31 +998-71 262-64-62",
        en: "Phone: +9989-71 262-95-31 +998-71 262-64-62",
      },
      workTime: {
        uz: "Ish vaqti: Dush-Juma 08-00 dan 11-00 gacha",
        ru: "Время работы: Пн-Пт 08-00 до 11-00",
        en: "Work time: Mon-Fri 08-00 to 11-00",
      },
      email: "f.maqsudov@archaeology.uz",
      img: peopleImg1,
    },
    {
      Name: {
        uz: "Murodaliyev Raxmonali Xaydarali o‘g‘li",
        ru: "Муродалийев Рахмонали",
        en: "Murodaliyev Rakhmonali",
      },
      job_title: {
        uz: "Ilmiy ishlar bo’yicha direktor o’rinbosari",
        ru: "Заместитель директора по науки",
        en: "Deputy Director for Science",
      },
      Contact: {
        uz: "Telefon: +998-71-262-95-31 +998-71-262-95-31",
        ru: "Телефон: +998-71-262-95-31 +998-71-262-95-31",
        en: "Phone: +998-71-262-95-31 +998-71-262-95-31",
      },
      workTime: {
        uz: "Ish vaqti: Dush-Juma 09-00 dan 17-00 gacha",
        ru: "Время работы: Пн-Пт 09-00 до 17-00",
        en: "Work time: Mon-Fri 09-00 to 17-00",
      },
      email: "r.murodillayev@archaeology.uz",
      img: peopleImg2,
    },
    {
      Name: {
        uz: "Murodova Durdonaxon Habibulloyevna ",
        ru: "Муродова Дурдонахон Хабибуллоевна",
        en: "Murodova Durdonax Habibulloyevna",
      },
      job_title: {
        uz: "Ilmiy kotib",
        ru: "Ученый секретарь",
        en: "Scientific Secretary",
      },
      Contact: {
        uz: "Telefon: +998-71 262-52-36",
        ru: "Телефон: +998-71 262-52-36",
        en: "Phone: +998-71 262-52-36",
      },
      workTime: {
        uz: "Ish vaqti: Dush-Juma 09-00 dan 17-00 gacha",
        ru: "Время работы: Пн-Пт 09-00 до 17-00",
        en: "Work time: Mon-Fri 09-00 to 17-00",
      },
      email: "d.murodova@archaeology.uz",
      img: peopleImg3,
    },
    {
      Name: {
        uz: "G’ulomov Farxod Ismailovich",
        ru: "Гуломов Фарход",
        en: "Gulomov Farkhod",
      },
      job_title: {
        uz: "Xujalik bulimi boshlig’i",
        ru: "Начальник отдела по хозяйству",
        en: "Head of the Household Department",
      },
      Contact: {
        uz: "Telefon: +998-71 262-73-57",
        ru: "Телефон: +998-71 262-73-57",
        en: "Phone: +998-71 262-73-57",
      },
      workTime: {
        uz: "Ish vaqti: Dush-Juma 09-00 dan 17-00 gacha",
        ru: "Время работы: Пн-Пт 09-00 до 17-00",
        en: "Work time: Mon-Fri 09-00 to 17-00",
      },
      email: "d.murodova@archaeology.uz",

      img: peopleImg4,
    },
    {
      Name: {
        uz: "Raximov Xojiakbar Yusuf o’g’li",
        ru: "Рахимов Ходжиакбар",
        en: "Rakhimov Khodjiakbar",
      },
      job_title: {
        uz: "Bosh Bug’alter",
        ru: "Главный бухгалтер",
        en: "Chief Accountant",
      },
      Contact: {
        uz: "Telefon: +998-71 262-18-17",
        ru: "Телефон: +998-71 262-18-17",
        en: "Phone: +998-71 262-18-17",
      },
      workTime: {
        uz: "Ish vaqti: Dush-Juma 09-00 dan 17-00 gacha",
        ru: "Время работы: Пн-Пт 09-00 до 17-00",
        en: "Work time: Mon-Fri 09-00 to 17-00",
      },
      email: "x.rahimov@archaeology.uz",
      img: peopleImg5,
    },
    {
      Name: {
        uz: "Masaidova Marg’uba",
        ru: "Масаидова Маргуба Муратовна",
        en: "Masaidova Marguba Muratovna",
      },
      job_title: {
        uz: "Bosh yurist-konsulti",
        ru: "Главный юрисконсульт",
        en: "General Counsel",
      },
      Contact: {
        uz: "Telefon: +998-71 262-75-44",
        ru: "Телефон: +998-71 262-75-44",
        en: "Phone: +998-71 262-75-44",
      },
      workTime: {
        uz: "Ish vaqti: Juma 09-00 dan 11-00 gacha",
        ru: "Время работы: Пт 09-00 до 17-00",
        en: "Work time: Fri 09-00 to 17-00",
      },
      email: "prudbreezr@mail.ru",
      img: peopleImg6,
    },
    {
      Name: {
        uz: "Saliknazarova Nasiba",
        ru: "Саликназарова Насиба",
        en: "Saliknazarova Nasiba",
      },
      job_title: {
        uz: "Xodimlar bo`yicha inspektor",
        ru: "Инспектор по кадрам",
        en: "Inspector for Personnel",
      },
      Contact: {
        uz: "Telefon: +998-71 262-56-94",
        ru: "Телефон: +998-71 262-56-94",
        en: "Phone: +998-71 262-56-94",
      },
      workTime: {
        uz: "Ish vaqti: Dush-Juma 09-00 dan 17-00 gacha",
        ru: "Время работы: Пн-Пт 09-00 до 17-00",
        en: "Work time: Mon-Fri 09-00 to 17-00",
      },
      email: "s.nasiba@archaeology.uz",
      img: peopleImg7,
    },
    {
      Name: {
        uz: "Rahmonov Murodillo Xamidullo o‘g‘li",
        ru: "Рахмонов Муродилло",
        en: "Rakhmonov Murodillo",
      },
      job_title: {
        uz: "Axborot komunikatsiya texnologiyalari mutaxassisi",
        ru: "Специалист в области информационных и коммуникационных технологий",
        en: "Information and Communication Technology Specialist",
      },
      Contact: {
        uz: "Telefon: +998-99 531-50-34",
        ru: "Телефон: +998-99 531-50-34",
        en: "Phone: +998-99 531-50-34",
      },
      workTime: {
        uz: "Ish vaqti: Dush-Juma 09-00 dan 17-00 gacha",
        ru: "Время работы: Пн-Пт 09-00 до 17-00",
        en: "Work time: Mon-Fri 09-00 to 17-00",
      },
      email: "murodillorahmonov@mail.ru",
      img: peopleImg8,
    },
  ]


  return (
    <main className="management-page__main">

      
      <Category data={menuData} />


      <section className="management-page__main__section">

        <ul>
          {
            managementData.map((item, index) => {
              return (
                <li key={index} className="management-page__main__section__item">
                  <div className="management-page__main__section__item__img">
                    <img src={item.img} alt={item.Name[language]} />
                  </div>
                  <div className="management-page__main__section__item__text">
                    <h3>{item.job_title[language]}</h3>
                    <p className="job-title">{item.Name[language] }</p>
                    <div className="contact-info">
                      <p>{item.workTime[language]}</p>
                      <p>{item.Contact[language]}</p>
                      <p>
                        {language === 'uz' ? "Email: " : language === 'ru' ? "Электронная почта: " : "Email: "}
                        <Link to={`mailto:${item.email}`}>{item.email}</Link>
                      </p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        
      </section>


    </main>
  );
}
