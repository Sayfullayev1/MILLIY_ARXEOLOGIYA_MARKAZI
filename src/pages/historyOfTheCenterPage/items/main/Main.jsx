import React from 'react';
import './main.scss';
import Category from '../../../../components/category/Category';

export default function Main() {
  const menuData = [
    {
      text: {
        uz: 'Bosh sahifa',
        ru: 'Главная',
        en: 'Main',
      },
      link: '/',
    },
    {
      text: {
        uz: 'Markaz tarixi',
        ru: 'История центра',
        en: 'History of the center',
      },
      link: '/',
    },
  ];

  return (
    <main className="history-of-the-center-page__main">
      <Category data={menuData} />

      <section className="history-of-the-center-page__main__section">
        <h1 className="history-of-the-center-page__main__section__title">Milliy Arxeologiya markazi tarixi</h1>
        <div className="history-of-the-center-page__main__section__content-wrapper">
          <p className="history-of-the-center-page__main__section__content">
            <img
              className="history-of-the-center-page__main__section__image"
              src="https://archaeology.uz/storage/images/11.jpg"
              alt="Milliy Arxeologiya markazi"
            />
            
            O‘zbekiston – turli davrlarga oid arxeologik yodgorliklar saqlanib qolgan qadim Sharq mintaqalaridan biri sifatida, dastlab XIX asr oxirlaridan boshlab V. V. Bartold, N. I. Veselovskiy kabi yirik sharqshunos olimlar, Akram Polvon Asqarov, Mirzo Abdullo Buxoriy, Muxammada Vafo, V. L. Vyatkin kabi mahalliy ishtiyoqmandalar tomonidan tadqiq etilgan bo‘lib, bu o‘z navbatida O‘zbekistondagi yosh fanlardan biri arxeologiyani shakllanishiga va rivojlanishiga zamin yaratgan. O‘zbekistonda arxeologiya fanining to‘laqonli shakllanishi XX asr boshlariga to‘g‘ri kelib, bu O‘zR FA Tarix va arxeologiya instituti, muzeylar, universitetlar, San’atshunoslik institutlarining davriy ekspeditsiyalari faoliyati bilan bevosita bog‘liqdir. 1970 yil 19 avgustda O‘zbekiston Vazirlar Mahkamasining № 426 qarori asosida O‘zR FA Tarix va arxeologiya instituti bazasida O‘rta Osiyo mintaqasida yagona bo‘lgan Arxeologiya instituti tashkil etildi. Arxeologiya instituti 1970 yil 30 sentabrdan Samarqand shahrida o‘z faoliyatini boshladi va 1988 yilda institutga uning tashkil etilishida katta hissa qo‘shgan olim, O‘zR FA akademigi Yahyo G‘ulomov nomi berildi. Shu vaqtdan boshlab moddiy va ma’naviy madaniyat tarixini tiklash uchun qadimgi yodgorliklarni tadqiq qilish, O‘zbekistonning qadimgi davri yodgorliklarini davrlashtirish, mintaqaning sug‘orilishi tarixi, arxeologik yodgorliklarni restavratsiya va konservatsiya qilishning ilmiy uslublarni ishlab chiqish institutning asosiy tadqiqot sohalariga aylandi.

            O‘zbekiston arxeologiyasi fanida uzoq yillar mobaynida o‘tkazilgan fundamental tadqiqotlar natijalarini tom ma’noda o‘zbek xalqi tarixi bilan bog‘lash mamlakatimiz mustaqillikka erishgan dastlabki yillardan boshlandi. Mustaqillikning dastlabki davrlaridan boshlab xalqimizning qadim o‘tmishi, shonli tarixi, ajdodlarimizdan qolgan nodir madaniy merosni ilmiy o‘rganish, uni asrash bo‘yicha yangicha yondashuv, talab va vazifalar davlat miqyosida kun tartibiga qo‘yildi. Ayniqsa, O‘zbekiston Prezidenti I.A. Karimovning 1998 yilda respublikamizning bir guruh yetakchi tarixchi, arxeologlari bilan o‘tkazgan uchrashuvi va ushbu uchrashuv natijasi o‘laroq, Respublika Vazirlar Mahkamasining “O‘zR FA Tarix instituti faoliyatini takomillashtirish to‘g‘risida” chiqqan qarori istiqbolda, tarixchi, arxeologlar tomonidan o‘tkaziladigan tadqiqotlarning dasturi amali bo‘lib xizmat qildi. Mazkur qarorning qadimgi tarix, xususan arxeologiyaga oid bandlaridagi vazifalardan kelib chiqqan holda, Arxeologiya institutida “O‘zbekistonda Arxeologiya fanini rivojlantirish konsepsiyasi” ishlab chiqildi.
              
            Mustaqillik yillarida nihoyatda faollashgan tadqiqotlar ko‘lami va ularning ilmiy samarasi tufayli, O‘zbekiston arxeologiyasi dunyo ilm-fani darajasiga ko‘tarildi. Bu esa, o‘z navbatida, O‘zbekiston arxeologiyasi uchun dunyodagi yetakchi arxeologiya markazlari bilan ilmiy hamkorlik o‘rnatishga, teng asosda xalqaro kelishuvlar tuzishga zamin yaratdi. Ayni paytda, O‘zbekiston hududida Avstraliya, AQSH, Germaniya, Italiya, Ispaniya, Polsha, Rossiya, Fransiya, Yaponiya kabi davlatlarning arxeolog olimlari bilan hamkorlikda xalqaro miqyosda arxeologik tadqiqotlar olib borilmoqda.
              
            1959 yildan “O‘zbekiston moddiy madaniyati tarixi”, 2002 yildan “O‘zbekistonda arxeologik tadqiqotlar” yillik to‘plamlari nashr etilib, ularda Respublikamiz hududida olib borilayotgan arxeologik tadqiqotlarning umumlashma ilmiy xulosalari berib boriladi. 2010 yildan esa “O‘zbekiston Arxeologiyasi” ilmiy jurnali chop etila boshlandi.
              
            O‘zbekiston arxeologiyasi hozirgi paytda millat manfaati, uning madaniy –ma’naviy hayoti, mustaqillik g‘oyalari talab va istaklaridan kelib chiqqan holda faoliyat yuritmoqda, fanga xizmat qilmoqda. Belgili tavallud yoshlari nishonlangan Ahmad al–Farg‘oniy, imom Moturudiy, imom al–Buxoriy, Burhoniddin Marg‘inoniy, sohibqiron Amir Temur, Mirzo Ulug‘bek kabi ulug‘ salaflarimizning ilmiy merosi, ular yashab o‘tgan davr madaniyati taraqqiyotini o‘rganishda, Samarqand, Buxoro, Qarshi, Shahrisabz, Xiva, Termiz, Toshkent, Marg‘ilon singari qadimiy shaharlarimizning muborak tarixiy sanalarini rasman aniqlashda, o‘zbek arxeologiyasining xizmatlari beqiyos bo‘ldi. Ushbu yubiley tantanalarini BMT ning maxsus bo‘limi YUNЕSKO shafeligi ostida o‘tkazilishi, so‘nggi deyarli 25 yil davomida mamlakatimizda olib borilgan arxeologiya fani izlanishlarining naqadar serqirra va sermahsul bo‘lganligidan dalolat berdi. Bunga qadim tariximizni har tomonlama, chuqur o‘rganish uchun davlatimiz tomonidan ko‘rsatilayotgan g‘amxo‘rlik, yaratilgan shart-sharoitlar asosiy tamal toshi bo‘lganligini va ana shu omillar sababli O‘zbekiston arxeologiyasi rivojlanib dunyoga tanilganligini alohida ta’kidlashga burchlimiz.
          </p>
        </div>
      </section>
    </main>
  );
}
