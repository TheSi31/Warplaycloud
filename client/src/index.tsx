import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './style.css';

const Index: React.FC = () => {
    return (
            <App></App>
      );
}

ReactDOM.render(<Index />, document.getElementById('root'));



