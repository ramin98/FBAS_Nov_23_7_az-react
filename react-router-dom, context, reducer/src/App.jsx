import { createContext, useState, useRef, useReducer } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import { initialObjectProducts, productsReducer } from './reducers/reducersState/productsReducer'

export const MyContext = createContext()

function App() {
  let product = useRef(null);

  let [productsState, productsDispatch] = useReducer(productsReducer, initialObjectProducts)

  return (
    <MyContext.Provider value={{productsState, productsDispatch, product}}>
      <Header/>
      <MainComponent/>
      <Footer/>
    </MyContext.Provider>
  )
}

export default App


