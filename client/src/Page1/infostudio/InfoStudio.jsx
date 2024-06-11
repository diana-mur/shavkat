import React from 'react'
import CardInfo from './cardInfo/CardInfo'
import "./InfoStudio.css"


const InfoStudio = () => {
    return (
        <div className='info_cont'>
            <CardInfo
                card_icon="./src/assets/svg/Icon Lighting.svg"
                card_title="Креативность"
                card_info="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
            />
            <CardInfo
                card_icon="./src/assets/svg/Icon Lighting.svg"
                card_title="Креативность"
                card_info="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
            />
            <CardInfo
                card_icon="./src/assets/svg/Icon Pen.svg"
                card_title="Команда"
                card_info="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
            />

            <CardInfo
                card_icon="./src/assets/svg/Icon Quality.svg"
                card_title="Оборудование"
                card_info="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
            />

            <CardInfo
                card_icon="./src/assets/svg/Icon Lamp.svg"
                card_title="Студия"
                card_info="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
            />
            <CardInfo
                card_icon="./src/assets/svg/Icon Star.svg"
                card_title="Команда"
                card_info="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
            />


        </div>
    )
}

export default InfoStudio