import React from 'react'
import './education.css'

export default function Education() {
    return (
        <div className='education_section'>
            <div className='container'>
                <div className='row education_gap'>
                    <div className='education_col'>
                        <p className='education_title'>📚 Education</p>
                        <div className='education_card'>
                            <p className='education_card_title'>Stanford University</p>
                            <div className='card-texts'>
                                <p className='education_card_text'>MSc (Human Computer Interaction)</p>
                                <div className='d-flex'>
                                    <p className='education_card_date mt-1'>• 2013-2015</p>
                                    <img className='education_icon' src='icon3.png' alt='icon' />
                                </div>
                            </div>
                        </div>
                        <div className='education_card'>
                            <p className='education_card_title'>MIT Summer School</p>
                            <div className='card-texts'>
                                <p className='education_card_text'>UX Training Bootcamp</p>
                                <div className='d-flex'>
                                    <p className='education_card_date mt-2'>• 2013-2014</p>
                                    <img className='education_icon' src='icon3.png' alt='icon' />
                                </div>
                            </div>
                        </div>
                        <div className='education_card'>
                            <p className='education_card_title'>California State University</p>
                            <div className='card-texts'>
                                <p className='education_card_text'>BSc in Software Engineering</p>
                                <div className='d-flex'>
                                    <p className='education_card_date mt-3'>• 2009-2012</p>
                                    <img className='education_icon' src='icon3.png' alt='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='education_col'>
                        <p className='education_title2'>💼 Work Experience</p>
                        <div className='education_card'>
                            <div className='d-flex forGap'>
                                <div>
                                    <img className='experience_img' src='./education/education1.png' alt='education' />
                                </div>
                                <div className='card_width'>
                                    <p className='education_card_title'>SpaceFleet</p>
                                    <div className='card-texts'>
                                        <p className='education_card_text'>Senior Product Designer</p>
                                        <div className='d-flex'>
                                            <p className='education_card_date mb-1'>• April 2019 - Current</p>
                                            <img className='education_icon' src='icon3.png' alt='icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='education_card'>
                            <div className='d-flex forGap'>
                                <div>
                                    <img className='experience_img' src='./education/education2.png' alt='edducation' />
                                </div>
                                <div className='card_width'>
                                    <p className='education_card_title'>MusicMash</p>
                                    <div className='card-texts'>
                                        <p className='education_card_text'>Information Architect</p>
                                        <div className='d-flex'>
                                            <p className='education_card_date mt-2'>• April 2016 - May 2017</p>
                                            <img className='education_icon' src='icon3.png' alt='icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='education_card'>
                            <div className='d-flex forGap'>
                                <div>
                                    <img className='experience_img' src='./education/education3.png' alt='education' />
                                </div>
                                <div className='card_width'>
                                    <p className='education_card_title'>Kingdom</p>
                                    <div className='card-texts'>
                                        <p className='education_card_text'>UI Designer</p>
                                        <div className='d-flex'>
                                            <p className='education_card_date mt-3'>• April 2016 - May 2017</p>
                                            <img className='education_icon' src='icon3.png' alt='icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
