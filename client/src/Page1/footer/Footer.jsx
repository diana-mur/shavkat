import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <img src="./src/assets/Logo.svg" alt="" />
      <div className="footer_contact">
        <p className="footer_addres">г. Оренбург, ул. Володарского 37 </p>
        <div className="footer_tell">+7 (903) 367-38-45 </div>
      </div>
      <div className="footer_soc">
        <img src="./src/assets/svg/inst.svg" alt="" />
        <img src="./src/assets/svg/tg.svg" alt="" />
        <img src="./src/assets/svg/vk.svg" alt="" />
        <img src="./src/assets/svg/utoob.svg" alt="" />
        </div>
    </div>
  )
}

export default Footer