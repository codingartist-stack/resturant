const header = document.getElementById('header');

const nav = document.createElement('nav');
nav.classList.add('navigation');
header.appendChild(nav);

const logo = document.createElement('div');
logo.classList.add('logoFont');
logo.textContent = `Willow's Waffles`;
nav.appendChild(logo);

const location = document.createElement('div');
location.classList.add('tab');
location.id = 'locationTab';
location.textContent = 'Hours and Locations';
nav.appendChild(location);

const home = document.createElement('div');
home.classList.add('tab');
home.id = 'homeTab';
home.textContent = 'Home';
nav.appendChild(home);

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
