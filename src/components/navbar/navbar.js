import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='container'>
    <div className='navbar_section'>
    <div className='navbar_logo'>
        <img src='navbar_logo.png' alt='logo' />    
    </div>
    <div className='navbar_links'>
    <ul className='navbar'>
        <li className='navbar_item'>
            <a className='navbar_item_link' href='https://youtube.com'>About</a>
        </li>
        <li className='navbar_item'>
            <a className='navbar_item_link' href='https://youtube.com'>Services</a>
        </li>
        <li className='navbar_item'>
            <a className='navbar_item_link' href='https://youtube.com'>Projects</a>
        </li>
        <li className='navbar_item'>
            <a className='navbar_item_link' href='https://youtube.com'>Blog</a>
        </li>
        <li className='navbar_item'>
            <a className='navbar_item_link' href='https://youtube.com'>Book a call</a>
        </li>
    </ul>
    <img src='navbar_icon.png' alt='icon'/>
    </div>
    </div>
    </div>
  )
}
