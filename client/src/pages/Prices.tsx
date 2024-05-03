import React from 'react';
import Navigation from '../components/Navigation';

const Prices = () => {
    return (
        <div>
            <Navigation activeLink={window.location.pathname} setActiveLink={(link) => link === '/prices' && window.scrollTo(0, 0)}></Navigation>
            <h1>Price</h1>
        </div>
    );
}

export default Prices;
