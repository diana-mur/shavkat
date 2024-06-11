import React from 'react'
import "./Ivent.css"

const Ivent = () => {
  return (
    <div className='ivent_cont'>
        <p className="title_txt txt_center">Мероприятия</p>
        <div className="ivent_item">
            <img className='ivent_img' src="./src/assets/picture/ivent/photoday.svg" alt="" />
            <img className='ivent_img' src="./src/assets/picture/ivent/devich.svg" alt="" />
            <img className='ivent_img' src="./src/assets/picture/ivent/kvartitnik.svg" alt="" />
            <img className='ivent_img' src="./src/assets/picture/ivent/zoougol.svg" alt="" />
        </div>
    </div>
  )
}

export default Ivent