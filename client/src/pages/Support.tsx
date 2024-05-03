import React from 'react';
import Navigation from '../components/Navigation';

const Support = () => {
    return (
        <div>
            <Navigation activeLink={window.location.pathname} setActiveLink={(link) => link === '/support' && window.scrollTo(0, 0)}></Navigation>
            <h1>Support</h1>
        </div>
    );
}

export default Support;
