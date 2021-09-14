import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './Components/Common/Navbar/Navbar'
import { AppRouter } from './Routes/AppRouter'

import './Styles/styles.scss'

export const Portfolio = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

