import React from 'react'
import './main.css'

export default function Main() {
  return (
    <div className='container'>
        <div className='main_section'>
            <p className='main_title'>Trusted by</p>
            <div className='row main_gap'>
                <div className='main_col'>
                    <img src='./main/main1.png' alt='main'></img>
                </div>
                <div className='main_col'>
                    <img src='./main/main2.png' alt='main'></img>
                </div>
                <div className='main_col'>
                    <img src='./main/main3.png' alt='main'></img>
                </div>
                <div className='main_col'>
                    <img src='./main/main4.png' alt='main'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
