import React from 'react';
import { Link } from 'react-router-dom';
import './Footers.css';
import Logo_white from './Logo_white';

const Footers = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Link to="/" className="footer__logo-link">
                            <Logo_white></Logo_white>
                            <a>WARPLAY.CLOUD</a>
                        </Link>
                    </div>
                    <div className="footer__copyright">
                        <h4>2022. All rights reserved.</h4>
                    </div>
                    <div className="footer__links">
                        <h4>Политика конфиденциальности</h4>
                        <h4>Файлы cookie</h4>                     
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footers;