import React, { use, useContext, useEffect, useState } from 'react'
import './news.scss'

import { LanguageContext } from '../../../../context/LanguageContext';
import { Await, Link } from 'react-router-dom';


import axios from 'axios';
import getApiUrl from '../../../../api/api';



export default function News() {
    const [newsListData, setNewsListData] = useState([]);

    const [news, setNews] = useState([]);
    const [ads, setAds] = useState([]);
    const [events, setEvents] = useState([]);
    

    const dataType = [
            {
                title: {
                    uz: "Yangiliklar",
                    ru: "Новости",
                    en: "News"
                },
                link: '/news',
                },
            {
                title: {
                    uz: "E'lonlar",
                    ru: "Объявления",
                    en: "Ads"
                },
                link: '/ads',
            },
            {
                title: {
                    uz: "Tadbirlar",
                    ru: "События",
                    en: "Events"
                },
                link: '/events',
            }
        ]


    const { language } = useContext(LanguageContext);


    useEffect(() => {
        const api = getApiUrl();

        for (let index = 0; index < dataType.length; index++) {
            async function fetchAll() {
                try {
                    const response = await axios.post(`${api}/api${dataType[index].link}/get-item`, { page: 0 });
                    if (response.data.success) {
                        if (dataType[index].link === '/news') {
                            const formattedData = response.data.data.map(item => ({
                                ...item,
                                tupe: dataType[index].title,
                                typeof: 'news',
                            }));
                            setNews(formattedData);
                        } else if (dataType[index].link === '/ads') {
                            const formattedData = response.data.data.map(item => ({
                                ...item,
                                tupe: dataType[index].title,
                                typeof: 'ads',
                            }));
                            setAds(formattedData);
                        } else if (dataType[index].link === '/events') {
                            const formattedData = response.data.data.map(item => ({
                                ...item,
                                tupe: dataType[index].title,
                                typeof: 'event',
                            }));
                            setEvents(formattedData);
                        }
                    } else {
                        console.error('Ошибка при получении элементов :', response.data.message);
                    }
                } catch (error) {
                    console.error('Ошибка при запросе элементов :', error);
                }
            }
            fetchAll();
        }

        

        // if (dataLenght <= 16) {

            // let data = [];
            // data.push(...news);
            // data.push(...ads);
            // data.push(...events);

            // setNewsListData(data);

            // console.log('newsListData', data);
            
            
        // }
        
    }, []);


    useEffect(() => {
        let result = [];
        let n = 0, a = 0, e = 0;
        while (result.length < 12 && (news.length > n || ads.length > a || events.length > e)) {
            // 5 news
            for (let i = 0; i < 5 && n < news.length && result.length < 12; i++) {
                result.push(news[n++]);
            }
            // 2 ads
            for (let i = 0; i < 2 && a < ads.length && result.length < 12; i++) {
                result.push(ads[a++]);
            }
            // 1 event
            if (e < events.length && result.length < 12) {
                result.push(events[e++]);
            }
        }
        setNewsListData(result);
        console.log(result);
        
    }, [news, ads, events]);


    function formatDate(dateStr) {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        if (isNaN(date)) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

  return (
    <div className='home-page__news'>
        {
            newsListData?.map((item, index) => (
                <div className='home-page__news__item' key={index}>
                    <Link className='home-page__news__item__link' to={`${item.typeof}/${item.link}`}>
                        <div className='home-page__news__item__img-wrapper'>
                            <img src={item.image} alt="" className='home-page__news__item__img' />
                        </div>
                    </Link>

                    <div className='home-page__news__item__type_link'>
                        <Link to={item.typeof}>
                            {
                                item.tupe[language]
                            }
                        </Link>
                    </div>

                    <p className='home-page__news__item__data'> <i className="fa-regular fa-calendar-days"></i>  {formatDate(item.date)}</p>
                    
                    <Link className='home-page__news__item__link' to={`${item.typeof}/${item.link}`}>
                        <h1 className='home-page__news__item__title'>{item.title[language]}</h1>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
