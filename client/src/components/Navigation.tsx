import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navigation.css';

interface NavigationProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeLink, setActiveLink }) => {
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className='menu'>
      <div className='logo'>
        <Logo></Logo>
        <h3>WARPLAY.CLOUD</h3>
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="/server"
            className={activeLink === '/server' ? 'active' : ''}
            onClick={() => handleLinkClick('/server')}
          >
            Сервера
          </Link>
        </li>
        <li>
          <Link
            to="/download"
            className={activeLink === '/download' ? 'active' : ''}
            onClick={() => handleLinkClick('/download')}
          >
            Скачать
          </Link>
        </li>
        <li>
          <Link
            to="/opentobrowser"
            className={activeLink === '/opentobrowser' ? 'active' : ''}
            onClick={() => handleLinkClick('/opentobrowser')}
          >
            Открыть в браузере
          </Link>
        </li>
        <li>
          <Link
            to="/prices"
            className={activeLink === '/prices' ? 'active' : ''}
            onClick={() => handleLinkClick('/prices')}
          >
            Цены
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className={activeLink === '/support' ? 'active' : ''}
            onClick={() => handleLinkClick('/support')}
          >
            Тех поддержка
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleLinkClick('/about')}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;