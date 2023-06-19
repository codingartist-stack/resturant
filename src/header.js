const header = document.getElementById('header');

const nav = document.createElement('nav');
header.appendChild(nav);

const home = document.createElement('div');
home.classList.add('tab');
home.id = 'homeTab';
nav.appendChild(home);

const menu = document.createElement('div');
menu.classList.add('tab');
menu.id = 'menuTab';
nav.appendChild(menu);

const about = document.createElement('div');
about.classList.add('tab');
about.id = 'aboutTab';
nav.appendChild(about);
