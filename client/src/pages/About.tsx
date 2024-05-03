import React from 'react';
import Navigation from '../components/Navigation';

const About: React.FC = () => {
    return (
        <div>
            <Navigation activeLink={window.location.pathname} setActiveLink={(link) => link === '/about' && window.scrollTo(0, 0)}></Navigation>
            <h1>About</h1>
        </div>
    );
}

export default About;

