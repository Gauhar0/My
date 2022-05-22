import React from 'react'
import h from './header.module.css'
import logo from './img/logo.jpg'

 function Header() {
  return (
    <div className={h.header}>
        <img src={logo} alt="" />
        <div>
            <a href="">Sign in</a>
            <a href="">Sign up</a>
        </div>

    </div>
  )
}
export default Header
