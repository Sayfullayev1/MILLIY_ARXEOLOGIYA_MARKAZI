import React, { useContext, useState, useEffect } from 'react';
import style from './landscapeArcheologyLaboratoryPage.module.scss';

import Category from '../../../../components/category/Category';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../../context/LanguageContext';
import getApiUrl from '../../../../api/api';


export default function LandscapeArcheologyLaboratoryPage() {
  
  
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
            uz: "Lanshaft arxeologiyasi laboratoriyasi",
            ru: "Лаборатория ландшафтной археологии",
            en: "Landscape archeology laboratory",
          },
          link: "/",
        },
      ];
  
  
    const listOfEnumerations = [
          {
            uz: "- arxeologik qazishmalarda qo‘lga kiritilgan qadimiy noorganik materiallarni laborator tahlil qilish.",
            ru: "- археологик қазишмаларда қўлга киритилган қадимий ноорганик материалларни лаборатор таҳлил қилиш.",
            en: "- conduct laboratory analysis of ancient inorganic materials recovered during excavations."
          },
          {
            uz: "–qo‘lga kiritilgan ekofakt va geofaktlarni o‘rganish orqali tabiat va inson o‘rtasidagi munosabatlarni qayta tiklash.",
            ru: "–қўлга киритилган экофакт ва геофактларни ўрганиш орқали табиат ва инсон ўртасидаги муносабатларни қайта тиклаш.",
            en: "-restore the relationship between nature and humans by studying ecofacts and geofacts."
          },
          {
            uz: "–keng hududlar bo‘ylab arxeologik yodgorliklarning xususiyatlarni xaritada aks ettirish va ularning o‘tmishda va bugungi kunda yoyilish qonuniyatlarini aniqlash.",
            ru: "–кенг ҳудудлар бўйлаб археологик ёдгорликларнинг хусусиятларни харитада акс эттириш ва уларнинг ўтмишда ва бугунги кунда ёйилиш қонуниятларини аниқлаш.",
            en: "-map archaeological sites over vast areas and determine patterns of their past and present distribution."
          },
          {
            uz: "– o‘tmish jamoalar tomonidan makonning ijtimoiy qo‘llanilishini, ularning o‘z tevaragini anglashini talqin qilish.",
            ru: "– ўтмиш жамоалар томонидан маконнинг ижтимоий қўлланилишини, уларнинг ўз теварагини англашини талқин қилиш.",
            en: "-interpret how ancient communities socially used their environment."
          },
          {
            uz: "– landshaft arxeologiyasi tadqiqotlarida sun’iy yo‘ldosh va havodan olingan suratlar, yer usti izlanishlari, topografik modellashtirish, stratigrafik qazishmalar, geomorfologik izlanishlar va yer osti qidiruv texnologiyalari (georadar va magnitometriya usullari) orqali keng mintaqaviy tadqiqotlar o‘tkazish.",
            ru: "– ландшафт археологияси тадқиқотларида сунъий йўлдош ва ҳаводан олинган суратлар, ер усти изланишлари, топографик моделлаштириш, стратиграфик қазишмалар, геоморфологик изланишлар ва ер ости қидирув технологиялари (георадар ва магнитометрия усуллари) орқали кенг минтақавий тадқиқотлар ўтказиш.",
            en: "-conduct large-scale regional research using satellite and aerial imagery, surface surveys, topographic modeling, stratigraphic excavations, geomorphological studies, and subsurface exploration technologies."
          },
          {
            uz: "– qadimiy yo‘llar va qishloq xo‘jaligi dalalari kabi an’anaviy izlanishlarda osonlikcha ko‘rinmaydigan unsurlarni aniqlash.",
            ru: "– қадимий йўллар ва қишлоқ хўжалиги далалари каби анъанавий изланишларда осонликча кўринмайдиган унсурларни аниқлаш.",
            en: "-identify elements that are not easily detectable through traditional research methods, such as ancient roads and agricultural fields. Train scientific personnel in landscape archaeology."
          },
          {
            uz: "– landshaft arxeologiya yo‘nalishida ilmiy kadrlar tayyorlaydi;",
            ru: "– ландшафт археология йўналишида илмий кадрлар тайёрлайди;",
            en: "-establish scientific collaborations with institutes of the Natural Sciences Department of the Academy of Sciences of Uzbekistan, universities, and foreign research centers."
          },
          {
            uz: "–  O‘zR FAning Tabiiy fanlar bo‘limi institutlari, OTMlari va chet eldagi ilmiy markazlar bilan ilmiy aloqalarni yo‘lga qo‘yadi. Ushbu laboratoriyada ilmiy izlanishlar arxeologiya va tabiiy fanlar bilan uyg‘unlikda olib boriladi. Bugungi kunda ushbu laboratoriyani tashkiliy jihatlari, ya’ni laboratoriya uchun uskuna va jihozlar ro‘yxatini tuzish, ularni sotib olish xarajatlar smetasini ishlab chiqish va eng muhimi ana shu asboblarni o‘z izlanishlarida qo‘llay oladigan ilmiy xodimlar, laborantlarni jalb etish va tayyorlash ustida ishlar olib borilmoqda.",
            ru: "–  ЎзР ФАнинг Табиий фанлар бўлими институтлари, ОТМлари ва чет элдаги илмий марказлар билан илмий алоқаларни йўлга қўяди. Ушбу лабораторияда илмий изланишлар археология ва табиий фанлар билан уйғунликда олиб борилади. Бугунги кунда ушбу лабораторияни ташкилий жиҳатлари, яъни лаборатория учун ускуна ва жиҳозлар рўйхатини тузиш, уларни сотиб олиш харажатлар сметасини ишлаб чиқиш ва энг муҳими ана шу асбобларни ўз изланишларида қўллай оладиган илмий ходимлар, лаборантларни жалб этиш ва тайёрлаш устида ишлар олиб борилмоқда.",
            en: "-currently, efforts are underway to organize the laboratory, including compiling a list of equipment and instruments, developing cost estimates for their procurement, and recruiting and training scientific staff and laboratory technicians to utilize these tools in their research."
          },
      ];
  
  
    const [documentsList, setDocumentsList] = useState([]);
  
  
    const api = getApiUrl();
  
    useEffect(() => {
  
      const fetchDocumentsList = async () => {
        try {
            const response = await fetch(`${api}/api/departments-and-laboratories/landscape-archeology-laboratory-page-data`);
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
            const response = await fetch(`${api}/api/departments-and-laboratories/landscape-archeology-laboratory-page-staff-data`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStaffList(data.message);
            // console.log('Documents list fetched successfully:', data);
            
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
                    language === "uz" ? "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019 yil 21 sentabrdagi 792-sonli “Arxeologik tadqiqotlarni tubdan takomillashtirish to‘g‘risida” Qarori asosida Milliy arxeologiya markazi tashkil etildi. Ushbu Qarorga ko‘ra, 2019 yilning oxirida O‘zbekistonda ilk bor zamonaviy asbob‑uskunalar bilan jihozlangan “Landshaft arxeologiyasi” laboratoriyasiga asos solindi. Landshaft arxeologiyasi – bu arxeologik, tarixiy-geografik, ijtimoiy-geografik, paleoekologik, antropologik va toponimik izlanishlarni olib boradigan asosiy arxeologik yo‘nalishlardan biri bo‘lib, bu yo‘nalishda bo‘limimizda bir qator turli yondashuvlar qo‘llanishi rejalashtirilgan. Birinchisi – keng hududlar bo‘ylab arxeologik xususiyatlarni xaritada aks ettirish va ularning o‘tmishda va bugungi kunda yoyilish qonuniyatlarini aniqlashdir. Ikkinchisi – o‘tmish jamoalar tomonidan makonning ijtimoiy qo‘llanilishini, ularning o‘z tevaragini anglashini talqin qilishdir. Bu yerda fenomenologiyaning qo‘llanilishi maqsadga muvofiq bo‘ladi. Landshaft arxeologiyasining eng katta ahamiyati shundaki, u arxeologlarga alohida bir arxeologik yodgorlikka bog‘lanib qolinganlik o‘rniga alternativ yondashuv taqdim etib, diqqat-e’tiborni inson jamiyati hayotini surgan birmuncha keng tegralar ko‘lamiga ko‘taradi."
                    : language === "ru" ? "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Ўзбекистон Республикаси Вазирлар Маҳкамасининг 2019 йил 21 сентябрдаги 792-сонли “Археологик тадқиқотларни тубдан такомиллаштириш тўғрисида” Қарори асосида Миллий археология маркази ташкил этилди. Ушбу Қарорга кўра, 2019 йилнинг охирида Ўзбекистонда илк бор замонавий асбоб‑ускуналар билан жиҳозланган “Ландшафт археологияси” лабораториясига асос солинди. Ландшафт археологияси – бу археологик, тарихий-географик, ижтимоий-географик, палеоэкологик, антропологик ва топонимик изланишларни олиб борадиган асосий археологик йўналишлардан бири бўлиб, бу йўналишда бўлимимизда бир қатор турли ёндашувлар қўлланиши режалаштирилган. Биринчиси – кенг ҳудудлар бўйлаб археологик хусусиятларни харитада акс эттириш ва уларнинг ўтмишда ва бугунги кунда ёйилиш қонуниятларини аниқлашдир. Иккинчиси – ўтмиш жамоалар томонидан маконнинг ижтимоий қўлланилишини, уларнинг ўз теварагини англашини талқин қилишдир. Бу ерда феноменологиянинг қўлланилиши мақсадга мувофиқ бўлади. Ландшафт археологиясининг энг катта аҳамияти шундаки, у археологларга алоҳида бир археологик ёдгорликка боғланиб қолинганлик ўрнига алтернатив ёндашув тақдим этиб, диққат-эътиборни инсон жамияти ҳаётини сурган бирмунча кенг тегралар кўламига кўтаради."
                    : "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 In accordance with Resolution No. 792 of the Cabinet of Ministers of the Republic of Uzbekistan dated September 21, 2019, \"On the Fundamental Improvement of Archaeological Research,\" the National Center for Archaeology was established. Under this resolution, at the end of 2019, the first \"Landscape Archaeology\" laboratory in Uzbekistan was founded, equipped with modern instruments."
                }

                <br />

                {
                    language === "uz" ? "Landshaft arxeologiyasida qo‘llaniladigan arxeologik artefaktlar quyidagi usullarni o‘z ichiga oladi: sun’iy yo‘ldosh va havodan olingan suratlar, yer usti izlanishlari, topografik modellashtirish, stratigrafik qazishmalar, geomorfologik izlanishlar va yer osti qidiruv texnologiyalari (georadar va magnitometriya usullari). Qisman yangi texnologiyalar natijasida tug‘ilgan (Geografik axborot tizimlari, masofadan ilg‘ash, geofizik izlanishlar bunga katta xissa qo‘shgan) landshaft-arxeologik izlanishlar keng mintaqaviy tadqiqotlar o‘tkazishga, qadimiy yo‘llar va qishloq xo‘jaligi dalalari kabi an’anaviy izlanishlarda osonlikcha ko‘rinmaydigan unsurlarni aniqlashga yordam berdi."
                    : language === "ru" ? "Ландшафт археологиясида қўлланиладиган археологик артефактлар қуйидаги усулларни ўз ичига олади: сунъий йўлдош ва ҳаводан олинган суратлар, ер усти изланишлари, топографик моделлаштириш, стратиграфик қазишмалар, геоморфологик изланишлар ва ер ости қидирув технологиялари (георадар ва магнитометрия усуллари). Қисман янги технологиялар натижасида туғилган (Географик ахборот тизимлари, масофадан илғаш, геофизик изланишлар бунга катта хисса қўшган) ландшафт-археологик изланишлар кенг минтақавий тадқиқотлар ўтказишга, қадимий йўллар ва қишлоқ хўжалиги далалари каби анъанавий изланишларда осонликча кўринмайдиган унсурларни аниқлашга ёрдам берди."
                    : "Landscape archaeology is one of the main archaeological disciplines that integrates archaeological, historical-geographical, social-geographical, paleoecological, anthropological, and toponymic research. Various approaches are planned for implementation in our laboratory. The first approach involves mapping archaeological features across vast territories and identifying patterns of their distribution in the past and present. The second approach interprets how ancient communities socially used their environment and perceived their surroundings, making the application of phenomenology particularly relevant. The primary significance of landscape archaeology is that it offers archaeologists an alternative approach, shifting the focus from isolated archaeological sites to the broader scales of human society's way of life."
                }

                <br />
                <br />
            </p>

            <p className={style.container__main__text}>

                <span>
                    {
                      language === "uz" ? "Laboratoriyaning maqsadi"
                      : language === "ru" ? "Лабораториянинг мақсади"
                      : "Laboratory Objectives"
                    }   
                </span>


                {
                  language === "uz" ? " – arxeologik qazishmalarda qo‘lga kiritilgan artefaktlardan farqli o‘laroq, barcha qadimiy biofakt, ekofakt va geofaktlarni o‘rganish orqali inson xulq-atvorini tiklashdan iboratdir."
                  : language === "ru" ? " – археологик қазишмаларда қўлга киритилган артефактлардан фарқли ўлароқ, барча қадимий биофакт, экофакт ва геофактларни ўрганиш орқали инсон хулқ-атворини тиклашдан иборатдир." 
                  : " - the laboratory aims to reconstruct human behavior by studying all ancient biofacts, ecofacts, and geofacts, in contrast to the traditional analysis of artifacts found in archaeological excavations."
                }

                <br />

                <span>
                    {
                      language === "uz" ? "Laboratoriyaning asosiy vazifalari etib quyidagilar belgilangan:"
                      : language === "ru" ? "Лабораториянинг асосий вазифалари этиб қуйидагилар белгиланган:"
                      : "Key Tasks of the Laboratory:"
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
