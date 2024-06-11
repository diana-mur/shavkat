import React from 'react'
import "./Galery.css"
import Header from '../headerElements/Header'
import Footer from '../Page1/footer/Footer'
import GaleryCont from './galeryCont/GaleryCont'

const Galery = () => {
  return (
    <div>
        <Header />
        <GaleryCont />
        <Footer />
    </div>
  )
}

export default Galery