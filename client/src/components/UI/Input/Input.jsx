import { useState } from 'react';
import style from './style.module.scss'
export default function Input({ list, setCurrentCurrency, currentCurrency }) {
  const [title, setTitle] = useState('')
  return (
    <div className={style.inputBox}>
      <input onChange={(e) => setTitle(e.target.value)} disabled={list.length < 1} value={list.length < 1 ? 'Выберите другую категорию!' : title} type="text" />
      <select onChange={(e) => setCurrentCurrency(e.target.value)}>
        {list.map(el => <option key={el} >{el}</option>)}
      </select>

    </div>
  )
}

