import React from 'react'
import './main.scss'
import Card from '../card/Card'


import Category from '../../../../components/category/Category'


export default function Main() {

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
        uz: "Aloqa",
        ru: "Контакты",
        en: "Contacts",
      },
      link: "/",
    },
  ];


  return (
    <main className='contacts-page__main'>
        

        <Category data={menuData}/>


        <Card/>

        
    </main>
  )
}
