import { contentContainer } from './header';

const hourLocationHero = document.createElement('div');
hourLocationHero.classList.add('hero');
hourLocationHero.id = 'hourLocation';
hourLocationHero.innerHTML = `
<h1>Locations and Hours</h1>
<p>Image by <a href="https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2594768">StockSnap</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2594768">Pixabay</a></p>
`;

const locationContent = document.createElement('div');
locationContent.id = 'location';
locationContent.innerHTML = `
<h3>Downtown</h3>
<p>Location: 123 Main Street, Downtown</p>

<h4>Hours of Operation:</h4>

<p>Monday to Friday: 7:00 AM - 10:00 PM</p>
<p>Saturday and Sunday: 8:00 AM - 11:00 PM</p>

<h3>Sunnyville</h3>
<p>Location: 456 Sunshine Avenue, Sunnyville</p>

<h4>Hours of Operation:</h4>

<p>Monday to Thursday: 8:00 AM - 9:00 PM</p>
<p>Friday: 8:00 AM - 10:00 PM</p>
<p>Saturday: 9:00 AM - 10:00 PM</p>
<p>Sunday: 9:00 AM - 8:00 PM</p>

<h3>Coastal Haven</h3>
<p>Location: 789 Ocean Drive, Coastal Haven</p>

<h4>Hours of Operation:</h4>

<p>Monday and Tuesday: 9:00 AM - 8:00 PM</p>
<p>Wednesday to Friday: 9:00 AM - 9:00 PM</p>
<p>Saturday and Sunday: 8:00 AM - 10:00 PM</p>
`;

export default function addLocationsHours() {
  contentContainer.appendChild(hourLocationHero);
  contentContainer.appendChild(locationContent);
}
