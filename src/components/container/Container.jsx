import React from 'react'
import style from './container.module.scss'

export default function Container({children}) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
