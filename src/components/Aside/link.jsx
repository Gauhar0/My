import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import l from './link.module.css'
 function Linke(props) {
  return (
    <div className=''> 
        <Link to={props.url}>{props.massage}</Link>
    
    </div>
  )
}
export default Linke