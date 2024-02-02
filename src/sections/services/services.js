import React from 'react'
import Card from '../../components/services_card/card'
import './sevices.css'

export default function Services() {
  return (
    <div className='services_section'>
        <div className='container2'>
            <p className='services_title'>Services</p>
            <p className='services_description'>Design that solves problems,<br/> one product at a time.</p>
            <div className='row services_gap'>
                <Card/>
            </div>
        </div>
    </div>
  )
}
