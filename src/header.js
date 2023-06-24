import addMenu from './menu.js';
import clearContainer from './clearFunction.js';
import addLocationsHours from './hoursLocations.js';
import addAbout from './about.js';
import addHomePage from './homePage.js';

const nav = document.createElement('nav');
nav.classList.add('navigation');
document.body.appendChild(nav);

export const contentContainer = document.createElement('div');
contentContainer.classList.add('contentContainer');
contentContainer.innerText = ' ';
document.body.appendChild(contentContainer);

const logo = document.createElement('div');
logo.classList.add('mainLogo');
logo.classList.add('selected');
logo.textContent = `Willow's Waffles`;
nav.appendChild(logo);
addHomePage();

logo.addEventListener('click', (event) => {
  logo.classList.remove('invertLogo');
  location.classList.remove('selected');
  logo.classList.add('mainLogo');
  logo.classList.add('selected');
  menu.classList.remove('selected');
  about.classList.remove('selected');
  clearContainer();
  addHomePage();
});

const location = document.createElement('div');
location.classList.add('tab');
location.id = 'locationTab';
location.textContent = 'Hours and Locations';
nav.appendChild(location);

location.addEventListener('click', (event) => {
  location.classList.add('selected');
  logo.classList.remove('selected');
  logo.classList.remove('mainLogo');
  logo.classList.add('invertLogo');
  menu.classList.remove('selected');
  about.classList.remove('selected');
  clearContainer();
  addLocationsHours();
});

const menu = document.createElement('div');
menu.classList.add('tab');
menu.id = 'menuTab';
menu.textContent = 'Menu';
nav.appendChild(menu);

menu.addEventListener('click', (event) => {
  menu.classList.add('selected');
  logo.classList.remove('selected');
  logo.classList.remove('mainLogo');
  logo.classList.add('invertLogo');
  location.classList.remove('selected');
  about.classList.remove('selected');
  clearContainer();
  addMenu();
});

const about = document.createElement('div');
about.classList.add('tab');
about.id = 'aboutTab';
about.textContent = 'About';
nav.appendChild(about);

about.addEventListener('click', (event) => {
  about.classList.add('selected');
  logo.classList.remove('selected');
  logo.classList.remove('mainLogo');
  logo.classList.add('invertLogo');
  location.classList.remove('selected');
  menu.classList.remove('selected');
  clearContainer();
  addAbout();
});
