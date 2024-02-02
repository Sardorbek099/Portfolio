import React from 'react'
import './product.css'

export default function Product() {
  return (
    <div className='product_section'>
      <div className='container'>
            <div className='d-flex'>
                <div className='texts1'>
                    <p className='product_title'>Product Designer</p>
                    <p className='product_text'>That's me!</p>
                </div>
                <div className='texts2'>
                    <p className='product_description'>
                    Over the past 12 years, I've worked with a diverse range of <br/> clients, from startups to Fortune 500 companies. I love crafting <br/> interfaces that delight users and help businesses grow.
                    </p>
                </div>
            </div>
            <div className='row product_gap product_margin'>
                <div className='product_col1'>
                    <img src='./products/product1.png' alt='product'/>
                </div>
                <div className='product_col2'>
                    <img src='./products/product2.png' alt='product'/>
                </div>
                <div className='product_col3'>
                    <img src='./products/product3.png' alt='product'/>
                    <img className='product_mt' src='./products/product4.png' alt='product'/>
                </div>
            </div>
      </div>
    </div>
  )
}
