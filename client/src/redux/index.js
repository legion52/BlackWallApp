import { combineReducers, configureStore } from '@reduxjs/toolkit'
import curencyReducer from './curencySlice'

const rootReducer = combineReducers({
  currency: curencyReducer,

})

export const store = configureStore({
  reducer: rootReducer,
})
