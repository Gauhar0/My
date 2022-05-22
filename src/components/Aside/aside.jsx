import React from 'react'
import { NavLink } from 'react-router-dom'
import {BrowserRouter, Router } from 'react-router-dom'
import a from './aside.module.css'
import Linke from './link'
 function Aside() {
  return (
    <div className={a.aside}> 
    <BrowserRouter>
    <Linke url='/profile' massage="Profile"/>
    <Linke url='/massages' massage="Massages"/>
    <Linke url='/music' massage="Music"/>
    <Linke url='/news' massage="News"/>
    <Linke url='/settings' massage="Settings"/>
    </BrowserRouter>
    </div>
  )
}
export default Aside
