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

const logo = document.createElement('div');
logo.classList.add('mainLogo');
logo.classList.add('selected');
logo.textContent = `Willow's Waffles`;
nav.appendChild(logo);

const location = document.createElement('div');
location.classList.add('tab');
location.id = 'locationTab';
location.textContent = 'Hours and Locations';
nav.appendChild(location);

const menu = document.createElement('div');
menu.classList.add('tab');
menu.id = 'menuTab';
menu.textContent = 'Menu';
nav.appendChild(menu);

const about = document.createElement('div');
about.classList.add('tab');
about.id = 'aboutTab';
about.textContent = 'About';
nav.appendChild(about);
