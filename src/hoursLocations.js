import { contentContainer } from './header';

const hourLocationHero = document.createElement('div');
hourLocationHero.classList.add('hero');
hourLocationHero.id = 'hourLocation';
hourLocationHero.innerHTML = `
<h1>Locations and Hours</h1>
<p>Image by <a href="https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2594768">StockSnap</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2594768">Pixabay</a></p>
`;

export default function addLocationsHours() {
  contentContainer.appendChild(hourLocationHero);
}
