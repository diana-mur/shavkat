import React from 'react'
import "./Arenda.css"

const Arenda = () => {
    return (
        <div className='arenda_cont'>
            <p className="title_txt txt_center">Аренда фотостудии</p>
            <div className="location_arenda">
                <div className="location_item" style={{ backgroundImage: 'url("/src/assets/picture/location/loc1.png")' }}>
                    <div className="overlay">
                        <p className="loc_name">Название</p>
                        <p className="loc_price">1 час 1200 рублей</p>
                    </div>
                </div>
                <div className="location_item" style={{ backgroundImage: 'url("/src/assets/picture/location/loc2.png")' }}>
                    <div className="overlay">
                        <p className="loc_name">Название</p>
                        <p className="loc_price">1 час 1200 рублей</p>
                    </div>
                </div>
                <div className="location_item" style={{ backgroundImage: 'url("/src/assets/picture/location/loc3.png")' }}>
                    <div className="overlay">
                        <p className="loc_name">Название</p>
                        <p className="loc_price">1 час 1200 рублей</p>
                    </div>
                </div>
                <div className="location_item" style={{ backgroundImage: 'url("/src/assets/picture/location/loc4.png")' }}>
                    <div className="overlay">
                        <p className="loc_name">Название</p>
                        <p className="loc_price">1 час 1200 рублей</p>
                    </div>
                </div>
                <div className="location_item" style={{ backgroundImage: 'url("/src/assets/picture/location/loc5.png")' }}>
                    <div className="overlay">
                        <p className="loc_name">Название</p>
                        <p className="loc_price">1 час 1200 рублей</p>
                    </div>
                </div>
                <div className="location_item" style={{ backgroundImage: 'url("/src/assets/picture/location/grim.png")' }}>
                    <div className="overlay">
                        <p className="loc_name">Название</p>
                        <p className="loc_price">1 час 1200 рублей</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Arenda