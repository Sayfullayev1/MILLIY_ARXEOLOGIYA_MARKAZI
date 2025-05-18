import React, { useContext } from 'react'
import './bioarchaeologyLaboratoryPage.scss'
import Category from '../../../../components/category/Category'
import { LanguageContext } from '../../../../context/LanguageContext';
import { Link } from 'react-router-dom';

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
        ru: "",
        en: "",
      },
      {
        uz: "- arxeologik qazishmalar chog‘ida yoki tasodifan topilgan inson osteologik qoldiqlari qayta tiklash orqali paleodemografiya, o‘tmishda yashagan kishining sog‘lig‘i, turmush darajasi va ovqatlanish ratsionini aniqlaydi;",
        ru: "",
        en: "",
      },
      {
        uz: "- arxeologik qazishmalardan chiqqan o‘simlik, urug‘, meva va gul changlarining qoldiqlarini o‘rganish va interpretatsiyalash orqali qadimgi O‘zbekiston florasi, o‘tmish kishilarining ovqatlanish ratsioni, ularning yashash strategiyasi va o‘simlik iqtisodiyotini qayta tiklaydi;",
        ru: "",
        en: "",
      },
      {
        uz: "- o‘tmishda inson va hayvonat dunyosi (fauna) munosabatini, o‘tmish landshafti va iqlimini, xo‘jaligini qazishmalar chog‘ida topilgan hayvon suyaklari qoldiqlari orqali o‘rganadi;",
        ru: "",
        en: "",
      },
      {
        uz: "- qadimda O‘rta Osiyo bo‘ylab o‘tgan Buyuk ipak yo‘lidagi tijoriy-madaniy va xo‘jalik munosabatlarini ochiqlashda bioarxeologik artefaktlardan foydalanadi;",
        ru: "",
        en: "",
      },
      {
        uz: "- bioarxeologiya yo‘nalishida ilmiy kadrlar tayyorlaydi;",
        ru: "",
        en: "",
      },
      {
        uz: "- O‘zR FAning Tabiiy fanlar bo‘limi institutlari, OTMlari va chet eldagi ilmiy markazlar bilan ilmiy aloqalarni yo‘lga qo‘yadi.",
        ru: "",
        en: "",
      },
    ]


    const documentsList = [
      {
        Name: {
          uz: "1. Laboratoriya nizomi",
          ru: "1. Устав лаборатории",
          en: "1. Laboratory Charter"
        },
        Link: ""
      },
      {
        Name: {
          uz: "2. Laboratoriya yo'l xaritasi",
          ru: "2. Дорожная карта лаборатории",
          en: "2. Laboratory Roadmap"
        },
        Link: ""
      },
      {
        Name: {
          uz: "3. Laboratoriyaning 2020-2024 yillar uchun dasturi",
          ru: "3. Программа лаборатории на 2020-2024 годы",
          en: "3. Laboratory Program for 2020-2024"
        },
        Link: ""
      },
      {
        Name: {
          uz: "4. Laboratoriya xodimlari hisoboti",
          ru: "4. Отчёт сотрудников лаборатории",
          en: "4. Laboratory Staff Report"
        },
        Link: ""
      },
      {
        Name: {
          uz: "Laboratoriya xodimlari to'grisida batafsil ma'lumotlar",
          ru: "Подробная информация о сотрудниках лаборатории",
          en: "Detailed Information About Laboratory Staff"
        },
        Link: ""
      },
    ]


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
