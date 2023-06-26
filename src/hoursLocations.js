import { contentContainer } from './header';

import { logo } from './header';
import { location } from './header';
import { menu } from './header';
import { about } from './header';

const hourLocationHero = document.createElement('div');
hourLocationHero.classList.add('hero');
hourLocationHero.classList.add('hourLocation');
hourLocationHero.innerHTML = `
<h1>Locations and Hours</h1>
<p>Image by <a href="https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2594768">StockSnap</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2594768">Pixabay</a></p>
`;

const mapInformationContainer = document.createElement('div');
mapInformationContainer.id = 'mapInformationGrid';

const mapContainer = document.createElement('div');
mapContainer.classList.add('map');
mapContainer.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211821.50211046616!2d-118.3988870766095!3d33.948566494599234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c9a534788b73%3A0x467109a5a72d929c!2sMorningside%20Waffle%20Bar!5e0!3m2!1sen!2sus!4v1687551369579!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

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

mapInformationContainer.appendChild(locationContent);
mapInformationContainer.appendChild(mapContainer);

export default function addLocationsHours() {
  location.classList.add('selected');
  logo.classList.remove('selected');
  logo.classList.remove('mainLogo');
  logo.classList.add('invertLogo');
  menu.classList.remove('selected');
  about.classList.remove('selected');
  contentContainer.appendChild(hourLocationHero);
  contentContainer.appendChild(mapInformationContainer);
}
