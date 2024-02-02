import React from 'react'
import './blogcard.css'


let blogItems = [
    {
        date:'April 16, 2021',
        time:'6 mins',
        title:"Design tips for designers, that cover everything you need",
    },
    {
        date:'April 16, 2021',
        time:'5 mins',
        title:"How to build rapport with your web design clients",
    },
    {
        date:'April 16, 2021',
        time:'5 mins',
        title:"Top 6 free website mockup tools 2021",
    },
    {
        date:'April 16, 2021',
        time:'7 mins',
        title:"Logo design trends to avoid in 2021",
    },
    {
        date:'April 16, 2021',
        time:'7 mins',
        title:"22 best UI design tools",
    }
]

export default function BlogCard() {
  return (
    blogItems.map((item) =>{
        return(
            <div className='blog_col'>
            <div className='blog_card'>
            <div className='d-flex'>
                <p className='card_date'>{item.date}</p>
                <p className='card_time'>{item.time}</p>
            </div>
            <p className='card_title'>{item.title}</p>
            <div className='d-flex'>
                <p className='card_text'>Read the article</p>
                <img className='blog_icon' src='icon2.png' alt='icon'/>
            </div>
        </div>
    </div>
        )
    })
  )
}
