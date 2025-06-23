import React, { useEffect, useState, useContext } from 'react';
import './menu.scss';
import Topbar from '../topbar/Topbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../../../../context/LanguageContext';

function Menu( toggleMenu ) {

  const [menuOpen, setMenuOpen] = useState("");
  const [i, setI] = useState(0);
  const location = useLocation();
  const { language, changeLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [pressIndex , setPressIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const [openExtendedIndex, setOpenExtendedIndex] = useState({}); // { [parentIndex]: extendedIndex }

  
  useEffect(() => {

    if (i > 0) {
      if (!toggleMenu?.Bedeutung) {   
        setMenuOpen("menu-item__inactive");
      } else if (toggleMenu?.Bedeutung) {
        setMenuOpen("menu-item__active");
      }
    }
    setI(i+1);
  }, [toggleMenu?.Bedeutung]);


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
          uz: "Biz to'g'rimizda",
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
            link: "/history-of-the-center",
            extendedItems: ""
          },
          {
            Name: {
              uz: "Bo'limlar va Laboratoriyalar",
              ru: "Отделы и лаборатории",
              en: "Departments and laboratories",
            },
            link: "",

            // Вложенные отделы и лаборатории должны быть внутри extendedItems
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
        link: "",
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
              uz: "Chorshanba o'qishlari",
              ru: "Чтения по средам",
              en: "Wednesday-readings",
            },
            link: "/wednesday-readings",

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

  const handleLanguageChange = (lang, item) => {
    changeLanguage(lang);
  
    const pathParts = location.pathname.split("/");
  
    if (pathParts[1]?.match(/^[a-z]{2}$/)) {
      pathParts[1] = lang;
    } else {
      // Если языка нет, добавляем его
      pathParts.splice(1, 0, lang);
    }
  
    const newPath = pathParts.join("/");
    navigate(newPath);
    // itme.target.classList.add('active-lang');
    item.target.style.color = '#2e2e2e';
    item.target.style.textDecoration = 'none';
    
    
  };
  
  function viewPage(index) {
    setPressIndex(index);
  }

  function handleSubmenuToggle(index) {
    setOpenSubIndex(openSubIndex === index ? null : index);
    setOpenExtendedIndex({}); // Закрыть все вложние при смене основного
  }

  function handleExtendedToggle(parentIndex, extIndex) {
    setOpenExtendedIndex(prev => ({
      ...prev,
      [parentIndex]: prev[parentIndex] === extIndex ? null : extIndex
    }));
  }

  return (
    <nav className={`menu-item ${menuOpen}`}>
      <div className='menu-item__text'>
        <h1 onClick={(e) => handleLanguageChange("uz", e)}>O`zbekcha</h1>
        <h1 onClick={(e) => handleLanguageChange("ru", e)}>Русский</h1>
        <h1 onClick={(e) => handleLanguageChange("en", e)}>English</h1>
      </div>
      <div className='menu-item__container'>
        <ul className='menu-item__list'>
          {data.map((item, index) => {
            if (item.link === "") {
              return (
                <li key={index} className='menu-item__list__item'>
                  <a
                    onClick={() => handleSubmenuToggle(index)}
                    className='menu-item__list__item__link'
                    style={{ cursor: "pointer" }}
                  >
                    {item.Name[language]}
                    <span className={`menu-item__list__item__link__icon${openSubIndex === index ? " menu-item__list__item__link__icon--open" : ""}`}>
                      <i className='fa fa-angle-right'></i>
                    </span>
                  </a>
                  <div>
                    <ul className={`menu-item__list__item__extended${openSubIndex === index ? " menu-item__list__item__extended__active" : ""}`}>
                      {item.items && item.items.map((subItem, subIndex) => {
                        if (subItem.extendedItems && subItem.extendedItems.length > 0) {
                          return (
                            <li key={subIndex} className='menu-item__list__item__extended__item'>
                              <a
                                onClick={e => { e.stopPropagation(); handleExtendedToggle(index, subIndex); }}
                                className='menu-item__list__item__extended__item__link'
                                style={{ cursor: "pointer" }}
                              >
                                {subItem.Name[language]}
                                <span className={`menu-item__list__item__link__icon${openExtendedIndex[index] === subIndex ? " menu-item__list__item__link__icon--open" : ""}`}>
                                  <i className='fa fa-angle-right'></i>
                                </span>
                              </a>
                              <ul className={`menu-item__list__item__extended__item__extended${openExtendedIndex[index] === subIndex ? "__active" : ""}`}>
                                {subItem.extendedItems.map((extendedItem, extendedIndex) => (
                                  <li key={extendedIndex} className='menu-item__list__item__extended__item__extended_item'>
                                    <a
                                      href={extendedItem.link === "/" ? `/${language}` : `/${language}${extendedItem.link}`}
                                      className='menu-item__list__item__extended__item__extended_item_link'
                                      style={{ textDecoration: "none" }}
                                    >
                                      {extendedItem.Name[language]}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        } else {
                          return (
                            <li key={subIndex} className='menu-item__list__item__extended_item'>
                              <a
                                href={subItem.link === "" ? `/${language}` : `/${language}${subItem.link}`}
                                className='menu-item__list__item_extended_item_link'
                                style={{ textDecoration: "none" }}
                              >
                                {subItem.Name[language]}
                              </a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </li>
              )
            } else {
              return (
                <li key={index} className='menu-item__list__item'>
                  <a
                    href={item.link === "/" ? `/${language}` : `/${language}${item.link}`}
                    className={`menu-item__list__item__link${pressIndex === index ? " menu-item__list__item__link__turn" : ""}`}
                    style={{ textDecoration: "none" }}
                  >
                    {item.Name[language]}
                  </a>
                </li>
              )
            }
          })}
        </ul>
      </div>
      
    </nav>
  );
}

export default Menu;