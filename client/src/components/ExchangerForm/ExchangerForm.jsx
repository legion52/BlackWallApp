import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Block from '../Block/Block'
import style from './style.module.scss'
import { setFilter } from '../../redux/curencySlice'

export default function ExchangerForm() {
  const [fromBlock, setFromBlock] = useState({ current: 'Все' })
  const [toBlock, setToBlock] = useState({ current: 'Все'})
  const [currentCurrency, setCurrentCurrency] = useState('BTC')
  const categories = useSelector(state => state.currency.categories)
  const dispatch = useDispatch()

  const changeFromBlock = (cur) => {
    setFromBlock((prev) => ({ ...prev, current: cur }))
    setToBlock((prev) => ({ ...prev, current: 'Все' }))
    dispatch(setFilter(null))
    setCurrentCurrency(categories[cur][0])
  }

  const changeToBlock = (cur) => {
    setToBlock((prev) => ({ ...prev, current: cur }))
  }

  const changeCurrentCurrency = (cur) => {
    setCurrentCurrency(cur)
    setToBlock((prev) => ({ ...prev, current: 'Все' }))

  }
  useEffect(() => {
    dispatch(setFilter(currentCurrency))
  }, [currentCurrency])

  return (
    <div className={style.wrapper}>
      <span className={style.title}>Отдаете</span>
      <Block currency={fromBlock} setCurrency={changeFromBlock} currentCurrency={currentCurrency} setCurrentCurrency={changeCurrentCurrency} />
      <span className={style.title}>Получаете</span>
      <Block to={true} currency={toBlock} setCurrency={changeToBlock} />
    </div>
  )
}

