import React from 'react'
import ExchangerForm from '../ExchangerForm/ExchangerForm'
import style from './style.module.scss'

export default function Main() {
  return (
    <div className={style.container}>
      <ExchangerForm />
    </div>
  )
}

