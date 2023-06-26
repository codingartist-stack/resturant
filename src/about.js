import { contentContainer } from './header';
import foodPrep from './images/food-preparation.jpg';

const aboutHero = document.createElement('div');
aboutHero.classList.add('hero');
aboutHero.classList.add('aboutImage');
aboutHero.innerHTML = `
    <h1>About Us</h1>
    <p>Image by <a href="https://pixabay.com/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2190961">congerdesign</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2190961">Pixabay</a></p>
`;

const aboutContainer = document.createElement('div');
aboutContainer.id = 'aboutContainer';

// can I do alt on a div?
const ownerImage = new Image();
ownerImage.src = foodPrep;
ownerImage.alt =
  'Woman at a cooking work bench and rubbing flour in her hands.';
ownerImage.id = 'ownerImage';
aboutContainer.appendChild(ownerImage);

const aboutContent = document.createElement('div');
aboutContent.id = 'about';
aboutContent.innerText = `Introducing Willow, a passionate and creative individual who embarked on a culinary adventure by opening her very own waffle shop called Willow's Waffles. With a lifelong love for breakfast delights and a keen eye for flavor combinations, Willow's dream was to create a space where people could experience the joy and indulgence of delicious waffles. Guided by her innovative spirit and dedication to quality, she meticulously crafted a menu that showcases a tantalizing array of sweet and savory waffle creations, each one a testament to her unwavering commitment to culinary excellence. Willow's Waffles is not just a place to enjoy mouthwatering waffles; it's a haven where customers can embrace their love for extraordinary flavors and feel the warmth of a welcoming atmosphere. Willow's passion for creating unforgettable waffle experiences shines through in every bite, leaving patrons craving more and ensuring that Willow's Waffles has become a beloved destination for waffle enthusiasts near and far.`;

aboutContainer.appendChild(aboutContent);

export default function addAbout() {
  contentContainer.appendChild(aboutHero);
  contentContainer.appendChild(aboutContainer);
}
