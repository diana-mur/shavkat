import React from 'react'
import "./Ivents.css"

const Ivents = () => {
    return (
        <div>
            <h1 className="title_txt center_txt">Мероприятия</h1>
            <div className="cards_ivents">
                <div className="card_iv">
                    <div className="info_iv_card">
                        <p className="info_iv_title">Квартирник</p>
                        <p className="info_iv_disc">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed. Ultricies diam est aliquet porta fermentum molestie morbi libero. Ultrices sit in elit eget nullam sem. Urna velit imperdiet habitant in.</p>
                        <div className="info_iv_min1">
                            <p className="iv_min">ул. Володарского 22</p>
                            <p className="iv_min">19:30</p>
                        </div>
                        <div className="info_iv_min2">
                            <p className="iv_min">200р</p>
                            <p className="iv_min">21.12.2023</p>
                        </div>
                    </div>
                    <img className='img_iv_card' src="./src/ivenimg/ivimg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Ivents