import React, { useContext, useEffect, useState } from 'react'
import style from './teachingAidsPage.module.scss';

import Category from '../../../components/category/Category';
import { LanguageContext } from '../../../context/LanguageContext';

import axios from 'axios';

import getApiUrl from '../../../api/api';



export default function UzbekistanHistoryOfMaterialCulturePage() {

    const { language } = useContext(LanguageContext);

    const menuData = [
        {
            text: {
                uz: "Bosh sahifa",
                ru: "Главная",
                en: "Main",
            },
            link: "/",
        },
        {
            text: {
                uz: "O‘zbekiston tarixi va madaniyati",
                ru: "История и культура Узбекистана",
                en: "History and culture of Uzbekistan",
            },
            link: "/uzbekistan-history-and-culture",
        },
    ];



    const [listOfDocuments, setListOfDocuments] = useState([])

    const api = getApiUrl();
    

    useEffect(() => {
        axios.get(`${api}/api/teaching-aids-data`)
            .then(response => {
                // Handle the response data
                console.log(response.data);
                setListOfDocuments(response.data.data)
            })
            .catch(error => {
                // Handle the error
                console.error('There was an error fetching the documents!', error);
            });
    }, [])
    
  return (
    <div className={style.container}>

        <Category data={menuData}/>


        <main className={style.main}>

            <ul className={style.list}>
                {listOfDocuments.map((item, index) => (
                    <li key={index} className={style.item}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="your-link-class">
                            {item.text[language]}
                        </a>
                    </li>
                ))}
            </ul>

        </main>
      
    </div>
  )
}
