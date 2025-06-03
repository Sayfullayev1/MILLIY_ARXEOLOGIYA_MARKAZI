import React, { useContext, useEffect, useState } from 'react'
import './bioarchaeologyLaboratoryPage.scss'
import Category from '../../../../components/category/Category'
import { LanguageContext } from '../../../../context/LanguageContext';
import { Link } from 'react-router-dom';
import getApiUrl from '../../../../api/api';

export default function BioarchaeologyLaboratoryPage() {

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
                uz: "Bioarxeologiya laboratoriyasi",
                ru: "Лаборатория биоархеологии",
                en: "Bioarchaeology laboratory",
              },
              link: "/",
            },
        ];


    const listOfEnumerations = [
      {
        uz: "- respublika bo‘ylab olib borilayotgan arxeologik izlanishlarda tabiiy fanlarning zamonaviy tadqiqot usullarini keng qo‘llaydi;",
        ru: "- широкое применение современных методов естественных наук в археологических исследованиях, проводимых по всей республике;",
        en: "- the wide application of modern methods of natural sciences in archaeological research conducted throughout the republic;",
      },
      {
        uz: "- arxeologik qazishmalar chog‘ida yoki tasodifan topilgan inson osteologik qoldiqlari qayta tiklash orqali paleodemografiya, o‘tmishda yashagan kishining sog‘lig‘i, turmush darajasi va ovqatlanish ratsionini aniqlaydi;",
        ru: "- реконструкция человеческих остатков, найденных во время археологических раскопок или случайных находок, для определения палеодемографических данных, состояния здоровья, уровня жизни и рациона питания древнего человека;",
        en: "- reconstruction of human osteological remains found during archaeological excavations or accidental discoveries to determine paleodemographic data, health status, standard of living, and diet of ancient people;",
      },
      {
        uz: "- arxeologik qazishmalardan chiqqan o‘simlik, urug‘, meva va gul changlarining qoldiqlarini o‘rganish va interpretatsiyalash orqali qadimgi O‘zbekiston florasi, o‘tmish kishilarining ovqatlanish ratsioni, ularning yashash strategiyasi va o‘simlik iqtisodiyotini qayta tiklaydi;",
        ru: "- изучение и интерпретация остатков растений, семян, фруктов и пыльцы, найденных в ходе археологических раскопок, с целью восстановления древней флоры Узбекистана, питания древних людей, их стратегий выживания и экономики растений;",
        en: "- studying and interpreting the remains of plants, seeds, fruits, and pollen found during archaeological excavations to reconstruct the ancient flora of Uzbekistan, the diet of ancient people, their survival strategies, and plant economy;",
      },
      {
        uz: "- o‘tmishda inson va hayvonat dunyosi (fauna) munosabatini, o‘tmish landshafti va iqlimini, xo‘jaligini qazishmalar chog‘ida topilgan hayvon suyaklari qoldiqlari orqali o‘rganadi;",
        ru: "- исследование взаимоотношений между человеком и животным миром (фауной) в древности, древних ландшафтов, климата и хозяйства на основе остатков костей животных, обнаруженных во время раскопок;",
        en: "- studying the relationships between humans and the animal world (fauna) in ancient times, ancient landscapes, climate, and economy based on the remains of animal bones found during excavations;",
      },
      {
        uz: "- qadimda O‘rta Osiyo bo‘ylab o‘tgan Buyuk ipak yo‘lidagi tijoriy-madaniy va xo‘jalik munosabatlarini ochiqlashda bioarxeologik artefaktlardan foydalanadi;",
        ru: "- использование биоархеологических артефактов для выявления торгово-культурных и хозяйственных связей Великого шелкового пути в древности; подготовка научных кадров в области биоархеологии;",
        en: "- using bioarchaeological artifacts to reveal the trade, cultural, and economic relations along the Great Silk Road in ancient times; training scientific personnel in the field of bioarchaeology;",
      },
      {
        uz: "- bioarxeologiya yo‘nalishida ilmiy kadrlar tayyorlaydi;",
        ru: "- установление научных связей с институтами Отделения естественных наук Академии наук Республики Узбекистан, высшими учебными заведениями и зарубежными научными центрами.",
        en: "- establishing scientific links with institutes of the Department of Natural Sciences of the Academy of Sciences of the Republic of Uzbekistan, higher educational institutions and foreign scientific centers.",
      },
      {
        uz: "- O‘zR FAning Tabiiy fanlar bo‘limi institutlari, OTMlari va chet eldagi ilmiy markazlar bilan ilmiy aloqalarni yo‘lga qo‘yadi.",
        ru: "- Научные исследования в этой лаборатории проводятся в интеграции с археологией и естественными науками. В настоящее время ведётся работа по организационным аспектам лаборатории, включая составление списка оборудования и приборов, разработку сметы расходов на их приобретение, а также привлечение и подготовку научных сотрудников и лаборантов, способных использовать эти инструменты в своих исследованиях.",
        en: "- The research in this laboratory is carried out in integration with archaeology and natural sciences. Work is currently underway on the organizational aspects of the laboratory, including compiling a list of equipment and instruments, developing a cost estimate for their acquisition, and recruiting and training researchers and laboratory technicians who can use these instruments in their research.",
      },
    ]


    // const documentsList = [
    //   {
    //     Name: {
    //       uz: "1. Laboratoriya nizomi",
    //       ru: "1. Устав лаборатории",
    //       en: "1. Laboratory Charter"
    //     },
    //     Link: ""
    //   },
    //   {
    //     Name: {
    //       uz: "2. Laboratoriya yo'l xaritasi",
    //       ru: "2. Дорожная карта лаборатории",
    //       en: "2. Laboratory Roadmap"
    //     },
    //     Link: ""
    //   },
    //   {
    //     Name: {
    //       uz: "3. Laboratoriyaning 2020-2024 yillar uchun dasturi",
    //       ru: "3. Программа лаборатории на 2020-2024 годы",
    //       en: "3. Laboratory Program for 2020-2024"
    //     },
    //     Link: ""
    //   },
    //   {
    //     Name: {
    //       uz: "4. Laboratoriya xodimlari hisoboti",
    //       ru: "4. Отчёт сотрудников лаборатории",
    //       en: "4. Laboratory Staff Report"
    //     },
    //     Link: ""
    //   },
    //   {
    //     Name: {
    //       uz: "Laboratoriya xodimlari to'grisida batafsil ma'lumotlar",
    //       ru: "Подробная информация о сотрудниках лаборатории",
    //       en: "Detailed Information About Laboratory Staff"
    //     },
    //     Link: ""
    //   },
    // ]

    const api = getApiUrl();


    const [documentsList, setDocumentsList] = useState([]);

    useEffect(() => {
        const fetchDocumentsList = async () => {
            try {
                const response = await fetch(`${api}/api/departments-and-laboratories/bioarchaeology-laboratory-page-data/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDocumentsList(data.data);
            } catch (error) {
                console.error('Error fetching documents list:', error);
            }
        }
        fetchDocumentsList();
    }, [api]);



  return (
    <div className='bioarchaeology-laboratory-page'>
      
        <Category data={menuData}/>

        <main className='bioarchaeology-laboratory-page__main'>

            <p className='bioarchaeology-laboratory-page__main__text'>
                {
                    language === "uz" ? "O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019 yil 21 sentabrdagi 792-sonli “Arxeologik tadqiqotlarni tubdan takomillashtirish to‘g‘risida” Qarori asosida Milliy arxeologiya markazi tashkil etildi. Ushbu Qarorga ko‘ra, 2019 yilning oxirida O‘zbekistonda ilk bor zamonaviy asbob‑uskunalar bilan jihozlangan “Bioarxeologiya” laboratoriyasiga asos solindi. Biologiya, arxeologiya, botanika, zoologiya, inson anatomiyasi kabi qator fanlarning sintezidan yuzaga kelgan bioarxeologiya barcha tabiiy va ijtimoiy fanlarning zamonaviy usullaridan keng foydalanadi. Yana ham to‘g‘rirog‘i, bioarxeologiya arxeologik ob’ektlardan topilgan inson qoldiqlari yoki har qanday biologik qoldiqlar ustida izlanishlar olib boradigan fandir."
                    : language === "ru" ? "Постановлением Кабинета Министров Республики Узбекистан № 792 от 21 сентября 2019 года “О коренном совершенствовании археологических исследований” был создан Национальный центр археологии. Согласно этому постановлению, в конце 2019 года в Узбекистане впервые была основана лаборатория “Биоархеология”, оснащённая современным оборудованием. Биоархеология, возникшая на стыке таких наук, как биология, археология, ботаника, зоология и анатомия человека, широко использует современные методы естественных и социальных наук. Если быть точнее, биоархеология — это наука, которая занимается исследованиями человеческих останков или любых других биологических материалов, обнаруженных на археологических объектах."
                    : "By Resolution No. 792 of the Cabinet of Ministers of the Republic of Uzbekistan, dated September 21, 2019, “On the Fundamental Improvement of Archaeological Research,” the National Center of Archaeology was established. According to this resolution, at the end of 2019, Uzbekistan saw the foundation of its first modern-equipped “Bioarchaeology” laboratory. Bioarchaeology, emerging from the synthesis of disciplines such as biology, archaeology, botany, zoology, and human anatomy, extensively employs modern methods from both natural and social sciences. More precisely, bioarchaeology is a scientific field that studies human remains or any other biological materials found at archaeological sites."
                }

                <br />
                <br />

                {
                    language === "uz" ? "Laboratoriyada qayta ishlanadigan materiallar sirasiga ashyoviy (moddiy) va raqamli (sifrovoy) ma’lumotlar – arxeologik qazishmalar chog‘ida chiqqan paleoantropologik, arxeozoologik, arxeobotanik qoldiqlar, tuproq, ko‘mir, yog‘och kundasi (spila) namunalari kiradi."
                    : language === "ru" ? "К материалам, обрабатываемым в лаборатории, относятся вещественные (материальные) и цифровые данные: палеоантропологические, археозоологические и археоботанические останки, обнаруженные во время археологических раскопок, а также образцы почвы, угля и древесного угля (спилы)."
                    : "The materials processed in the laboratory include physical (material) and digital data: paleoanthropological, archaeozoological, and archaeobotanical remains uncovered during archaeological excavations, as well as samples of soil, charcoal, and wood (tree-ring samples)."
                }

                <br />
                <br />
            </p>

            <p className='bioarchaeology-laboratory-page__main__text'>
                <span>
                    {
                      language === "uz" ? "Laboratoriyaning maqsadi"
                      : language === "ru" ? "Цель лаборатории"
                      : "The purpose of the laboratory"
                    }   
                </span>
                {
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
                }
                
                <br />
                <br />

            </p>

            <ul className='bioarchaeology-laboratory-page__main__list'>
              {
                listOfEnumerations.map((item, index) => (
                  <li key={index}>
                    {item[language]}
                    
                    <br />
                    <br />
                  </li>
                ))
              }
            </ul>

            <ul className='bioarchaeology-laboratory-page__main__info-list'>
              {
                documentsList.map((item, index) => (
                  <li className='bioarchaeology-laboratory-page__main__info-item' key={index}>
                    <Link to={item.Link}>
                      {item.Name[language]}
                    </Link>
                  </li>
                ))
              }
            </ul>

        </main>

    </div>
  )
}
