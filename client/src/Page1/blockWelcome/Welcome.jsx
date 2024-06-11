import React from 'react'
import "./Welcome.css"
import Header from '../../headerElements/Header'

const Welcome = () => {
  return (
    <div className='welc_container'>
        <Header />
    <div className="welc_item">
        <p className='welc_title'>Семейная ФотоСтудия</p>
        <p className='welc_name'>Фонарь</p>
        <button className='welc_btn' type="button">Связаться</button>
    </div>
    </div>
  )
}

export default Welcome