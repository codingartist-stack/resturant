import './homepage.js';

function createNavigationTabs() {
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
}

logo.addEventListener('click', (event) => {
  logo.classList.remove('invertLogo');
  location.classList.remove('selected');
  logo.classList.add('mainLogo');
  logo.classList.add('selected');
  menu.classList.remove('selected');
  about.classList.remove('selected');
});

location.addEventListener('click', (event) => {
  location.classList.add('selected');
  logo.classList.remove('selected');
  logo.classList.remove('mainLogo');
  logo.classList.add('invertLogo');
  menu.classList.remove('selected');
  about.classList.remove('selected');
});

menu.addEventListener('click', (event) => {
  menu.classList.add('selected');
  logo.classList.remove('selected');
  logo.classList.remove('mainLogo');
  logo.classList.add('invertLogo');
  location.classList.remove('selected');
  about.classList.remove('selected');
});

about.addEventListener('click', (event) => {
  about.classList.add('selected');
  logo.classList.remove('selected');
  logo.classList.remove('mainLogo');
  logo.classList.add('invertLogo');
  location.classList.remove('selected');
  menu.classList.remove('selected');
});
