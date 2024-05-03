import React from 'react';
import Navigation from '../components/Navigation';

const Download = () => {
    return (
        <div>
            <Navigation activeLink={window.location.pathname} setActiveLink={(link) => link === '/download' && window.scrollTo(0, 0)}></Navigation>
            <h1>Download</h1>
            <p>Скачать Warplay.Cloud можно с помощью следующих ссылок:</p>
            <ul>
                <li><a href="https://github.com/Warplaycloud/warplaycloud-client/releases/latest/download/Warplay.Cloud.exe">Windows (x86)</a></li>
                <li><a href="https://github.com/Warplaycloud/warplaycloud-client/releases/latest/download/Warplay.Cloud.7z">Windows (x64)</a></li>
                <li><a href="https://github.com/Warplaycloud/warplaycloud-client/releases/latest/download/Warplay.Cloud.AppImage">Linux (AppImage)</a></li>
                <li><a href="https://github.com/Warplaycloud/warplaycloud-client/releases/latest/download/Warplay.Cloud.deb">Linux (Debian)</a></li>
                <li><a href="https://github.com/Warplaycloud/warplaycloud-client/releases/latest/download/Warplay.Cloud.rpm">Linux (Red Hat)</a></li>
            </ul>
        </div>
    );
}

export default Download;

