import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './Components/Common/Navbar/Navbar'
import { AppRouter } from './Routes/AppRouter'

import './Styles/styles.scss'
import "animate.css"

import WOW from 'wowjs'

export const Portfolio = () => {

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init()
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

