import React from 'react'
import "./Farm.css"

const Farm = () => {
    return (
        <div className='farm_cont'>
            <h1 className="title_txt">Веселая ферма</h1>
            <div className="farm_item">
                <div className="p1">
                    <img src="./src/assets/picture/farm_img1.png" alt="farm" />
                    <img src="./src/assets/picture/farm_img2.png" alt="farm" />
                    <div className="farm_info">
                        <p className="into_main">г. Оренбург, ул. Володарского 37 </p>
                        <p className="into_main">1 час - 1,5 часа <br></br><span className="into_secnd">*дети до года бесплатно </span></p>
                        <p className="into_main">350 руб</p>
                    </div>

                </div>
                <div className="p2">
                    <div className="farm_disc">
                        <p>На ферме в Фонаре вы сможете познакомиться с нашими веселыми обитателями, покормить их, погладить и пообщаться. А ещё у нас проводятся увлекательные фотосессии с животными.</p>
                        <p>У нас живут такие замечательные животные, как ёжики, морские свинки, кролики, гусь, утка, утка дикая, петух, попугай, хорёк, собачки, кошечки и даже лиса! Каждый из них уникален и ждёт встречи с вами</p>
                    </div>
                    <img src="./src/assets/picture/farm_img3.png" alt="farm" />
                </div>
            </div>
        </div>
    )
}

export default Farm