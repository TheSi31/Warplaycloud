import React from 'react';
import './Start.css';
import Mail_img from '../img/mail.png';
import Download_img from '../img/download.png';
import App_img from '../img/app.png';
import Play_img from '../img/play.png';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className='start'>
            <div className='title'>
                <div className='title-text'>
                    <div id='top-line'></div>
                    <p>Быстрый старт</p>
                </div>
                <h2>Начни играть</h2>
            </div>
            <div className='start__content'>
                <div className='mail'>
                    <img src={Mail_img}></img>
                    <p>Создайте аккаунт</p>
                </div>
                <span className='line'></span>
                <div className='download'>
                    <img src={Download_img}></img>
                    <p>Скачийте модуль</p>
                </div>
                <span className='line'></span>
                <div className='app'>
                    <img src={App_img}></img>
                    <p>Выберите тариф</p>
                </div>
                <span className='line'></span>
                <div className='play'>
                    <img src={Play_img}></img>
                    <p>Начни играть</p>
                </div>
            </div>
            <div className='start__btn'>
                <Link to='/download'>
                    <a>Начать</a>
                </Link>
            </div>
        </div>
    );
}

export default Start;