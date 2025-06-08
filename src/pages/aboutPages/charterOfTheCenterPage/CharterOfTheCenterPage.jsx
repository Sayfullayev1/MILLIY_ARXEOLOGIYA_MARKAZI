import React, { useContext } from 'react'
import style from './charterOfTheCenterPage.module.scss'

import Container from '../../../components/container/Container'
import Category from '../../../components/category/Category'

import { LanguageContext } from '../../../context/LanguageContext';

export default function CharterOfTheCenterPage() {

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
          uz: "Markaz ustavi",
          ru: "Устав Центра",
          en: "Charter of the Center",
        },
        link: "/",
      },
    ];


    const listOfEnumerations1 = [
          {
            uz: "1.1. Ўзбекистон Республикаси Фанлар академияси Миллий археология маркази (кейинги ўринларда Марказ деб юритилади) Ўзбекистон Республикаси Вазирлар Маҳкамасининг 2019 йил 21 сентябрдаги 792-сон қарори билан республика ҳудудида олиб борилаётган археологик тадқиқотларни илмий-услубий жиҳатдан йўналтириш ҳамда табиий фанларнинг замонавий тадқиқот услубларини археологик изланишларда кенг жорий қилиш мақсадида ташкил этилган.",
            ru: "1.1. Национальный центр археологии Академии наук Республики Узбекистан (далее – Центр) создан в соответствии с постановлением Кабинета Министров Республики Узбекистан № 792 от 21 сентября 2019 года с целью научно-методического руководства археологическими исследованиями, проводимыми на территории республики, а также широкого внедрения современных методов исследований естественных наук в археологические изыскания.",
            en: "1.1. The National Center for Archaeology of the Academy of Sciences of the Republic of Uzbekistan (hereinafter referred to as the Center) was established by Resolution No. 792 of the Cabinet of Ministers of the Republic of Uzbekistan dated September 21, 2019, with the aim of providing scientific and methodological guidance for archaeological research conducted within the territory of the republic, as well as broadly introducing modern research methods of natural sciences into archaeological investigations."
          },
          {
            uz: "1.2. Марказ Ўзбекистон Республикаси Фанлар академиясининг (кейинги ўринларда ЎзР ФА деб юритилади) ижтимоий фанлар бўлими таркибига киради ҳамда тизими бўйича амалга оширилаётган илмий тадқиқотларни самарали бошқаришни, мувофиқлаштиришни ва давлатнинг интеллектуал, ижтимоий-иқтисодий, маънавий-маърифий салоҳиятини оширишга хизмат қилади ҳамда фан ютуқлари натижаси ва илмий ҳажмдор технологияларни жорий этилишини таъминлайди.",
            ru: "1.2. Центр входит в состав отделения социальных наук Академии наук Республики Узбекистан (далее – АН РУз) и способствует эффективному управлению и координации научных исследований, проводимых в системе, а также повышению интеллектуального, социально-экономического, духовно-просветительского потенциала государства. Кроме того, Центр обеспечивает внедрение научных достижений и наукоемких технологий.",
            en: "1.2. The Center is part of the Social Sciences Division of the Academy of Sciences of the Republic of Uzbekistan (hereinafter referred to as ASRU) and facilitates the effective management and coordination of scientific research carried out within its system. It also contributes to enhancing the intellectual, socio-economic, spiritual, and educational potential of the state, as well as ensuring the implementation of scientific achievements and high-tech developments."
          },
          {
            uz: "1.3. Марказ ўз фаолиятини Ўзбекистон Республикаси Конституцияси, қонунлари, Олий Мажлиси палаталарининг қарорлари, Президентининг фармон, қарор ва фармойишлари, Вазирлар Маҳкамасининг қарор ва фармойишлари ҳамда ЎзР ФА Низомига асосан тасдиқланган ушбу Уставга мувофиқ иш юритади.",
            ru: "1.3. Центр осуществляет свою деятельность в соответствии с Конституцией Республики Узбекистан, законами, постановлениями палат Олий Мажлиса, указами, постановлениями и распоряжениями Президента, постановлениями и распоряжениями Кабинета Министров, а также настоящим Уставом, утвержденным на основании Устава АН РУз.",
            en: "1.3. The Center operates in accordance with the Constitution of the Republic of Uzbekistan, laws, resolutions of the chambers of the Oliy Majlis, decrees, resolutions, and orders of the President, resolutions and orders of the Cabinet of Ministers, as well as this Charter, which is approved based on the ASRU Statute."
          },
          {
            uz: "1.4. Марказ ЎзР ФА Археологик тадқиқотлар институтининг барча ҳуқуқлари, мажбуриятлари ва шартномалари бўйича унинг ҳуқуқий вориси ҳисобланади. ",
            ru: "1.4. Центр является правопреемником Института археологических исследований АН РУз по всем его правам, обязательствам и договорам.",
            en: "1.4. The Center is the legal successor of the Institute of Archaeological Research of ASRU in all its rights, obligations, and contracts."
          },
          {
            uz: "1.5. Марказнинг Устави ЎзР ФАнинг умумий йиғилиши тавсияси асосида ЎзР ФА президенти томонидан тасдиқланади.",
            ru: "1.5. Устав Центра утверждается президентом АН РУз на основании рекомендаций общего собрания АН РУз.",
            en: "1.5. The Charter of the Center is approved by the President of ASRU based on the recommendations of the ASRU General Assembly."
          },
          {
            uz: "1.6. Марказ Уставига ўзгартириш ва қўшимчалар ЎзР ФА Президиуми қарори билан киритилади ва ЎзР ФА президенти томонидан тасдиқланади.",
            ru: "1.6. Изменения и дополнения в Устав Центра вносятся решением Президиума АН РУз и утверждаются президентом АН РУз.",
            en: "1.6. Amendments and additions to the Center's Charter are made by a decision of the ASRU Presidium and approved by the President of ASRU."
          },
          {
            uz: "1.7. Марказнинг фаолияти Ўзбекистон Республикаси давлат бюджети ва ўрнатилган тартибда жалб этилган бюджетдан ташқари маблағлар ҳисобидан молиялаштирилади.",
            ru: "1.7. Деятельность Центра финансируется за счет государственного бюджета Республики Узбекистан, а также внебюджетных средств, привлеченных в установленном порядке.",
            en: "1.7. The activities of the Center are funded by the state budget of the Republic of Uzbekistan and extra-budgetary funds raised in accordance with established procedures."
          },  
          {
            uz: "1.8. Марказ юридик шахс ҳисобланади, ўзининг мустақил балансига, Ўзбекистон Республикаси Давлат герби тасвири туширилган ҳамда ташкилот номи ёзилган юмалоқ муҳрга, бошқа зарур муҳр ва штампларга, эмблема, товар (фирма) белгисига ва бошқа атрибутика ҳамда банк ҳисоб рақамларига, жумладан валюта ҳисоб рақамига эга бўлади.",
            ru: "1.8. Центр является юридическим лицом, имеет самостоятельный баланс, круглую печать с изображением Государственного герба Республики Узбекистан и наименованием организации, другие необходимые печати и штампы, эмблему, товарный (фирменный) знак и другие атрибуты, а также банковские счета, включая валютный счет.",
            en: "1.8. The Center is a legal entity with an independent balance sheet, a round seal featuring the State Emblem of the Republic of Uzbekistan and the organization's name, other necessary seals and stamps, an emblem, a trademark (brand), and other attributes, as well as bank accounts, including a foreign currency account."
          },
          {
            uz: "1.9. Марказга раҳбарлик қилиш ЎзР ФА президенти томонидан директорга берилган ваколат ва мажбуриятлар асосида амалга оширилади.",
            ru: "1.9. Руководство Центром осуществляется на основании полномочий и обязанностей, возложенных на директора президентом АН РУз.",
            en: "1.9. The management of the Center is carried out based on the powers and responsibilities assigned to the Director by the President of ASRU."
          },
      ];


    const listOfEnumerations2 = [
      {
        title:{
          uz: "2.1. Марказнинг асосий вазифалари қуйидагилардан иборат:",
          ru: "2.1. Основные задачи Центра:",
          en: "",
        },
        text:[
          {
            uz: "республика ҳудудида олиб борилаётган археологик тадқиқотларни илмий-услубий жиҳатдан йўналтириш ҳамда табиий ва ижтимоий фанларнинг замонавий тадқиқот услубларини кенг қўллаган ҳолда археологик изланишлар олиб бориш;",
            ru: "Направление научно-методических археологических исследований, проводимых на территории республики, с широким применением современных методов исследования естественных и социальных наук.",
            en: "Providing scientific and methodological guidance for archaeological research conducted within the republic, utilizing modern research methods in natural and social sciences."
          },
          {
            uz: "инновацион технологиялардан кенг фойдаланган ҳолда комплекс археологик, биоархеологик, геоархеологик, ландшафт-археологик ва антропологик экспедицияларни соҳа таълими амалиёти билан боғлаб ташкил этиш;",
            ru: "Организация комплексных археологических, биоархеологических, геоархеологических, ландшафтно-археологических и антропологических экспедиций с использованием инновационных технологий и их интеграция с образовательной практикой в данной сфере.",
            en: "Organizing comprehensive archaeological, bioarchaeological, geoarchaeological, landscape-archaeological, and anthropological expeditions using innovative technologies and integrating them with educational practices in the field."
          },
          {
            uz: "археология ва антропология соҳасида етук илмий кадрлар тайёрлаш;",
            ru: "Подготовка высококвалифицированных научных кадров в области археологии и антропологии.",
            en: "Training highly qualified scientific personnel in archaeology and anthropology."
          },
          {
            uz: "археологик ёдгорликларни очиқ осмон остидаги музейларга айлантиришнинг илмий асосини тайёрлаш;",
            ru: "Разработка научных основ преобразования археологических памятников в музеи под открытым небом.",
            en: "Developing the scientific basis for transforming archaeological monuments into open-air museums."
          },
          {
            uz: "археологик ва антропологик тадқиқотларда халқаро ҳамкорликни йўлга қўйиш, хорижий мамлакатларнинг археология ва антропология йўналишида фаолият олиб бораётган тадқиқотчи-олимлар билан қўшма экспедицияларни тизимли ташкил қилиш;",
            ru: "Установление международного сотрудничества в археологических и антропологических исследованиях, системная организация совместных экспедиций с зарубежными учеными-исследователями.",
            en: "Establishing international cooperation in archaeological and anthropological research and systematically organizing joint expeditions with foreign researchers."
          },
          {
            uz: "археологик ва антропологик тадқиқотларга оид халқаро тадбирларни мамлакатимизда ташкил этиш ва хорижда ушбу соҳалар бўйича ўтказиладиган илмий-амалий тадбирларда иштирок этиш;",
            ru: "Организация международных мероприятий в области археологии и антропологии в нашей стране и участие в зарубежных научно-практических мероприятиях.",
            en: "Organizing international events related to archaeology and anthropology in Uzbekistan and participating in scientific and practical events abroad."
          },
          {
            uz: "тегишли вазирлик, идора ҳамда бошқа ташкилотлар билан ҳамкорликда мамлакатда археологик ва антропологик тадқиқотлар олиб борилиши зарур бўлган ҳудудий объектларнинг ягона маълумот банкини ҳамда уларнинг муаммолари бўйича ахборот базасини шакллантириш;",
            ru: "Создание единой базы данных археологических и антропологических объектов, требующих исследований, а также информационной базы по их проблемам совместно с профильными министерствами, ведомствами и организациями.",
            en: "Creating a unified database of archaeological and anthropological sites requiring research, as well as an information base on their issues in collaboration with relevant ministries, agencies, and organizations."
          },
          {
            uz: "археологик ва антропологик тадқиқот натижаларини кенг оммага етказиш мақсадида мунтазам равишда илмий ва оммабоп китоблар, замонавий тадқиқот услублари сингдирилган ўқув қўлланма ва кўрсатмаларни нашр қилишни йўлга қўйиш;",
            ru: "Регулярная публикация научных и популярных книг, учебных пособий и руководств по современным методам исследований.",
            en: "Regularly publishing scientific and popular books, textbooks, and manuals incorporating modern research methodologies."
          },
          {
            uz: "Наманган вилояти Тўрақўрғон туманидаги «Ахсикент» археология мероси объектини муҳофаза қилиш ва тадқиқ этиш ёдгорлик мажмуаси фаолиятини илмий-услубий жиҳатдан таъминлаш.",
            ru: "Научно-методическое обеспечение деятельности комплекса по охране и изучению археологического наследия «Ахсикент» в Туракурганском районе Наманганской области.",
            en: "Providing scientific and methodological support for the preservation and study of the \"Akhsikent\" archaeological heritage complex in the Turakurgan district of Namangan region."
          },
        ]
      },
      {
        title:{
          uz: "2.2. Марказ ўзига юклатилган вазифаларни бажариш мақсадида қуйидаги ишларни амалга оширади:",
          ru: "2.2. Для выполнения возложенных задач Центр осуществляет следующие работы:",
          en: "2.2. To fulfill its assigned tasks, the Center carries out the following activities:",
        },
        text:[
          {
            uz: "тасдиқланган режага мувофиқ равишда фундаментал, амалий, инновацион, лаборатория-экспериментал тадқиқотлар ва лойиҳаларга биноан тажриба ишлари ўтказади;",
            ru: "Проведение фундаментальных, прикладных, инновационных, лабораторно-экспериментальных исследований и испытаний в соответствии с утвержденным планом.",
            en: "Conducting fundamental, applied, innovative, laboratory-experimental research and testing in accordance with the approved plan."
          },
          {
            uz: "заруратга қараб доимий равишда илмий тадқиқотлар мавзуларини янгилаб боради, Марказ тузилишига зарурий ўзгартиришлар борасида таклифлар киритади, ходимлар таркибини иқтидорли олимлар ва ёш илмий кадрлар билан тўлдириб боришга қаратилган чораларни ЎзР ФА бўлимларининг топшириқларига мувофиқ амалга оширади;",
            ru: "Обновление научных тем исследований, внесение предложений по изменению структуры Центра, пополнение кадрового состава талантливыми учеными и молодыми специалистами в соответствии с поручениями отделов Академии наук Узбекистана.",
            en: "Regularly updating research topics, proposing necessary structural changes, and attracting talented scientists and young researchers as per the instructions of the Academy of Sciences of Uzbekistan."
          },
          {
            uz: "Марказ ҳузуридаги Илмий Кенгаш томонидан аниқланган муаммоларни бартараф қилиш мақсадида мамлакат ва жаҳон фани ютуқларидан фойдаланган ҳолда келгуси ишларни ташкил этади;",
            ru: "Организация дальнейшей работы с учетом достижений отечественной и мировой науки для решения проблем, выявленных Научным советом Центра.",
            en: "Organizing future research based on the achievements of national and global science to address issues identified by the Scientific Council of the Center."
          },
          {
            uz: "бошқа илмий ташкилот ва таълим муассасалар ўтказган тадқиқотларни Марказ ихтисослиги бўйича мувофиқлаштиради;",
            ru: "Координация исследований, проводимых другими научными организациями и образовательными учреждениями, в соответствии со специализацией Центра.",
            en: "Coordinating research conducted by other scientific institutions and educational organizations in accordance with the Center’s specialization."
          },
          {
            uz: "бошқа илмий ташкилот ва таълим муассасаларга илмий кадрлар тайёрлашда ёрдам кўрсатади.",
            ru: "Поддержка научных кадров в других научных организациях и образовательных учреждениях.",
            en: "Assisting other scientific institutions and educational organizations in training scientific personnel."
          },
          {
            uz: "хорижий мамлакатлар илмий ташкилотлари билан илмий шартномалар тузади;",
            ru: "Заключение научных договоров с зарубежными научными учреждениями.",
            en: "Establishing scientific agreements with foreign research institutions."
          },
          {
            uz: "республика, регионал ва халқаро миқёсдаги конференциялар, кўргазмалар ташкил этади;",
            ru: "Организация республиканских, региональных и международных конференций, выставок.",
            en: "Organizing national, regional, and international conferences and exhibitions."
          },
          {
            uz: "изланишлар натижаларини нашрга тайёрлайди ва чоп этади;",
            ru: "Подготовка и публикация научных работ, монографий, сборников, учебных пособий, журналов и буклетов.",
            en: "Preparing and publishing research findings, monographs, collections, guides, journals, and booklets."
          },
          {
            uz: "илмий ва илмий-оммабоп адабиётлар: монографиялар, тўпламлар, қўлланмалар, журналлар ва буклетлар нашр қилиш хуқуқига эга;",
            ru: "Осуществление издательской деятельности и хранение типографского оборудования для научных целей.",
            en: "Conducting publishing activities and maintaining printing and copying equipment for scientific purposes."
          },
          {
            uz: "илмий мақсадлар учун типография, нусха кўчириш аппаратлари сақлаш, нашриёт ишларини амалга ошириш хуқуқига эга;",
            ru: "Организация республиканских, региональных и международных научно-исследовательских экспедиций.",
            en: "Organizing national, regional, and international scientific research expeditions."
          },
          {
            uz: "республика, регионал ва халқаро илмий-тадқиқот экспедицияларни ташкил этади;",
            ru: "Формирование научного фонда исследовательских материалов в республике.",
            en: "Creating a scientific archive of research materials within the country."
          },
          {
            uz: "республикада тадқиқотларнинг илмий материаллар фондини тузади;",
            ru: "Популяризация научных знаний и информирование общественности о проведенных исследованиях и их результатах.",
            en: "Promoting scientific knowledge and informing the public about research conducted by the Center and its results."
          },
          {
            uz: "илмий билимларни тарғиб қилади ҳамда Марказ томонидан ўтказилган тадқиқотлар ва уларнинг натижаларини маълум қилиб боради;",
            ru: "Защита интеллектуальных, государственных и авторских прав на выполненные работы.",
            en: "Protecting intellectual, governmental, and copyright interests related to completed research."
          },
          {
            uz: "Марказда бажарилган иш юзасидан илмий, давлат ва муаллифлик хуқуқи ҳамда қизиқишларни ўз ҳимоясига олади;",
            ru: "Подготовка высококвалифицированных научных кадров в области археологии и антропологии, создание условий для творческой деятельности ученых и повышения квалификации молодых специалистов.",
            en: "Training highly qualified specialists in archaeology and anthropology, creating necessary conditions for scientists’ creative work, and improving the qualifications of young specialists."
          },
          {
            uz: "археология ва антропология бўйича юқори малакали илмий кадрлар тайёрлаш, олимларнинг ижодий фаолияти учун керакли шароитлар яратиш, шунингдек, ёш мутахассисларнинг малакасини ошириш бўйича иш олиб боради;",
            ru: "Регистрация фундаментальных, прикладных и инновационных научных исследований, а также предоставление научной информации и отчетов в соответствующие органы.",
            en: "Registering fundamental, applied, and innovative research projects and submitting scientific reports to relevant authorities."
          },
          {
            uz: "Марказ белгиланган тартибда амалга ошириладиган фундаментал, амалий ва инновацион илмий текшириш ишларини рўйхатга олади,ҳ ҳамда бажарилган ишлар тўғрисида илмий ахборот ва ҳисоботлар тайёрлаб ўрнатилган тартибда тегишли органларга тақдим қилади;",
            ru: "Создание фондов материального и экономического стимулирования (включая валютные счета), а также социальных и культурных мероприятий.",
            en: "Establishing funds for material and economic incentives (including foreign currency accounts), as well as for social and cultural events."
          },
          {
            uz: "Марказ ўрнатилган тартибда моддий иқтисодий рағбатлантириш (моддий ёрдам), ижтимоий маданий тадбирлар фонди ва тараққиёт фонди (бу фонд такибига чет эл валютаси ҳисоб рақами ҳам киради) ташкил этади.",
            ru: "",
            en: ""
          },
        ]
      },
      {
        title:{
          uz: "2.3. Марказ бухгалтерия, оператив ва статистик ҳисоб ва ҳисоботлар олиб боради.",
          ru: "2.3. Центр ведет бухгалтерский, оперативный и статистический учет и отчетность.",
          en: "2.3. The Center maintains accounting, operational, and statistical records and reports.",
        },
        text:[
          {
            uz: "",
            ru: "",
            en: ""
          }
        ]
      },
      {
        title:{
          uz: "2.4. Марказ ходимларининг иш самарадорлигини ошириш мақсадида қуйидаши шароитларни яратади:",
          ru: "2.4. Центр создает условия для повышения эффективности работы сотрудников:",
          en: "2.4. The Center creates conditions to improve employee performance:",
        },
        text:[
          {
            uz: "фаолиятидаги илмий қидирув, ижодий ташаббус ва юқори натижаларни рағбатлантиради;",
            ru: "Поощряет научные поиски, творческие инициативы и высокие результаты.",
            en: "Encourages scientific exploration, creative initiatives, and high achievements."
          },
          {
            uz: "ўрнатилган тартибда аттестация ва бўш лавозимларни эгаллаш учун танловлар ўтказади;",
            ru: "Проводит аттестации и конкурсы на вакантные должности.",
            en: "Conducts attestation and competitive selection for vacant positions."
          },
          {
            uz: "фундаментал, амалий ва инновацион лойихалар шунингдек тадқиқотларни бажариш бўйича қонунчиликга муворфиқ шартномалар тузади;",
            ru: "Заключает договоры на выполнение фундаментальных, прикладных и инновационных проектов в соответствии с законодательством.",
            en: "Concludes contracts for fundamental, applied, and innovative projects in accordance with legislation."
          },
          {
            uz: "Марказ ЎзР ФА ўз вазифаларини амалга ошириш жараёнидаги долзарб ва устувор муаммоларни ҳал этиш учун қонунчиликни такомиллаштириш бўйича белгиланган тартибда таклифлар киритиш ҳуқуқига эга.",
            ru: "Имеет право вносить предложения по совершенствованию законодательства для решения актуальных и приоритетных задач.",
            en: "Has the right to propose legislative improvements for resolving urgent and priority issues."
          },
        ]
      },
      {
        title:{
          uz: "2.5. Марказ меҳнат бўйича қонунларга, меҳнатни муҳофаза қилиш норма ва қоидаларига, техника хавфсизлигига, ёнғиндан ҳимояланиш, санитария ишлари, давлат ижтимой суғуртаси ва меҳнат интизомига амал қилади ҳамда, меҳнатни ташкил қилишни доимий такомиллаштириб боради.",
          ru: "2.5. Центр соблюдает законы о труде, нормы и правила охраны труда, технику безопасности, противопожарные, санитарные требования, государственное социальное страхование и трудовую дисциплину.",
          en: "2.5. The Center complies with labor laws, occupational safety regulations, fire safety, sanitary standards, state social insurance, and labor discipline.",
        },
        text:[
          {
            uz: "",
            ru: "",
            en: ""
          }
        ]
      },
      {
        title:{
          uz: "2.6. ЎзР ФАнинг минтақавий бўлимлари, илмий ташкилдотлари ҳамда тасарруфидаги бошқа ташкилотлар ўз зиммасига юкланган мақсад ва вазифаларнинг самарали бажарилиши учун масъул ҳисобланадилар.",
          ru: "2.6. Региональные отделения и научные организации Академии наук Узбекистана несут ответственность за эффективное выполнение возложенных на них задач и целей.",
          en: "2.6. The regional branches and scientific organizations of the Academy of Sciences of Uzbekistan are responsible for the effective implementation of their assigned tasks and objectives.",
        },
        text:[
          {
            uz: "",
            ru: "",
            en: ""
          }
        ]
      },
    ]


    const listOfEnumerations3 = [
          {
            uz: "3.1. Марказнинг таркибий тузилиши Ўзбекистон Республикаси Вазирлар Маҳкамаси қарорига мувофиқ тасдиқланади.",
            ru: "3.1. Структурная организация Центра утверждается в соответствии с постановлением Кабинета Министров Республики Узбекистан.",
            en: "3.1. The structural organization of the Center is approved in accordance with the resolution of the Cabinet of Ministers of the Republic of Uzbekistan.",
          },
          {
            uz: "3.2. Зарур ҳолларда ЎзР ФА президенти молия вазирлиги билан келишган холда Марказ тузилмасига ходимларнинг сони доирасида ўзгартириш киритиш ҳуқуқига эга.",
            ru: "3.2. В необходимых случаях президент Академии наук Республики Узбекистан имеет право вносить изменения в структуру Центра в пределах установленного количества сотрудников по согласованию с Министерством финансов.",
            en: "3.2. If necessary, the President of the Academy of Sciences of Uzbekistan has the right to amend the structure of the Center within the established number of staff, in agreement with the Ministry of Finance.",
          },
          {
            uz: "3.3. Фундаментал, амалий ва инновация лойиҳалари ҳамда хўжалик шартномалари бўйича мақсадли дастурларни бажариш учун мавсумий ишчи гуруҳлари тузилиши мумкин.",
            ru: "3.3. Для выполнения целевых программ фундаментальных, прикладных и инновационных проектов, а также хозяйственных договоров могут формироваться сезонные рабочие группы.",
            en: "3.3. Seasonal working groups may be formed to implement targeted programs for fundamental, applied, and innovative projects, as well as contractual research agreements.",
          },
          {
            uz: "3.4. Маҳаллий (вилоят) ҳокимликларининг таклифларига биноан Марказ ҳудудий бўлимлар ва илмий марказлар ташкил этиши, уларни илмий кадрлар билан таъминлашга ёрдам бериши мумкин, лекин уларнинг бухгалтерия ҳисоб-китоб ишлари учун жавобгар ҳисобланмайди.",
            ru: "3.4. По предложениям местных (областных) хокимиятов Центр может создавать территориальные отделы и научные центры, а также оказывать содействие в их обеспечении научными кадрами, но не несет ответственности за их бухгалтерский учет.",
            en: "3.4. Based on proposals from local (regional) authorities, the Center may establish regional departments and scientific centers, assisting them with scientific personnel, but does not bear responsibility for their accounting.",
          },
          {
            uz: "3.5. Филиал ва бўлимлар тузилмаси Марказ директори томонидан тасдиқланган низомга мувофиқ иш юритади.",
            ru: "3.5. Структура филиалов и отделов функционирует в соответствии с уставом, утвержденным директором Центра.",
            en: "3.5. The structure of branches and departments operates in accordance with regulations approved by the Director of the Center.",
          },
      ];
  

  return (
    <div className={style.container}>

      <Category data={menuData}/>

      <Container>
        
        <main className={style.container__main}>
        

          <p className={style.container__main__text}>

              <span>
                  {
                    language === "uz" ? "ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ФАНЛАР АКАДЕМИЯСИ МИЛЛИЙ АРХЕОЛОГИЯ МАРКАЗИНИНГ УСТАВИ"
                    : language === "ru" ? "УСТАВ НАЦИОНАЛЬНОГО ЦЕНТРА АРХЕОЛОГИИ АКАДЕМИИ НАУК РЕСПУБЛИКИ УЗБЕКИСТАН"
                    : "CHARTER OF THE NATIONAL CENTER FOR ARCHAEOLOGY OF THE ACADEMY OF SCIENCES OF THE REPUBLIC OF UZBEKISTAN"
                  }   
              </span>
              
              <br />
              <br />

            
              <br />
          </p>


          <p className={style.container__main__text}>

              <span>
                  {
                    language === "uz" ? "1-БОБ. УМУМИЙ ҚОИДАЛАР"
                    : language === "ru" ? "ГЛАВА 1. ОБЩИЕ ПОЛОЖЕНИЯ"
                    : "CHAPTER 1. GENERAL PROVISIONS"
                  }   
              </span>

              <br />
              <br />
          </p>


          <ul className={style.container__main__list}>
            {
              listOfEnumerations1.map((item, index) => (
                <li key={index}>
                  {item[language]}
                  <br />
                  <br />
                </li>
              ))
            }
          </ul>


          <p className={style.container__main__text}>

              <span>
                  {
                    language === "uz" ? "2-БОБ. АСОСИЙ ВАЗИФАЛАРИ ВА ФУНКЦИЯЛАРИ"
                    : language === "ru" ? "ГЛАВА 2. ОСНОВНЫЕ ЗАДАЧИ И ФУНКЦИИ ЦЕНТРА"
                    : "CHAPTER 2. MAIN TASKS AND FUNCTIONS OF THE CENTER"
                  }   
              </span>

              <br />
              <br />
          </p>


          <ul className={style.container__main__list}>
            {
              listOfEnumerations2.map((item, index) => (
                <li key={index}>


                  <span>
                    {
                      item.title[language]
                    }
                  </span>

                  {
                    item.text.map((elem, num) =>
                      elem[language] === "" ? null : (
                        <React.Fragment key={num}>
                          <br />
                          <br />
                          {elem[language]}
                        </React.Fragment>
                      )
                    )
                  }
                  
                  <br />
                  <br />
                  
                </li>
              ))
            }
          </ul>



          <p className={style.container__main__text}>

              <span>
                  {
                    language === "uz" ? "3-БОБ. МАРКАЗНИНГ ТУЗИЛИШИ"
                    : language === "ru" ? "ГЛАВА 3. СТРУКТУРА ЦЕНТРА"
                    : "CHAPTER 3. CENTER STRUCTURE"
                  }   
              </span>

              <br />
              <br />
          </p>



          <ul className={style.container__main__list}>
            {
              listOfEnumerations3.map((item, index) => (
                <li key={index}>
                  {item[language]}
                  <br />
                  <br />
                </li>
              ))
            }
          </ul>




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
         
      </main>
                    
      </Container>

    </div>
  )
}
