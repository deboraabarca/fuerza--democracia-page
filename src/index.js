import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/animate.css';
import './css/flaticon.css';
import './sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
);

reportWebVitals();
