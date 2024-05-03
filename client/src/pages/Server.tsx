import React from 'react';
import Navigation from '../components/Navigation';

const Server = () => {
    return (
        <div>
            <Navigation activeLink={window.location.pathname} setActiveLink={(link) => link === '/server' && window.scrollTo(0, 0)}></Navigation>
            <h1>Server</h1>
        </div>
    );
}

export default Server;
