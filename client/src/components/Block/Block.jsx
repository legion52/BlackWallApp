import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Input from '../UI/Input/Input'
import style from './style.module.scss'

export default function Block({ currency, setCurrency, currentCurrency, setCurrentCurrency, to }) {
  const categories = useSelector(state => state.currency.categories)
  const defaultCurrencies = Object.keys(categories)
  const [list, setList] = useState(categories)
  const filter = useSelector(state => state.currency.currentFilter[0])

  useEffect(() => {
    if (filter && to) {
      let cur = {}
      defaultCurrencies.map(el => cur[el] = categories[el].filter(el => filter['to'].map(el => el['code']).indexOf(el) > -1))
      setList(cur)
    }
    else {
      setList(categories)
    }
  }, [filter])

  return (
    <div className={style.block}>
      <div >
        <ul className={style.cat}>
          {defaultCurrencies.map((cur) => (
            <li key={cur} className={`${style} ${currency.current === cur ? style.active : ''}`} onClick={() => setCurrency(cur)}>{cur} </li>
          ))}
        </ul>
      </div>
      <Input filter={filter} list={list[currency.current]} currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency} />
    </div>
  )
}
