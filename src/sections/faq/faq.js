import React from 'react'
import './faq.css'

export default function Faq() {
  return (
    <div className='faq_section'>
      <div className='container'>
      <p className='faq_title'>FAQ</p>
      <p className='faq_text'>Frequently asked questions</p>
      <div className='row faq_gap'>
        <div className='faq-col'>
        <div className='faq_card'>
            <p className='faq_card_title'>What type of projects do you take on?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        <div className='faq_card faq_margin'>
            <p className='faq_card_title'>What is your hourly rate?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        <div className='faq_card faq_margin2'>
            <p className='faq_card_title'>What time-zone do you work in?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        <div className='faq_card'>
            <p className='faq_card_title'>What is the typical timeline for a project?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        </div>
        <div className='faq-col'>
        <div className='faq_card'>
            <p className='faq_card_title'>How do you charge for projects ?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        <div className='faq_card faq_margin'>
            <p className='faq_card_title'>What does your design process look like?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        <div className='faq_card faq_margin2'>
            <p className='faq_card_title'>What metrics do you use to measure success?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        <div className='faq_card'>
            <p className='faq_card_title'>What if I need help after the project is complete?</p>
            <img src='faq/faq.png' alt='icon'/>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
