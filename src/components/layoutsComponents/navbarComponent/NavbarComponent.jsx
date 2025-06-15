import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './navbarComponent.scss';
import { LanguageContext } from '../../../context/LanguageContext';
import SearchComponent from './items/SearchComponent';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null); // Состояние для управления открытием подменю

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/uz'); // Default language can be set to 'en'
    }
  }, [location, navigate]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setIsSearchOpen(false);
    } else {
      // console.log('Search query:', searchQuery); // Placeholder for search logic
    }
  };

  let data = [  
      {
        Name: {
          uz: "Bosh sahifa",
          ru: "Главная",
          en: "Main",
        },
        link: "/",
        items: "",
      },
      {
        Name: {
          uz: "BIZ TO'G'RIMIZDA",
          ru: "О нас",
          en: "About us",
        },
        link: "",
        items: [
          {
            Name: {
              uz: "Markaz tarixi",
              ru: "История центра",
              en: "History of the center",
            },
            link: "/markaz-tarixi",

            extendedItems: ""
          },
          {
            Name: {
              uz: "Bo'limlar va Laboratoriyalar",
              ru: "Отделы и лаборатории",
              en: "Departments and laboratories",
            },
            link: "",

            extendedItems: [
              {
                Name: {
                  uz: "Bioarxeologiya laboratoriyasi",
                  ru: "Лаборатория биотехнологии",
                  en: "Bioarchaeology Laboratory",
                },
                link: "/bioarchaeology-laboratory",
              },
              {
                Name: {
                  uz: "Fanlararo tadqiqotlar bo'limi",
                  ru: "Междисциплинарный отдел",
                  en: "Interdisciplinary Research Department",
                },
                link: "/interdisciplinary-research",
              },
              {
                Name: {
                  uz: "Ipak yo'li arxeologiya bo'limi",
                  ru: "Отдел археологии Шёлкового пути",
                  en: "Silk Road Archaeology Department",
                },
                link: "/silk-road-archeology-department",
              },
              {
                Name: {
                  uz: "Lanshaft arxeologiyasi laboratoriyasi",
                  ru: "Лаборатория ландшафтной археологии",
                  en: "Landscape Archaeology Laboratory",
                },
                link: "/landscape-archeology-laboratory",
              }
            ],
          },
          {
            Name: {
              uz: "Rahbariyat",
              ru: "Руководство",
              en: "Management",
            },
            link: "/management",
            extendedItems: ""
          },
          {
            Name: {
              uz: "Markaz ustavi",
              ru: "Устав центра",
              en: "Charter of the center",
            },
            link: "/charter-of-the-center",

            extendedItems: ""
          },
          {
            Name: {
              uz: "Markaz academiklari",
              ru: "Академики центра",
              en: "Academics of the center",
            },
            link: "/academics-of-the-center",

            extendedItems: ""
          },
        ],
      },
      {
        Name: {
          uz: "Nashrlar",
          ru: "Публикации",
          en: "Publications",

          items: {
            
          },
        },
        link: "/loyihalar",
        items: [
          {
            Name: {
              uz: "Maqolalar",
              ru: "Статьи",
              en: "Articles",
            },
            link: "/articles",

            extendedItems: ""
          },
          {
            Name: {
              uz: "Monografiyalar",
              ru: "Монографии",
              en: "Monographs",
            },
            link: "/monographs",

            extendedItems: ""
          },
          {
            Name: {
              uz: "O'quv qo'llanmalar",
              ru: "Учебные пособия",
              en: "Tutorials",
            },
            link: "/teaching-aids",

            extendedItems: ""
          },
          {
            Name: {
              uz: "O'zbekiston moddiy madaniyati tarixi",
              ru: "История материальной культуры Узбекистана",
              en: "History of material culture of Uzbekistan",
            },
            link: "/uzbekistan-history-of-material-culture",

            extendedItems: ""
          },
        ],
      },
      {
        Name: {
          uz: "Faoliyat",
          ru: "Деятельность",
          en: "Activity",

          items: {

          },
        },
        link: "",
        items: [
            {
              Name: {
                uz: "Eng muhim ilmiy kashfiyotlar",
                ru: "Важнейшие результаты исследований",
                en: "The most important research results",
              },
              link: "/the-most-important-research-results",

              extendedItems: ""
            },
            {
              Name: {
                uz: "Ilim-fan chora-tadbirlar rejasi",
                ru: "План действий по науке",
                en: "Science Action Plan",
              },
              link: "/science-action-plan",

              extendedItems: ""
            },
            {
              Name: {
                uz: "Yosh olimlar kengashi",
                ru: "Совет молодых ученых",
                en: "Board of young scientists",
              },
              link: "/board-of-young-scientists",

              extendedItems: ""
            },
          ]
      },
      {
        Name: {
          uz: "Yangiliklar",
          ru: "Новости",
          en: "News",
        },

        link: "",
        items: [
          {
            Name: {
              uz: "Yangiliklar",
              ru: "Новости",
              en: "News",
            },
            link: "/news",

            extendedItems: ""
          },
          {
            Name: {
              uz: "E'lonlar",
              ru: "Обьявления",
              en: "Ads",
            },
            link: "/ads",

            extendedItems: "",
          },
          {
            Name: {
              uz: "Tadbirlar",
              ru: "События",
              en: "Events",
            },
            link: "/events",

            extendedItems: ""
          },
          {
            Name: {
              uz: "Fotogalereya",
              ru: "Фотогалерея",
              en: "Photo Gallery",
            },
            link: "/photo-gallery",

            extendedItems: ""
          },
        ],
      },
      {
        Name: {
          uz: "Aloqa",
          ru: "Контакты",
          en: "Contacts",
        },

        link: "/contacts",
        items: "",
      },
    ]



    const handleSubmenuClick = (index) => {
      setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index)); // Переключаем состояние
    };
    
    

  return (
    <nav className="navbar">

      <div className='navbar__container'>
      
        <div className='navbar_wrap'>
          <ul className='navbar__list'>
            {
              data?.map((item, index) => {
                return (
                  <li
                    className={`navbar__item ${openSubmenuIndex === index ? 'navbar__item--open' : ''}`}
                    key={index}
                    onMouseEnter={() => setOpenSubmenuIndex(index)} // Для hover
                    onMouseLeave={() => setOpenSubmenuIndex(null)} // Закрытие при уходе мыши
                  >
                    <Link
                      className='navbar__item__link'
                      to={`/${language}${item.link}`}
                      onClick={(e) => {
                        if (item.items && item.items.length > 0) {
                          e.preventDefault(); // Предотвращаем переход только если есть подменю
                          handleSubmenuClick(index); // Для клика
                        }
                      }}
                    >
                      {item.Name[language]}
                    </Link>
                    
                    {item.items && item.items.length > 0 && (
                      <ul className={`navbar__submenu ${openSubmenuIndex === index ? 'navbar__submenu--visible' : ''}`}>
                        {item.items.map((subItem, subIndex) => {

                          return(
                            <li className={`navbar__submenu__item ${subItem.extendedItems.length > 0 ? "navbar__submenu__extended-item" : ""}`} key={subIndex}>
                              <Link
                                className='navbar__submenu__link'
                                to={
                                  subItem.extendedItems.length !== 0
                                    ? undefined
                                    : `/${language}${subItem.link}`
                                }

                              >
                                {subItem.Name[language]}
                              </Link>

                              {subItem.extendedItems && subItem.extendedItems.length > 0 && (
                                <div className='navbar__submenu__extended-item__arrow'>
                                  <i className="fa-solid fa-angle-right"></i>
                                </div>
                              )}
                            
                              {subItem.extendedItems && subItem.extendedItems.length > 0 && (
                                <ul className='navbar__extendedItem__list'>
                                  {
                                    subItem.extendedItems.map((extendedItem, extendedItemIndex) => {
                                      return(
                                        <li className='navbar__extendedItem__item' key={extendedItemIndex}>
                                          <Link className='navbar__extendedItem__link' to={`/${language}${extendedItem.link}`}>
                                            {extendedItem.Name[language]}
                                          </Link>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              )}

                            </li>

                          )

                             
                        })}
                            

                      </ul>
                    )}
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className='navbar__search'> 
          <SearchComponent />  
        </div>
        

      </div>

    </nav>
  );
}
