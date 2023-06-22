import _ from 'lodash';
import './style.css';
import './header.js';
import './mainContent.js';

// alert('am I connnected?');
const header = document.createElement('header');
header.id = 'header';
document.body.appendChild(header);

const nav = document.createElement('nav');
nav.classList.add('navigation');
header.appendChild(nav);
