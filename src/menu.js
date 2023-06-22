import { contentContainer } from './header.js';

const menuContent = document.createElement('div');
menuContent.id = 'menu';

const menuTitleImage = document.createElement('div');
menuTitleImage.classList.add('hero');
menuTitleImage.id = 'menuImage';
menuTitleImage.innerHTML = `
  <h1>MENU</h1>
  <p>Image by <a href="https://pixabay.com/users/patikaipmuzika-985051/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=878198">patikaipmuzika</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=878198">Pixabay</a></p>
`;

export default function addMenu() {
  contentContainer.appendChild(menuTitleImage);
  contentContainer.appendChild(menuContent);
  menuContent.innerHTML = `
  <h3>BREAKFAST WAFFLES</h3>

<h4>Classic Waffle</h4>
<p>Freshly baked golden waffle served with butter and maple syrup.<p> 
<h4>Belgian Waffle</h4>
<p>Light and fluffy Belgian waffle topped with fresh berries and whipped cream.<p>
<h4>Chocolate Lover's Waffle</h4>
<p>Decadent chocolate-infused waffle drizzled with chocolate sauce, sprinkled with powdered sugar, and served with a side of vanilla ice cream.</p>
<h4>Cinnamon Roll Waffle</h4>
<p>Mouthwatering waffle infused with cinnamon and topped with cream cheese frosting and caramelized pecans.</p>
<h4>Fruity Blast Waffle</h4>
<p>Waffle loaded with a medley of seasonal fruits, such as strawberries, blueberries, and bananas, accompanied by a dollop of Greek yogurt and a drizzle of honey.</p>
<h4>Savory Breakfast Waffle</h4>
<p>Savory waffle topped with scrambled eggs, crispy bacon or sausage, cheddar cheese, and a touch of hot sauce.</p>`;

  return menuContent.innerHTML;
}

// BREAKFAST WAFFLES

// Classic Waffle - Freshly baked golden waffle served with butter and maple syrup.
// Belgian Waffle - Light and fluffy Belgian waffle topped with fresh berries and whipped cream.
// Chocolate Lover's Waffle - Decadent chocolate-infused waffle drizzled with chocolate sauce, sprinkled with powdered sugar, and served with a side of vanilla ice cream.
// Cinnamon Roll Waffle - Mouthwatering waffle infused with cinnamon and topped with cream cheese frosting and caramelized pecans.
// Fruity Blast Waffle - Waffle loaded with a medley of seasonal fruits, such as strawberries, blueberries, and bananas, accompanied by a dollop of Greek yogurt and a drizzle of honey.
// Savory Breakfast Waffle - Savory waffle topped with scrambled eggs, crispy bacon or sausage, cheddar cheese, and a touch of hot sauce.
// SWEET CREATIONS

// Nutella Paradise Waffle - Irresistible waffle smeared with Nutella, sliced bananas, and crushed hazelnuts, finished with a dusting of powdered sugar.
// Red Velvet Waffle - Rich red velvet waffle with cream cheese frosting, garnished with chocolate shavings.
// S'mores Waffle - Toasted marshmallows, graham cracker crumbs, and melted chocolate drizzled over a warm waffle, reminiscent of the classic campfire treat.
// Apple Pie Waffle - Waffle infused with apple pie spices, topped with warm cinnamon apples, a scoop of vanilla ice cream, and caramel sauce.
// Peanut Butter & Jelly Waffle - Waffle spread with creamy peanut butter and your choice of strawberry or grape jelly, served with a sprinkle of crushed peanuts.
// SAVORY DELIGHTS

// Chicken & Waffles - Crispy fried chicken served with a fluffy waffle and a side of maple syrup or savory gravy.
// Waffle Benedict - Poached eggs, ham or smoked salmon, and hollandaise sauce served atop a savory waffle.
// Caprese Waffle - Tomato, fresh mozzarella, and basil layered on a savory waffle, drizzled with balsamic glaze.
// BBQ Pulled Pork Waffle - Tender pulled pork smothered in tangy barbecue sauce, served on a waffle with coleslaw and pickles.
// SIDES

// Crispy Bacon
// Scrambled Eggs
// Fresh Fruit Cup
// Yogurt Parfait
// Hash Browns
// BEVERAGES

// Freshly Squeezed Orange Juice
// Gourmet Coffee (Hot/Iced)
// Specialty Teas
// Milkshakes (Vanilla, Chocolate, Strawberry)
// Soft Drinks
