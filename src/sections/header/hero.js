import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero_section'>
        <div className='container'>
            <div className='row'>
                <div className='hero_col1'>
                    <p className='hero_title'><span className='hero_span'>I design products</span><br/>that delight and <br/> inspire people.</p>
                    <p className='hero_description'>Hi! I’m Jake, a product designer based in Berlin. I create <br/> user-friendly interfaces for fast-growing startups.</p>
                    <div className='d-flex'>
                    <button className='hero_button1'>Book a call</button>
                    <p className='hero_link'>Download CV</p>
                    <img className='hero_link_icon' src='navbar_icon.png' alt='icon'/>
                    </div>
                </div>
                <div className='hero_col2'>
                    <img src='hero.png' alt='hero' />
                </div>
            </div>
        </div>
    </div>
  )
}
