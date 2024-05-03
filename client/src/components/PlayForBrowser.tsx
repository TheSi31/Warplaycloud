import React from 'react';
import './PlayForBrowser.css';
import { Link } from 'react-router-dom';
import Image_1 from '../img/image_browser_1.jpg';
import Image_2 from '../img/image_browser_2.jpg';
import Image_3 from '../img/image_browser_3.jpg';
import { useInView } from 'react-intersection-observer';
import ImageC from './ImageComponent';

const PlayForBrowser = () => {
    return (
        <div className='play-for-browser'>
            <div className='play-for-browser__content'>
                <div className='play-for-browser__title'>
                    <span id='top-line'></span>
                    <p>Играть можно в браузере</p>
                </div>
                <h2>Запускайте на любых устройствах</h2>
                <p>Наш модуль доступен на все популярные ОС и работает на всех компьютерах.</p>
                <div>
                    <Link to='/opentobrowser'>
                        <a>Открыть в браузере</a>
                    </Link>
                </div>
            </div>
                <ImageC images={[Image_2, Image_1, Image_3]} />
        </div>
    );
}

export default PlayForBrowser;