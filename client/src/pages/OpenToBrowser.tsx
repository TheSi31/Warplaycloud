import React from 'react';
import Navigation from '../components/Navigation';

const OpenToBrowser: React.FC = () => {
    return (
        <div>
            <Navigation activeLink={window.location.pathname} setActiveLink={(link) => link === '/opentobrowser' && window.scrollTo(0, 0)}></Navigation>
            <h1>OpenToBrowser</h1>
        </div>
    );
}

export default OpenToBrowser;
