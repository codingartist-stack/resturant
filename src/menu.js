import { contentContainer } from './header.js';

const menuTitleImage = document.createElement('div');
menuTitleImage.classList.add('hero');
menuTitleImage.id = 'menuImage';
menuTitleImage.innerHTML = `
  <h1>MENU</h1>
  <p>Image by <a href="https://pixabay.com/users/patikaipmuzika-985051/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=878198">patikaipmuzika</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=878198">Pixabay</a></p>
`;

const menuContent = document.createElement('div');
menuContent.id = 'menu';
menuContent.innerHTML = `
<h3>BREAKFAST WAFFLES</h3>

<h4>Classic Waffle</h4>
<p>Freshly baked golden waffle served with butter and maple syrup.</p> 
<h4>Belgian Waffle</h4>
<p>Light and fluffy Belgian waffle topped with fresh berries and whipped cream.</p>
<h4>Chocolate Lover's Waffle</h4>
<p>Decadent chocolate-infused waffle drizzled with chocolate sauce, sprinkled with powdered sugar, and served with a side of vanilla ice cream.</p>
<h4>Cinnamon Roll Waffle</h4>
<p>Mouthwatering waffle infused with cinnamon and topped with cream cheese frosting and caramelized pecans.</p>
<h4>Fruity Blast Waffle</h4>
<p>Waffle loaded with a medley of seasonal fruits, such as strawberries, blueberries, and bananas, accompanied by a dollop of Greek yogurt and a drizzle of honey.</p>
<h4>Savory Breakfast Waffle</h4>
<p>Savory waffle topped with scrambled eggs, crispy bacon or sausage, cheddar cheese, and a touch of hot sauce.</p>
<br>

<h3>SWEET CREATIONS</h3>

<h4>Nutella Paradise Waffle</h4> 
<p>Irresistible waffle smeared with Nutella, sliced bananas, and crushed hazelnuts, finished with a dusting of powdered sugar.</p>
<h4>Red Velvet Waffle</h4> 
<p>Rich red velvet waffle with cream cheese frosting, garnished with chocolate shavings.</p>
<h4>S'mores Waffle</h4> 
<p>Toasted marshmallows, graham cracker crumbs, and melted chocolate drizzled over a warm waffle, reminiscent of the classic campfire treat.</p>
<h4>Apple Pie Waffle</h4> 
<p>Waffle infused with apple pie spices, topped with warm cinnamon apples, a scoop of vanilla ice cream, and caramel sauce.</p>
<h4>Peanut Butter & Jelly Waffle</h4> 
<p>Waffle spread with creamy peanut butter and your choice of strawberry or grape jelly, served with a sprinkle of crushed peanuts.</p>
<br>

<h3>SAVORY DELIGHTS</h3>

<h4>Chicken & Waffles</h4> 
<p>Crispy fried chicken served with a fluffy waffle and a side of maple syrup or savory gravy.</p>
<h4>Waffle Benedict </h4>
<p>Poached eggs, ham or smoked salmon, and hollandaise sauce served atop a savory waffle.</p>
<h4>Caprese Waffle</h4>
<p>Tomato, fresh mozzarella, and basil layered on a savory waffle, drizzled with balsamic glaze.</p>
<h4>BBQ Pulled Pork Waffle</h4> 
<p>Tender pulled pork smothered in tangy barbecue sauce, served on a waffle with coleslaw and pickles.</p>
<br>

<h3>SIDES<h3>

<h4>Crispy Bacon</h4>
<h4>Scrambled Eggs</h4>
<h4>Fresh Fruit Cup</h4>
<h4>Yogurt Parfait</h4>
<h4>Hash Browns</h4>
<br>

<h3>BEVERAGES</h3>

<h4>Freshly Squeezed Orange Juice</h4>
<h4>Gourmet Coffee (Hot/Iced)</h4>
<h4>Specialty Teas</h4>
<h4>Milkshakes (Vanilla, Chocolate, Strawberry)</h4>
<h4>Soft Drinks</h4>
`;

export default function addMenu() {
  contentContainer.appendChild(menuTitleImage);
  contentContainer.appendChild(menuContent);
}
