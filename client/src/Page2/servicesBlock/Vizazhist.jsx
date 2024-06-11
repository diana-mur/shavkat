import React, { useRef } from 'react';
import "./Vizazhist.css"
import VizCard from './vizCard/VizCard'

const Vizazhist = () => {
    const sliderGalRef = useRef(null);

    const preventScroll = (e) => {
        e.preventDefault();
    };

    return (
        <div className='viz_cont'>
            <h1 className="title_txt">Услуги</h1>
            <div className="viz_swiper">
                <p className="title_txt viz_titl">Визажист</p>
                <div
                    onWheel={(e) => {
                        e.preventDefault();
                        sliderGalRef.current.scrollLeft += e.deltaY;
                    }}
                    onMouseEnter={() => {
                        document.body.style.overflow = 'hidden';
                    }}
                    onMouseLeave={() => {
                        document.body.style.overflow = 'auto';
                    }}
                    ref={sliderGalRef}
                    className="viz_swiper_item"
                >
                    
                    <VizCard
                        bg_vizcard='./src/assets/picture/viz_pic/kor_glaz.png'
                        card_viz_titl="коррекция макияжа глаз"
                        card_viz_price="300 рублей"
                    />
                    <VizCard
                        bg_vizcard='./src/assets/picture/viz_pic/nak_res.png'
                        card_viz_titl="накладные реснички"
                        card_viz_price="300 рублей"
                    />
                    <VizCard
                        bg_vizcard='./src/assets/picture/viz_pic/kor_mak.png'
                        card_viz_titl="коррекция макияжа"
                        card_viz_price="500 рублей"
                    />
                    <VizCard
                        bg_vizcard='./src/assets/picture/viz_pic/foto_mak.png'
                        card_viz_titl="фотомакияж"
                        card_viz_price="800 рублей"
                    />
                    <VizCard
                        bg_vizcard='./src/assets/picture/viz_pic/muz_mak.png'
                        card_viz_titl="мужской макияж"
                        card_viz_price="500 рублей"
                    />
                    <VizCard
                        bg_vizcard='./src/assets/picture/viz_pic/det_mak.png'
                        card_viz_titl="детский макияж и укладка"
                        card_viz_price="300 рублей"
                    />
                    <VizCard
                        bg_vizcard='./src/assets/picture/viz_pic/demak.png'
                        card_viz_titl="демакияж"
                        card_viz_price="300 рублей"
                    />
                </div>
            </div>
        </div>
    );
}

export default Vizazhist;
