import React, { useContext } from 'react'
import './news.scss'

import { LanguageContext } from '../../../../context/LanguageContext';
import { Link } from 'react-router-dom';




export default function News() {

    const { language } = useContext(LanguageContext);

    let data = [
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdiz",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        {
            title: {
                uz:"O‘zbekiston florasi laboratoriyasi xodimlari Qarshi davlat universitetida ilmiy-amaliy seminar o‘tkazdi",
                ru: "Сотрудники лаборатории флоры Узбекистана провели научно-практический семинар в Каршинском государственном университете",
                en: "Employees of the Uzbekistan Flora Laboratory held a scientific and practical seminar at Karshi State University",
            },
            data: "07.04.2025",
            img: 'https://picsum.photos/id/1015/400/800',
            link: '/uz/news/1',
        },
        ]
  return (
    <div className='home-page__news'>
        {
            data?.map((item, index) => (
                <div className='home-page__news__item' key={index}>
                    <Link className='home-page__news__item__link' to={item.link}>
                        <div className='home-page__news__item__img-wrapper'>
                            <img src={item.img} alt="" className='home-page__news__item__img' />
                        </div>
                    </Link>

                    <div className='home-page__news__item__type_link'>
                        <Link to={item}>
                            Yangiliklar
                        </Link>
                    </div>

                    <p className='home-page__news__item__data'> <i className="fa-regular fa-calendar-days"></i>  {item.data}</p>
                    
                    <Link className='home-page__news__item__link' to={item.link}>
                        <h1 className='home-page__news__item__title'>{item.title[language]}</h1>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
