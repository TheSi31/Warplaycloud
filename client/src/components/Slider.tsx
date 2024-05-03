import React, { useState, useEffect } from 'react';
import './Slider.css';
import '../fonts/AireExterior.ttf';
import { Link } from 'react-router-dom';

interface SliderProps {
    items: string[];
    interval?: number;
}

const Slider: React.FC<SliderProps> = ({ items, interval = 15000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [items, interval]);

    return (
        <div className="slider">
            <div className="top-line"></div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`slider__item ${activeIndex === index ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${item})` }}
                > 
                    <div className="slider__content">
                        <p className="slider__title">Сервис облачного гейминга</p>
                        <h1 className="slider__subtitle">Преврати свое устройство в игровое</h1>
                        <Link to="/server">
                            <button className="slider__upgrade-btn">UPGRADE</button>
                        </Link>
                    </div>
                </div>
            ))}
            <div className="bottom-line"></div>
        </div>
    );

}

export default Slider;

