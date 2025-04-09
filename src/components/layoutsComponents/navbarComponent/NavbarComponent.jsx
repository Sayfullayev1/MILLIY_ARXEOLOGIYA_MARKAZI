import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './navbarComponent.scss';
import { LanguageContext } from '../../../context/LanguageContext';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  console.log(language);
  

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/uz'); // Default language can be set to 'en'
    }
  }, [location, navigate]);


  let data = [  
      {
        Name: {
          uz: "Bosh sahifa",
          ru: "Главная",
          en: "Main",
        },
        link: "/",
      },
      {
        Name: {
          uz: "Bosh sahifa",
          ru: "Главная",
          en: "Main",

          items: {
            
          },
        },
        link: "/about",
      },
    ]



  return (
    <nav className="navbar">
      
      <div>
        <ul>
          {
            data.map((item, index) => {
              return(
                <li>
                  {/* <Link to={`${location.pathname}/${item.link}`}>{item.item[location.link]}</Link> */}
                  {item.Name[language]}
                </li>
              )
            })
          }
        </ul>
      </div>

      <div>dd</div>
      
    </nav>
  );
}
