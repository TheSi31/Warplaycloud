import React from 'react';
import './Rates.css';

const Rates = () => {
    return (
        <div className='rates'>
            <div className='title'>
                <div className='rates__top'>
                    <div id='top-line'></div>
                    <div className='title-text'>
                        <p>Гибкие тарифы</p>
                    </div>
                </div>
                <h2>Доступные подписки</h2>
            </div>
            <div className='rates__content'>
                <div className='rates__box 1'>
                    <div className='rates__box-content'>
                        <h2>Почасовая оплата</h2>
                        <h3>45 р. - час</h3>
                        <p>Доступно:<br></br>Каталог игр<br></br> Виртуальный ПК<br></br> Безлимитная игровая сессия</p>
                        <button>Выбрать</button>
                    </div>
                </div>
                <div className='rates__box 2'>
                    <div className='rates__box-content'>
                        <h2>Подписка Максимум</h2>
                        <h3>2999 р. - месяц</h3>
                        <p>Доступно:<br></br>Каталог игр<br></br> Виртуальный ПК<br></br> Игровая сессия 10 часов/день</p>
                        <button>Выбрать</button>
                    </div>
                </div>
                <div className='rates__box 3'>
                    <div className='rates__box-content'>
                        <h2>Подписка Минимум</h2>
                        <h3>1500 р. - месяц</h3>
                        <p>Доступно:<br></br>Каталог игр<br></br> Игровая сессия 4 часов/день</p>
                        <button>Выбрать</button>
                    </div>
                </div>
            </div>
            <div id='bottom-line'></div>
        </div>
    );
}

export default Rates;