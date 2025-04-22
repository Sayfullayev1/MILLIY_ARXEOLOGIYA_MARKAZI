import React from 'react'
import './category.scss'



export default function Category() {

    const data = [
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
        ]
  return (
    <div className='category'>

        <h1></h1>

        <ul>
            {/* {
                data.map((item, index) => {

                    if () {
                       return (
                            <li key={index}>

                            </li>
                        ) 
                    } else {
                        return (
                            <li key={index}>

                            </li>
                        )
                    }
                })       
            } */}
        </ul>

    </div>
  )
}
