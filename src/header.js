const header = document.getElementById('header');

const nav = document.createElement('nav');
nav.classList.add('navigation');
header.appendChild(nav);

const logo = document.createElement('div');
logo.classList.add('mainLogo');
// logo.classList.add('tab');
logo.textContent = `Willow's Waffles`;
nav.appendChild(logo);

logo.addEventListener('click', (event) => {
  logo.classList.remove('invertLogo');
  location.classList.remove('selected');
  logo.classList.add('mainLogo');
  logo.classList.add('selected');
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
});

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
