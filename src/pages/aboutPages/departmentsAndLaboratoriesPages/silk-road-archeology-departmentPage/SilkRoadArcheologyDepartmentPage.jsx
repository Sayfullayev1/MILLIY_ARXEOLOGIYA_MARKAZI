import React, { useContext, useState, useEffect } from 'react';

import style from './slkRoadArcheologyDepartmentPage.module.scss';

import Category from '../../../../components/category/Category';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../../context/LanguageContext';
import getApiUrl from '../../../../api/api';

export default function SilkRoadArcheologyDepartmentPage() {
  
  
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
            uz: "Ipak yo'li arxeologiya bo'limi",
            ru: "Отдел археологии шелкового пути",
            en: "Department of Silk Road Archaeology",
          },
          link: "/",
        },
      ];
  
  
    const listOfEnumerations = [
          {
            uz: "Sug‘orma dehqonchilikning shakllanishi va rivojlanishi, dastlabki kanallarni qurilishi, urbanizatsiya jarayonlari, ilk shaharlarning paydo bo‘lishi, rivojlanishi va ularni tabiiy landshaftga ta’siri. Ilk savdo aloqalarni shakllanishi va rivojlanishi, shahar bilan qishloq va chorvador ko‘chmanchilarning o‘zaro aloqalari.",
            ru: "Суғорма деҳқончиликнинг шаклланиши ва ривожланиши, дастлабки каналларни қурилиши, урбанизация жараёнлари, илк шаҳарларнинг пайдо бўлиши, ривожланиши ва уларни табиий ландшафтга таъсири. Илк савдо алоқаларни шаклланиши ва ривожланиши, шаҳар билан қишлоқ ва чорвадор кўчманчиларнинг ўзаро алоқалари.",
            en: "The formation and development of irrigated agriculture, the construction of early canals, urbanization processes, the emergence and expansion of early cities, and their impact on the natural landscape."
          },
          {
            uz: "- Qadimgi shaharlarning suv havzalari bo‘yicha joylashuvi, xronologiyasi, dastlabki savdo yo‘llarini vujudga kelishi. Yevrosiyo xalqlarining buyuk ko‘chishi va uning O‘zbekistonning qadimgi tarixiy xududlariga ta’siri.  ",
            ru: "- Қадимги шаҳарларнинг сув ҳавзалари бўйича жойлашуви, хронологияси, дастлабки савдо йўлларини вужудга келиши. Евросиё халқларининг буюк кўчиши ва унинг Ўзбекистоннинг қадимги тарихий худудларига таъсири.    ",
            en: "The formation and development of early trade relations, interactions between cities, rural areas, and nomadic pastoralists."
          },
          {
            uz: "- Poytaxt shaharlarning paydo bo‘lishi va transkontinental savdo yo‘llarining tashkil topishi.",
            ru: "- Пойтахт шаҳарларнинг пайдо бўлиши ва трансконтинентал савдо йўлларининг ташкил топиши.",
            en: "The location of ancient cities near water sources, their chronology, and the emergence of early trade routes. The Great Migration of Eurasian peoples and its impact on the ancient historical regions of Uzbekistan."
          },
          {
            uz: "- Ilk o‘rta asrlar  shaharlarining joylanishi, tarixiy topografiyasi va ularni Buyuk ipak yo‘lidagi o‘rni. Turk haqonligini tashkil topishi va uning O‘rta Osiyo xududidagi konfedrativ davlatlar bilan o‘zaro munosabatlari.        ",
            ru: "- Илк ўрта асрлар  шаҳарларининг жойланиши, тарихий топографияси ва уларни Буюк ипак йўлидаги ўрни. Турк ҳақонлигини ташкил топиши ва унинг Ўрта Осиё худудидаги конфедратив давлатлар билан ўзаро муносабатлари.     ",
            en: "The emergence of capital cities and the establishment of transcontinental trade routes."
          },
          {
            uz: "- Buyuk ipak yo‘lining gullab-yashnashida Turk haqonligining va turk-so‘g‘d savdogarlarining o‘rni. Markaziy Osiyo xalqlarining o‘zaro iqtisodiy, madaniy aloqalari va unda so‘g‘d tilining roli.",
            ru: "- Буюк ипак йўлининг гуллаб-яшнашида Турк ҳақонлигининг ва турк-сўғд савдогарларининг ўрни. Марказий Осиё халқларининг ўзаро иқтисодий, маданий алоқалари ва унда сўғд тилининг роли.",
            en: "The historical topography of early medieval cities and their role along the Great Silk Road. The formation of the Turkic Khaganate and its interactions with confederative states in Central Asia."
          },
          {
            uz: "Arablar bosqini va uning shaharlar hayotiga ta’siri. Ushbu davrda shaharlar topografiyasi, ijtimoiy-iqtisodiy hayoti,  turk-so‘g‘d zadogonlarining taqdiri.  ",
            ru: "Араблар босқини ва унинг шаҳарлар ҳаётига таъсири. Ушбу даврда шаҳарлар топографияси, ижтимоий-иқтисодий ҳаёти,  турк-сўғд задогонларининг тақдири.",
            en: "The role of the Turkic Khaganate and Turkic-Sogdian merchants in the flourishing of the Great Silk Road. Economic and cultural interactions among Central Asian peoples and the role of the Sogdian language in these processes."
          },
          {
            uz: "Abbosiylarning Xalifalik hokimiyati uchun kurashi va unda mahalliy zadogonlarni ishtiroki. Abbosiylarni hokimiyat tepasiga kelishi, boshqaruv ishlarida O‘rta Osiyo zadogonlarining ishtiroki. Bu davrdagi shaharlar va ularning topografiyasi.",
            ru: "Аббосийларнинг Халифалик ҳокимияти учун кураши ва унда маҳаллий задогонларни иштироки. Аббосийларни ҳокимият тепасига келиши, бошқарув ишларида Ўрта Осиё задогонларининг иштироки. Бу даврдаги шаҳарлар ва уларнинг топографияси.",
            en: "The Arab conquest and its impact on urban life. The topography of cities during this period, their socio-economic conditions, and the fate of the Turkic-Sogdian aristocracy."
          },
          {
            uz: "Rivojlangan o‘rta asrlar davrida poytaxt shaharlar,  o‘z davrining  “megapolis” shaharlari va ularning atrof muhitga ta’siri. Somoniylar, Qorahoniylar va Xorazmshoxlar davrida shaharlarning tarixiy topografiyasi va ulardagi ijtimoiy-iqtisodiy munosabatlar. Buyuk ipak yo‘lining O‘rta Osiyo orqali o‘tgan yo‘nalishi va uning tarmoqlarida poytaxt shaharlarning o‘rni.",
            ru: "Ривожланган ўрта асрлар даврида пойтахт шаҳарлар,  ўз даврининг “мегаполис” шаҳарлари ва уларнинг атроф муҳитга  таъсири. Сомонийлар, Қораҳонийлар ва Хоразмшохлар даврида шаҳарларнинг тарихий топографияси ва улардаги ижтимоий-иқтисодий муносабатлар.  Буюк ипак йўлининг Ўрта Осиё орқали ўтган йўналиши ва унинг тармоқларида пойтахт шаҳарларнинг ўрни.",
            en: "The Abbasid struggle for power in the Caliphate and the participation of local nobility. The rise of the Abbasids, the involvement of Central Asian nobility in governance, and the topography of cities during this era. Capital cities of the developed medieval period, their status as “megacities” of their time, and their impact on the surrounding environment. The historical topography of cities during the Samanid, Karakhanid, and Khwarezmshah periods, as well as their socio-economic relations. The routes of the Great Silk Road through Central Asia and the role of capital cities in its network."
          },
      ];
  
  
    const [documentsList, setDocumentsList] = useState([]);
  
  
    const api = getApiUrl();
  
    useEffect(() => {
  
      const fetchDocumentsList = async () => {
        try {
            const response = await fetch(`${api}/api/departments-and-laboratories/silk-road-archeology-department-page-data`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDocumentsList(data.data);
            // console.log('Documents list fetched successfully:', data.data);
            
        } catch (error) {
            console.error('Error fetching documents list:', error);
        }
      }
      fetchDocumentsList();
      
    }, [api]);
  
  
  
    const [staffList, setStaffList] = useState([]);
  
    useEffect(() => {
  
      const fetchDocumentsList = async () => {
        try {
            const response = await fetch(`${api}/api/departments-and-laboratories/silk-road-archeology-department-page-staff-data`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStaffList(data.message);
            console.log('Documents list fetched successfully:', data);
            
        } catch (error) {
            console.error('Error fetching documents list:', error);
        }
      }
      fetchDocumentsList();
  
      
      
    }, [api]);
  
    const [ selectedStaffIndex, setSelectedStaffIndex] = useState(false);
  
    function clikGetStaff(index) {
      if ( index === 4 ) {
        setSelectedStaffIndex(true);
      }
    }
  
  
  
  return (
    <div className={style.container}>


        <Category data={menuData}/>


        <main className={style.container__main}>

            <p className={style.container__main__text}>
                {
                    language === "uz" ? "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019 yil 21 sentabrdagi 792-sonli “Arxeologik tadqiqotlarni tubdan takomillashtirish to‘g‘risida” Qarori asosida Milliy arxeologiya markazi (1970 yilda tashkil topgan Ya. Fulomov nomidagi Arxeologik tadqiqotlar instituti qonuniy davomchisi) tashkil etildi. Ushbu Qarorga ko‘ra, Markazda 7 ta bo‘limga asos solindi."
                    : language === "ru" ? "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Ўзбекистон Республикаси Вазирлар Маҳкамасининг 2019 йил 21 сентябрдаги 792-сонли “Археологик тадқиқотларни тубдан такомиллаштириш тўғрисида” Қарори асосида Миллий археология маркази (1970 йилда ташкил топган Я. Fуломов номидаги Археологик тадқиқотлар институти қонуний давомчиси) ташкил этилди. Ушбу Қарорга кўра, Марказда 7 та бўлимга асос солинди."
                    : "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 In accordance with the Resolution of the Cabinet of Ministers of the Republic of Uzbekistan No. 792 dated September 21, 2019, \"On the Fundamental Improvement of Archaeological Research,\" the National Archaeological Center was established (as the legal successor of the Institute of Archaeological Research named after Ya. Fulomov, founded in 1970). According to this resolution, seven departments were established within the Center."
                }

                <br />

                {
                    language === "uz" ? "Ipak yo‘li arxeologiyasi bo‘limi - O‘zbekiston va Markaziy Osiyo mintaqasida qadimiy madaniy aloqa yo‘llarining shakllanishi, savdo va tranzit yo‘llarining mahalliy madaniyatlarga ta’siri o‘rganilib, ibtidoiy davrlarda vujudga kelgan madaniy aloqalar, ilk metallar davrida cho‘l va dasht hududlaridagi ko‘chmanchi chorvador qabilalarning vohalardagi o‘troq aholi bilan munosabatlarining rivojlanishi xususiyatlari tadqiq etiladi. Markaziy Osiyo hududlarida antik davrda savdo aloqalarining rivojlanish jarayonlari Buyuk Ipak yo‘li bilan bevosita bog‘liq xolda urganiladi. Bo‘limning maqsadi – osteoarxeologik, arxeobotanik, arxeozoologik va biokimyoviy tahlillar orqali o‘tmishdagi kishilar turmushini qayta tiklash hamda qadimgi aholining hayotni ta’minlash tizimini interpretatsiya qilishdan iborat."
                    : language === "ru" ? "Ипак йўли археологияси бўлими - Ўзбекистон ва Марказий Осиё минтақасида қадимий маданий алоқа йўлларининг шаклланиши, савдо ва транзит йўлларининг маҳаллий маданиятларга таъсири ўрганилиб, ибтидоий даврларда вужудга келган маданий алоқалар, илк металлар даврида чўл ва дашт ҳудудларидаги кўчманчи чорвадор қабилаларнинг воҳалардаги ўтроқ аҳоли билан муносабатларининг ривожланиши хусусиятлари тадқиқ этилади. Марказий Осиё ҳудудларида антик даврда савдо алоқаларининг ривожланиш жараёнлари Буюк Ипак йўли билан бевосита боғлиқ холда урганилади. Бўлимнинг мақсади – остеоархеологик, археоботаник, археозоологик ва биокимёвий таҳлиллар орқали ўтмишдаги кишилар турмушини қайта тиклаш ҳамда қадимги аҳолининг ҳаётни таъминлаш тизимини интерпретация қилишдан иборат."
                    : "The Department of Silk Road Archaeology studies the formation of ancient cultural communication routes in Uzbekistan and Central Asia, the impact of trade and transit routes on local cultures, as well as the development of cultural interactions that emerged in prehistoric times. It explores the relationship between nomadic pastoralist tribes of desert and steppe regions with settled populations in oases during the early metal age. The development of trade relations in antiquity is also studied in direct connection with the Great Silk Road."
                }

                <br />
                <br />
            </p>

            <p className={style.container__main__text}>
                <span>
                    {
                      language === "uz" ? "Ipak yo‘li arxeologiyasi bo‘limining asosiy tadqiqot yo‘nalishlari quyidagilardan iborat:"
                      : language === "ru" ? "Ипак йўли археологияси бўлимининг асосий тадқиқот йўналишлари қуйидагилардан иборат:"
                      : "Key research areas of the Department of Silk Road Archaeology:"
                    }   
                </span>
                {/* {
                  language === "uz" ? " – osteoarxeologik, arxeobotanik, arxeozoologik va biokimyoviy tahlillar orqali o‘tmishdagi kishilar turmushini qayta tiklash hamda qadimgi aholining hayotni ta’minlash tizimini interpretatsiya qilishdan iborat."
                  : language === "ru" ? " – заключается в реконструкции быта древних людей и интерпретации систем жизнеобеспечения древнего населения посредством остеоархеологических, археоботанических, археозоологических и биохимических анализов."
                  : " – is to reconstruct the lifestyle of ancient people and interpret the life support systems of ancient populations through osteoarchaeological, archaeobotanical, archaeozoological, and biochemical analyses."
                }  

                <br />
                <br />
                {
                  language === "uz" ? "Laboratoriyaning asosiy vazifalari etib quyidagilar belgilangan:"
                  : language === "ru" ? "Основными задачами лаборатории определены следующие:"
                  : "The main tasks of the laboratory are defined as follows:"
                } */}
                
                <br />

            </p>

            <ul className={style.container__main__list}>
              {
                listOfEnumerations.map((item, index) => (
                  <li key={index}>
                    {item[language]}
                    
                    <br />
                  </li>
                ))
              }
            </ul>

            <ul className={style.container__main__info_list}>
              {
                documentsList?.map((item, index) => (
                  <li className={style.container__main__info_item} key={index}>
                    <Link to={item.Link} onClick={() => clikGetStaff(index)}>
                      {item.Name[language]}
                    </Link>
                  </li>
                ))
              }
            </ul>


            <div className={style.container__main__staff}>

              {
                selectedStaffIndex && (
                  <div className={style.container__main__staff_list}>
                    {
                      staffList?.map((item, index) => (
                        <div className={style.container__main__staff_item} key={index}>
                          <div className={style.container__main__staff_photo}>
                            <img src={item.photo} alt={item.Name[language]} />
                          </div>
                          <div className={style.container__main__staff_item_info}>
                            <h2>{item.Name[language]}</h2>

                            <h3>
                              {
                                item.job_title[language]
                              }
                            </h3>

                            <h4>
                              {
                                language === "uz" ? "Ilmiy daraja va unvon:" :
                                language === "ru" ? "Степен, должность:" :
                                "Academic degree and title:"
                              }
                              <br />
                              {
                                item.AcademicDegreeAndTitle[language] || "-"
                              }
                            </h4>
                         
                            <h3>{item.phone}</h3>
                        
                            <h3>{item.email}</h3>
                            <Link to={item.infoLink} target="_blank">
                              {
                                language === "uz" ? "Ilmiy faoliyat to'g'risida" :
                                language === "ru" ? "О научной деятельности" :
                                "About scientific activity"
                              }
                            </Link>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }

            </div>


        </main>


      
    </div>
  )
}

