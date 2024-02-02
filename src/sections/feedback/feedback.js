import React from 'react'
import './feedback.css'

export default function Feedback() {
  return (
    <div className='feedback_section'>
      <div className='container'>
        <p className='feedback_title'>Testimonials</p>
        <p className='feedback_description'>Word on the street</p>
        <div className='row justify-content-between'>
            <div className='feedback_col1'>
                <img src='./feedback/feedback.png' alt='feedback'/>
            </div>
            <div className='feedback_col2'>
                <img className='comment' src='./feedback/feedback2.png' alt='feedback'/>
                <p className='feedback_text'>
                Jade helped us build a software so <br/> intuitive that it didn't need a <br/> walkthrough. He solved complex <br/> problems with brilliant design.
                </p>
                <div className='feedback_footer'>
                    <div>
                    <p className='feedback_author'>John Frankin</p>
                    <p className='feedback_work'>Founder, Double Bunch</p>
                    </div>
                    <div className='d-flex feedback_button'>
                        <button>
                        <img src='./feedback/feedback3.png' alt='feedback'/>
                        </button>
                        <button>
                        <img src='./feedback/feedback4.png' alt='feedback'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
