import React from 'react'
import BlogCard from '../../components/blog_card/blogcard'
import './blog.css'

export default function Blog() {
    return (
        <div className='blog_section'>
            <div className='container'>
                <div className='row flex-wrap blog_gap'>
                    <div className='text_col'>
                        <p className='blog_title'>Blogs</p>
                        <p className='blog_description'>Latest Blogs</p>
                        <div className='d-flex'>
                            <p className='blog_text'>View all</p>
                            <img className='blog_icon mx-3'  src='icon2.png' alt='icon' />
                        </div>
                    </div>
                    <div className='forMargin'>
                    <BlogCard/>
                    </div>
                </div>
            </div>
            </div>
            )
}
