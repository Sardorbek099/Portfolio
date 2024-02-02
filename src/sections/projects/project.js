import React from 'react'
import './project.css'

export default function Project() {
  return (
    <div className='project_section'>
    <div className='container'>
      <div className='d-flex justify-content-between'>
      <div className='project_texts'>
        <p className='project_title'>PROJECTS</p>
        <p className='project_description'>I bring results.<br/>My clients are proof.</p>
       </div>
       <div className='project_button'>
        <button className='button_project'>View all projects</button>
       </div>
      </div>
      <div className='row project_gap'>
        <div className='project_col'>
            <div className='project_card'>
                <img src='./projects/project1.png' alt='project'/>
            </div>
            <div className='project_card_body'>
                <p className='project_card_title'>Branding</p>
                <p className='project_card_text'>Soulful Rebrand</p>
                <div className='d-flex'>
                    <p className='project_card_description'>View Project</p>
                    <img className='project_icon' src='navbar_icon.png' alt='icon'/>
                </div>
            </div>
        </div>
        <div className='project_col'>
            <div className='project_card'>
                <img src='./projects/project2.png' alt='project'/>
            </div>
            <div className='project_card_body'>
                <p className='project_card_title'>Product Design</p>
                <p className='project_card_text'>Datadash Product design</p>
                <div className='d-flex'>
                    <p className='project_card_description'>View Project</p>
                    <img className='project_icon' src='navbar_icon.png' alt='icon'/>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
