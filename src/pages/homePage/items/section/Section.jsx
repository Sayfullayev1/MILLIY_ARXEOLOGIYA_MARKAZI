import React, { useContext, useState, useEffect } from 'react';
import './section.scss';
import CountUp from 'react-countup'; // Import CountUp for number animation
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../../context/LanguageContext';



export default function Section() {
    const { language } = useContext(LanguageContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.home-page__section__stats-section');
            if (element && element.getBoundingClientRect().top < window.innerHeight) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const data = [
        {
            icon: <i className="fa-brands fa-envira"></i>,
            number: 10000,
            label: {
                uz: "GERBARIY KOLLEKSIYASI",
                ru: "ГЕРБАРИЙ КОЛЛЕКЦИЯСИ",
                en: "HERBARIUM COLLECTION",
            },
        },
        {
            icon: <i className="fa fa-users"></i>,
            number: 41,
            label: {
                uz: "ILMIY XODIMLAR",
                ru: "УЧЕНЫЕ",
                en: "SCIENTISTS",
            },
        },
        {
            icon: <i className="fa-solid fa-signal"></i>,
            number: 15,
            label: {
                uz: "AKTIV LOYIHALAR",
                ru: "АКТИВНЫЕ ПРОЕКТЫ",
                en: "ACTIVE PROJECTS",
            },
        },
        {
            icon: <i className="fa-solid fa-pen-to-square"></i>,
            number: 700,
            label: {
                uz: "ILMIY MAQOLALAR",
                ru: "НАУЧНЫЕ СТАТЬИ",
                en: "SCIENTIFIC ARTICLES",
            },
        },
    ];

    const resources = [
        {
            icon: <img src="https://botany.uz/wp-content/uploads/2018/04/1473337031usefull1.png" alt="Icon 1" />,
            title: "O‘zbekiston Respublikasi Prezidentining Matbuot xizmati",
            link: "www.press-service.uz",
        },
        {
            icon: <img src="https://botany.uz/wp-content/uploads/2018/04/1473339456usefull2.png" alt="Icon 2" />,
            title: "Interaktiv davlat xizmatlarining Yagona portali",
            link: "my.gov.uz",
        },
        {
            icon: <img src="https://botany.uz/wp-content/uploads/2018/04/1473403144usefull4.png" alt="Icon 3" />,
            title: "O‘zbekiston Respublikasi Fanlar akademiyasi",
            link: "www.academy.uz",
        },
        {
            icon: <img src="https://botany.uz/wp-content/uploads/2018/04/1490955535logo_uz.png" alt="Icon 4" />,
            title: "O‘zbekiston Respublikasining Hukumat portali",
            link: "www.gov.uz",
        },
        {
            icon: <img src="https://botany.uz/wp-content/uploads/2018/04/1473337031usefull1-1.png" alt="Icon 5" />,
            title: "2017-2021 yillarda O‘zbekiston Respublikasi rivojlanishining beshta ustuvor yo‘nalishidagi harakat strategiyasi",
            link: "strategy.gov.uz",
        },
        {
            icon: <img src="https://botany.uz/wp-content/uploads/2018/04/1473339784usefull6-1.png" alt="Icon 6" />,
            title: "O‘zbekiston Respublikasining ochiq axborot portali",
            link: "data.gov.uz",
        },
    ];

    return (
        <section className="home-page__section">
            
            <div className="home-page__section__stats-section">

                <div className="home-page__section__stats-section__wrapper">
                    {
                        data.map((item, index) => (
                            <div className="home-page__section__stat-item" key={index}>
                                {item.icon}
                                <div className="home-page__section__number">
                                    {isVisible ? (
                                        <CountUp start={0} end={item.number} duration={3} separator="" /> // Animate number when visible
                                    ) : (
                                        <span>0</span>
                                    )}
                                </div>
                                <div className="home-page__section__label">{item.label[language]}</div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className='home-page__section__cta__wrapper'>
                <div className="home-page__section__cta">
                    <p className="home-page__section__cta-text">
                        {
                            language === "uz" ? "Sizda savollar mavjudmi yoki Sizga yordam kerakmi?" : language === "ru" ? "У вас есть вопросы или вам нужна помощь?" : "Do you have any questions or need help?"
                        }
                    </p>
                    <button className="home-page__section__cta-button">
                        <Link to={"/"}>
                            {
                                language === "uz" ? "Biz bilan bog‘laning" : language === "ru" ? "Связаться с нами" : "Contact us"
                            }
                        </Link>
                    </button>
                </div>
            </div>

            <div className="home-page__section__resources">
                <h2 className="home-page__section__resources-title">Foydali manbalar</h2>
                <div className="home-page__section__resources-grid">
                    {resources.map((item, index) => (
                        <div className="home-page__section__resources-item" key={index}>
                            <div className="home-page__section__resources-icon">{item.icon}</div>
                            <div>
                                <p className="home-page__section__resources-text">{item.title}</p>
                                <Link
                                    to={`https://${item.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="home-page__section__resources-link"
                                >
                                    {item.link}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
