import React from 'react'
import Header from '../headerElements/Header'
import Vizazhist from './servicesBlock/Vizazhist'
import Arenda from './arenda/Arenda'
import Photogr from './photogr/Photogr'
import Ivent from './ivent/Ivent'
import Footer from '../Page1/footer/Footer'

const Services = () => {
  return (
    <div>
        <Header />
        <Vizazhist />
        <Arenda />
        <Photogr />
        <Ivent />
        <Footer />
    </div>
  )
}

export default Services