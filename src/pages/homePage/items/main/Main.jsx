import React, { useContext } from 'react'
import './main.scss'

import Carousel from '../carousel/Carousel';


import { LanguageContext } from '../../../../context/LanguageContext';

import  titleLogo1  from '../../../../public/images/homePageMainDataImages/Component 1.svg';
import  titleLogo2  from '../../../../public/images/homePageMainDataImages/Component 2.svg';
import  titleLogo3  from '../../../../public/images/homePageMainDataImages/Component 3.svg';
import News from '../news/News';



export default function Main() {
    const { language } = useContext(LanguageContext);

    let data = [
        {
            title: {
                uz: "Baholash va tahlil qilish",
                ru: "Оценка и анализ",
                en: "Evaluation and analysis",
            },
            text: {
                uz: "O‘zbekiston florasi o‘rganilganlik bilimlarini baholash va tahlil qilish, o‘simlik resurslaridan barqaror foydalanishning ilmiy asoslarini tadqiq qilish va ishlab chiqish",
                ru: "Изучение флоры Узбекистана, оценка и анализ знаний, полученных в результате исследований, научные основы устойчивого использования растительных ресурсов",
                en: "Study of the flora of Uzbekistan, evaluation and analysis of the knowledge obtained as a result of research, scientific foundations for the sustainable use of plant resources",
            },
            img: titleLogo1,
        },
        {
            title: {
                uz: "Rivojlantirish",
                ru: "Развитие",
                en: "Development",
            },
            text: {
                uz: "Molekulyar filogeniya va sistematikani rivojlantirish, noyob va yo‘qolib ketish xavfi ostidagi O‘zbekiston florasi turlarini elektron shtrix kodlash va pasportini shakllantirish",
                ru: "Развитие молекулярной филогении и систематики, электронное кодирование и паспортизация видов флоры Узбекистана, находящихся под угрозой исчезновения",
                en: "Development of molecular phylogeny and systematics, electronic coding and passporting of species of the flora of Uzbekistan that are endangered",
            },
            img: titleLogo2,
        },
        {
            title: {
                uz: "Ekotizimlarning hozirgi holatini baholash",
                ru: "Оценка современного состояния экосистем",
                en: "Assessment of the current state of ecosystems",
            },
            text: {
                uz: "Antropogen omillar va cho‘llanish jarayonlari ta’siri ostida ekotizimlarning hozirgi holatini baholash, qurg‘oqchil ekotizimlardan mamlakatning asosiy yaylovlari sifatida barqaror foydalanishning ilmiy asoslarini ishlab chiqish",
                ru: "Оценка современного состояния экосистем под воздействием антропогенных факторов и процессов опустынивания, разработка научных основ устойчивого использования засушливых экосистем в качестве основных пастбищ страны",
                en: "Assessment of the current state of ecosystems under the influence of anthropogenic factors and desertification processes, development of scientific foundations for the sustainable use of dry ecosystems as the main pastures of the country",
            },
            img: titleLogo3,
        },
    ];


  return (
    <div className='home-page__main'>

        <div className='home-page__main__carousel_wrapper'>
            <Carousel/>
        </div>

        <div className='home-page__main__items'>
            {data.map((item, index) => (
                <div className='home-page__main__item' key={index}>
                    <div className='home-page__main__item__img-wrapper'>
                        <img src={item.img} alt="" className='home-page__main__item__img' />
                    </div>
                    <h1 className='home-page__main__item__title'>{item.title[language]}</h1>
                    <p className='home-page__main__item__text'>{item.text[language]}</p>
                </div>
            ))}
        </div>

        <div className='home-page__main__news__wrapper'>

            <h1>Yahdiliklar</h1>

            <News/>
        </div>
            
    </div>
  )
}
