import React from 'react'
import './homePage.scss'

import Main from './items/main/Main'
import Section from './items/section/Section'



export default function HomePage() {
 

  return (
    <div className="home-page">
      
      <div className='home-page__main_wrapper'>
        <Main/> 
      </div> 

      <div className='home-page__section_wrapper'>
        <Section/>
      </div>

    </div> 
  )
}
