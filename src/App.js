import React, { useEffect } from 'react'
import './reset.css'
import './index.css'

import { Header } from './Header/Header'
import Nav from './MainSection/Nav'
import Categories from './Categories'
import OrderNavigation from './OrderNavigation'
import BestSeller from './BestSeller'
import Register from './Register'
import Services from './Services' 
import { useDispatch } from 'react-redux'
import { fillData } from './Redux/amiguSlice'

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fillData())    
  })


  return (
    <div>
      {/* <Counter/>  */}
      {/* <CrackMain /> */}

      <Header />
      <Nav />
      <Categories />
      <OrderNavigation />
      {/* <BestSeller /> 
      <Services />
      <Register /> */}
    </div>
  )
}

export default App