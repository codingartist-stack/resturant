import { contentContainer } from './header';

const homePageHero = document.createElement('div');
homePageHero.id = 'homeHeroImage';
homePageHero.classList.add('hero');
homePageHero.innerHTML = `
<div class='heroLogo'>Willow's Waffles</div>
<h4>Indulge in Waffle Wonderland at Willow's Waffles!</h4>
`;

export default function addHomePage() {
  contentContainer.appendChild(homePageHero);
}
