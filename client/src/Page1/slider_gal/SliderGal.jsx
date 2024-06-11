import React, { useRef } from 'react';
import './SliderGal.css';

const SliderGal = () => {
  const sliderGalRef = useRef(null);

  const preventScroll = (e) => {
    e.preventDefault();
  };

  return (
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
    >
      <div className="sliderGal-wrapper" ref={sliderGalRef}>
        <div className="sliderGal-item">
          <img src="https://sun51-2.userapi.com/impg/EIoCjxLhXQI3D417votI5NviaNvZbwQtjC9kwQ/yjfP3YygHho.jpg?size=1170x781&quality=95&sign=1f5df9f9507f116c067bbdc9ce16b10d&type=album" alt="Slide 1" />
        </div>
        <div className="sliderGal-item">
          <img src="https://sun9-63.userapi.com/impg/h7PauVZl6Wvqij9EOgILz4gRzBAcuJuRn04BGA/CCTkVn4o9O4.jpg?size=1024x1280&quality=95&sign=7a380899a092b6ecc160f323b73ee254&type=album" alt="Slide 2" />
        </div>
        <div className="sliderGal-item">
          <img src="https://sun9-10.userapi.com/impg/FjaRZWeNpeoMPjMXkTbKhZ2ZgIOpC8lxEKXeWg/auFNUXwhqvk.jpg?size=855x1280&quality=95&sign=be37b3a0e455b402600113f1dc968435&type=album" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://sun9-42.userapi.com/impg/7YnXgKn1DL_w8a34IgeeEF16m1A4dz3kgJT-WQ/JeJgF1grAsQ.jpg?size=1170x782&quality=95&sign=7660fe7d42da9a08cbbb953da1c08242&type=album" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://sun9-29.userapi.com/impg/effOWjhyeEpKqLJbE8TnyGkG1IJBmhadbykwCg/FzcmbyE_su4.jpg?size=1170x782&quality=95&sign=10da380b328803aafc324f91edab1a40&type=album" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://sun9-8.userapi.com/impg/IoCDtWZ6ag-ES4mXk56X_aTjiRvXP8pzXMdY6w/hH5cdfxDcr0.jpg?size=1170x782&quality=95&sign=583869137f4d7cc0802237d83f697d16&type=album" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://sun9-50.userapi.com/impg/y-BmlxH84Xu1XAD2QLipIopZDj1VoXkEjMfYRg/6bqfYq82-YM.jpg?size=1170x782&quality=95&sign=fceb778dfcfc55326bf6302a61d71410&type=album" alt="Slide 3" />
        </div>
      </div>
    </div>
  );
}

export default SliderGal;
