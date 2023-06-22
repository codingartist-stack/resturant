import './homepage.js';

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
