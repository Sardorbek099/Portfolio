import React from 'react'
import Header from '../sections/header/header'
import Main from '../sections/main/main'
import Services from '../sections/services/services'
import Project from '../sections/projects/project'
import Blog from '../sections/blog/blog'
import Product from '../sections/products/product'
import Education from '../sections/education/education'
import Feedback from '../sections/feedback/feedback'
import Faq from '../sections/faq/faq'
import Footer from '../components/footer/footer'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Main/>
      <Services/>
      <Project/>
      <Blog/>
      <Product/>
      <Education/>
      <Feedback/>
      <Faq/>
      <Footer/>
    </div>

  )
}
