import addMenu from './menu.js';
import clearContainer from './clearFunction.js';
import addLocationsHours from './hoursLocations.js';
import addAbout from './about.js';
import addHomePage from './homePage.js';
import { hoursLocationButton } from './homePage.js';

const nav = document.createElement('nav');
nav.classList.add('navigation');
document.body.appendChild(nav);

export const contentContainer = document.createElement('div');
contentContainer.classList.add('contentContainer');
contentContainer.innerText = ' ';
document.body.appendChild(contentContainer);

export const logo = document.createElement('div');
logo.classList.add('mainLogo');
logo.classList.add('selected');
logo.textContent = `Willow's Waffles`;
nav.appendChild(logo);
addHomePage();

logo.addEventListener('click', (event) => {
  location.classList.remove('selected');
  menu.classList.remove('selected');
  about.classList.remove('selected');
  clearContainer();
  addHomePage();
});

export const location = document.createElement('div');
location.classList.add('tab');
location.id = 'locationTab';
location.textContent = 'Hours and Locations';
nav.appendChild(location);

location.addEventListener('click', (event) => {
  clearContainer();
  addLocationsHours();
});

export const menu = document.createElement('div');
menu.classList.add('tab');
menu.id = 'menuTab';
menu.textContent = 'Menu';
nav.appendChild(menu);

menu.addEventListener('click', (event) => {
  clearContainer();
  addMenu();
});

export const about = document.createElement('div');
about.classList.add('tab');
about.id = 'aboutTab';
about.textContent = 'About';
nav.appendChild(about);

about.addEventListener('click', (event) => {
  clearContainer();
  addAbout();
});
