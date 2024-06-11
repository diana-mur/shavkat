import React from 'react'
import "./Photogr.css"

const Photogr = () => {
    return (
        <div className='phot_cont'>
            <p className="title_txt txt_center">Фотограф</p>
            <div className="card_fpot_item">
                <div className="phot_card" style={{ backgroundImage: 'url("./src/assets/picture/phot/phot1.png")' }}>
                    <p className="phot_title">фотосессия<br></br>
                        30 минут</p>
                    <p className="phot_disc">Аренда студии<br></br>
                        750 рублей</p>
                    <p className="phot_disc">Работа фотографа<br></br>
                        1500 рублей</p>
                </div>
                <div className="phot_card" style={{ backgroundImage: 'url("./src/assets/picture/phot/phot2.png")' }}>
                    <p className="phot_title">фотосессия<br></br>
                        60 минут</p>
                    <p className="phot_disc">Работа фотографа<br></br>
                        1500 рублей</p>
                    <p className="phot_disc">Работа фотографа<br></br>
                        2000 рублей</p>
                </div>
                <div className="phot_card" style={{ backgroundImage: 'url("./src/assets/picture/phot/phot3.png")' }}>
                    <p className="phot_title">Доп. услуги</p>
                    <p className="phot_disc">Кудри:<br></br>
                        мама 600 рублей<br></br>
                        Дочь 300 рублей</p>
                    <p className="phot_disc">макияж 500 рублей</p>
                </div>
            </div>

        </div>
    )
}

export default Photogr