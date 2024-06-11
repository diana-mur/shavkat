import React from 'react'
import "./CardInfo.css"

export default function CardInfo (props) {
    let { card_icon, card_title, card_info } = props
    return (
        <div className='card_infp_cont'>
            <div className='card_info_item'>
                <img src={card_icon} alt="" />
                <p className="card_title">{card_title}</p>
                <p className="card_disc">{card_info}</p>
            </div>

        </div>
    )
}
