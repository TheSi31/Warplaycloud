import React from 'react';
import './maps.css';
import Image from '../img/maps.png';

const Maps = () => {
    return (
        <div>
            <div className='title'>
                <div className='title-text'>
                    <div id='top-line'></div>
                    <p>Игровые сервера на карте</p>
                </div>
                <h2>Карта локаций</h2>
                <div className='map'>
                    <img src={Image}></img>
                </div>
            </div>
        </div>
    );
}

export default Maps;