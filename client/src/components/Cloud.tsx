import React from 'react';
import ImageServerHost from '../img/ImageServerHost.png';
import './Cloud.css';
import { Link } from 'react-router-dom';

const Cloud = () => {
    return (
        <div className='cloud'>
            <img alt='че' src={ImageServerHost}></img>
                <div className='cloud__content'>
                    <div className='cloud__top'>
                        <div id='top-line'></div>
                        <p id='cloud__title'>Облачный гейминг</p>
                    </div>
                    <h2>Как это работает</h2>
                    <p>Наши сервера запускают игру, и передают вам картинку, которой вы можете управлять в реальном времени!</p>
                    <p>Приложение  запустится на ПК с процессором от 1.5 GHz , от 1 Gb RAM и доступом в интернет от 15 мбит/с на всех операционых системах Windows 7, 8, 10 MacOS и Linux .</p>
                    <div>
                        <Link to='/download'>
                            <a>Загрузить</a>
                        </Link>
                    </div>
                </div>
        </div>
    );
}

export default Cloud;
