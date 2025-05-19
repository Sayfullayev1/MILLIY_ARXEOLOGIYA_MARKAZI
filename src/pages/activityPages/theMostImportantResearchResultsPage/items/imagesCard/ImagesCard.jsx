import React from 'react'
import style from './imagesCard.module.scss'


export default function ImagesCard({imagesData}) {
  return (
    <div className={style.imagesCardContainer}>
      {imagesData?.map((item, index) => (
        <div key={index} className={style.card}>
          <img src={typeof item === 'string' ? item : item.url} alt="" className={style.image} />
        </div>
      ))}
    </div>
  )
}
