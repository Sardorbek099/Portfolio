import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer_section'>
      <div className='container'>
        <p className='footer_title'>Ready to make something kickass?</p>
        <p className='footer_text'>Let's get on a call.</p>
        <div className='d-flex footer_gap'>
            <div>
                <img className='footer_logo' src='./footer/footer.png' alt='logo'/>
                <p className='footer_location'>4353 Delaware Avenue, San Francisco, USA</p>
                <div className='email_div'>
                <img className='footer_email_img' src='./footer/footer2.png' alt='logo'/>
                <p className='footer_email'>hi@thefolio.com</p>
                </div>
            </div>
            <div className='d-flex'>
                <ul className='footer_nav'>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>About</a>
                    </li>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Contact</a>
                    </li>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Dribbble</a>
                    </li>
                </ul>
                <ul className='footer_nav footer_nav2'>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Services</a>
                    </li>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Blog</a>
                    </li>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Instagram</a>
                    </li>
                </ul>
                <ul className='footer_nav footer_nav3'>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Experience</a>
                    </li>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Projects</a>
                    </li>
                    <li className='footer_nav_item'>
                        <a className='footer_nav_link' href='https://youtube.com'>Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='footer_texts'>
        <p className='footer_info'>© All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
