import React from 'react'
import style from '../assets/css/header.module.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
  const navLinkStyle = ({isActive}) =>{
      return {
        borderBottom : isActive ?  '2px solid #FFF' : ''
      }
  }
  return (
    <div>

        <div className={style.header}>
            <ul>
                <NavLink style={navLinkStyle} to="/">Home</NavLink>
                <NavLink style={navLinkStyle} to="/Post">Post</NavLink>
            </ul>
        </div>
    </div>
  )
}
