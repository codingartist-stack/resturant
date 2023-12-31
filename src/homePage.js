import { contentContainer } from './header';
import { logo } from './header';
import clearContainer from './clearFunction';
import addLocationsHours from './hoursLocations';
import addMenu from './menu';
import addAbout from './about';

const homePageHero = document.createElement('div');
homePageHero.classList.add('homeHeroImage');
homePageHero.classList.add('hero');
homePageHero.innerHTML = `
<div class='heroLogo'>Willow's Waffles</div>
<h4>Indulge in Waffle Wonderland at Willow's Waffles!</h4>
<p>Image by <a href="https://pixabay.com/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1177526">congerdesign</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1177526">Pixabay</a></p>
`;

const homePageContainer = document.createElement('div');
homePageContainer.id = 'homeButtonContainer';

const hoursLocationButton = document.createElement('button');
hoursLocationButton.classList.add('hourLocation');
hoursLocationButton.classList.add('homePageButton');
hoursLocationButton.innerText = 'Hours and Locations';
homePageContainer.appendChild(hoursLocationButton);

hoursLocationButton.addEventListener('click', (event) => {
  clearContainer();
  addLocationsHours();
});

const menuButton = document.createElement('button');
menuButton.classList.add('homePageButton');
menuButton.classList.add('menuImage');
menuButton.innerText = 'the Menu';
homePageContainer.appendChild(menuButton);

menuButton.addEventListener('click', (event) => {
  clearContainer();
  addMenu();
});

const aboutButton = document.createElement('button');
aboutButton.classList.add('homePageButton');
aboutButton.classList.add('aboutImage');
aboutButton.innerText = 'About Us';
homePageContainer.appendChild(aboutButton);

aboutButton.addEventListener('click', (event) => {
  clearContainer();
  addAbout();
});

export default function addHomePage() {
  logo.classList.remove('invertLogo');
  logo.classList.add('mainLogo');
  logo.classList.add('selected');
  contentContainer.appendChild(homePageHero);
  contentContainer.appendChild(homePageContainer);
}
