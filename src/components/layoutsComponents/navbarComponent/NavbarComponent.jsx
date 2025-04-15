import React, { useContext, useEffect, useState } from 'react';
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

  console.log(language);
  

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/uz'); // Default language can be set to 'en'
    }
  }, [location, navigate]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setIsSearchOpen(false);
    } else {
      console.log('Search query:', searchQuery); // Placeholder for search logic
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
          uz: "Tuzilma",
          ru: "Структура",
          en: "Structure",
        },
        link: "/tuzilma",
        items: [
          {
            Name: {
              uz: "Biz haqimizda",
              ru: "О нас",
              en: "About us",
            },
            link: "/tuzilma/biz-haqimizda",
          },
          {
            Name: {
              uz: "Rahbariyat",
              ru: "Руководство",
              en: "Management",
            },
            link: "/tuzilma/rahbariyat",
          },
          {
            Name: {
              uz: "Institutt Tuzulmasi",
              ru: "Структура института",
              en: "Institute structure",
            },
            link: "/tuzilma/kafedralar",
          },
        ],
        
      },
      {
        Name: {
          uz: "ILMIY FAOLIYAT",
          ru: "Научная деятельность",
          en: "Scientific activity",

          items: {
            
          },
        },
        link: "/ilmiy-faoliyat",
        items: "",
      },
      {
        Name: {
          uz: "Loyihalar",
          ru: "Проекты",
          en: "Projects",

          items: {
            
          },
        },
        link: "/loyihalar",
        items: "",
      },
      {
        Name: {
          uz: "Aloqa",
          ru: "Контакты",
          en: "Contacts",
        },

        link: "/aloqa",
        items: "",
      },
      {
        Name: {
          uz: "Yangiliklar",
          ru: "Новости",
          en: "News",
        },

        link: "/yangiliklar",
        items: "",
      },
      {
        Name: {
          uz: "Qo'shimcha",
          ru: "Дополнительно",
          en: "Additional",
        },

        link: "/qoshimcha",
        items: "",
      },
    ]



  return (
    <nav className="navbar">

      <div className='navbar__container'>
      
        <div className='navbar_wrap'>
          <ul className='navbar__list'>
            {
              data?.map((item, index) => {
                return (
                  <li className='navbar__item' key={index}>
                    <Link className='navbar__item__link' to={`/${language}${item.link}`}>
                      {item.Name[language]}
                    </Link>
                    {item.items && item.items.length > 0 && ( 
                      <ul className='navbar__submenu'>
                        {
                          item.items.map((subItem, subIndex) => (
                            <li className='navbar__submenu__item' key={subIndex}>
                              <Link className='navbar__submenu__link' to={`/${language}${subItem.link}`}>
                                {subItem.Name[language]}
                              </Link>
                            </li>
                          ))
                        }
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
