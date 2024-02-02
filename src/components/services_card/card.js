import React from 'react'
import './card.css'


let cardItems = [
    {
        imageUrl:'./services/service1.png',
        title:'What I can do for you',
        description:"Faster, better products that your users love. Here's all the services I provide:",
        ulItems:['Design Strategy','Web and Mobile App Design','Front-end Development']
    },
    {
        imageUrl:'./services/service2.png',
        title:"Applications I'm fluent in",
        description:"Every designer needs the right tools to do the perfect job Thankfully, I'm multilingual.",
        ulItems:['Sketch','Webflow','Figma']
    },
    {
        imageUrl:'./services/service3.png',
        title:'What you can expect',
        description:"I design products that are more than pretty. I make them shippable and usable.",
        ulItems:['Clean and functional','Device and user friendly','Efficient and maintainable']
    }
]

export default function Card() {
  return (
    cardItems.map((item) =>{
        return(
            <div className='services_card'>
            <img src={item.imageUrl} alt='nimadir'/>
            <div className='services_card_body'>
                <p className='services_card_title'>{item.title}</p>
                <p className='services_card_text'>{item.description}</p>
            </div>
            <ul className='services_card_navbar'>
                <li className='services_card_navbar_item'>{item.ulItems[0]}</li>
                <li className='services_card_navbar_item'>{item.ulItems[1]}</li>
                <li className='services_card_navbar_item'>{item.ulItems[2]}</li>
            </ul>
            </div>
        )
    })
  )
}
