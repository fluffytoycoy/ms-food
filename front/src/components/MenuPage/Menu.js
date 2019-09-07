import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.scss';

function Menu(props){
    return (
      <section id="menu">
        <div className="container">
          <div className="title-bar">
            <h3>Menu</h3>
            <div>
              <a href="">Food</a>
              <a href="">Drink</a>
              <a href="">Dessert</a>
              <a href="">Kids</a>
            </div>
          </div>
          <div>
            <div className="container_3col">
              <h4>Starters</h4>
              <p>Soup of the Day	$5.95/$7.95</p>
              <p class="text_content"><strong>Roasted Red Pepper Hummus	$6.95</strong><br/>
                  Togarashi Dusted Pita, Vegetable Crudité</p>
              <p class="text_content"><strong>Bruschetta	$7.95</strong><br/>
                  Tomato, Onion, Basil Pesto, Smoked Mozzarella, Balsamic Reduction, Baguette</p>
              <p class="text_content"><strong>Stuffed Mushrooms	$8.95</strong><br/>
                  Cream Cheese, Spinach, Artichokes, Panko, Parmesan, Cotija Cheese</p>
              <p class="text_content"><strong>Sweet Potato Fries	$7.95</strong><br/>
                  Candied Jalapeños, Smoked Ketchup</p>
              <p class="text_content"><strong>Breaded Onion Rings	$7.95</strong><br/>
                  Creole Mustard Sauce or Chipotle Ranch</p>
              <p class="text_content"><strong>Toasted Ravioli	$8.95</strong><br/>
                  Classic St. Louis Style, Marinara</p>
              <p class="text_content"><strong>Chicken Quesadilla	$9.95</strong><br/>
                  Grilled Chicken, Pepper Jack &amp; Cheddar Cheese, Chipotle Crème Fraiche, Tomato Marmalade</p>
              <p class="text_content"><strong>Crab Dip	$9.95</strong><br/>
                  Fried Wonton Chips</p>
              <p class="text_content"><strong>Herbed Goat Cheese Dip	$8.95</strong><br/>
                  Red Pepper Jelly, Bacon Bits, Pita</p>
              <p class="text_content"><strong>Spinach And Artichoke Dip	$7.95</strong><br/>
                  Spinach, Artichoke, Parmesan, Panko, Tortilla Chips</p>
              <p class="text_content"><strong>Crab Cakes	$13.95</strong><br/>
                  Panko Encrusted Jumbo Lump Crab Cakes, Roasted Poblano &amp; Corn Chutney, Cholula Beurre Blanc, Cotija Cheese</p>
              <p class="text_content"><strong>Cajun Shrimp	$12.95</strong><br/>
                  Sautéed Jumbo Shrimp, Cajun Caper Cream Sauce, Toasted Garlic Bread</p>
              <p class="text_content"><strong>Pork Shanks	$12.95</strong><br/>
                  Curried Carrot Caramel Glaze, Country Slaw</p>
              <p class="text_content"><strong>Bacon Glazed Chicken Livers	$7.95 </strong><br/>
                  Apple Cider Mustard, Pickled Onion</p>
              <p class="text_content"><strong>Fried Pickle Bites	$8.95 </strong><br/>
                  Dill Pickle, Hard Salami, Cream Cheese, Champagne Batter, Sriracha Mayo</p>
              <p class="text_content"><strong>Wings/Boneless Wings	$9.95</strong><br/>
                  Buffalo, BBQ, or Dry with House Seasoning, Blue Cheese or Ranch Dressing</p>
              <p class="text_content"><strong>Pulled Pork Nachos	$10.95</strong><br/>
                  Pulled Pork, Roasted Tomato Salsa, Cheddar &amp; Pepper Jack, Chorizo Cheese Sauce, BBQ, Green Onion, Sour Cream, Candied Jalapeños</p>
              <p class="text_content"><strong>Buffalo Chicken Nachos	$10.95 </strong><br/>
                  Grilled Chicken, Buffalo Sauce, Pepper Jack, Blue Cheese, Queso Blanco Cheese Sauce, Ranch, Green Onions</p>
              <p class="text_subhead">Salads</p>
              <p class="text_content"><strong>House	$4.95/$9.95</strong><br/>
                  Romaine, Mixed Cheese, Tomato, Cucumber, Red Onion, Crouton, Creamy Mustard Vinaigrette</p>
              <p class="text_content"><strong>Caesar	$4.95/$9.95</strong><br/>
                  Romaine, Shaved Parmesan, House Made Croutons, Caesar Dressing</p>
              <p class="text_content"><strong>Italian	$4.95/$9.95</strong><br/>
                  Romaine, Smoked Mozzarella, Salami, Red Onion, Pepperoncini, Italian Dressing</p>
              <p class="text_content"><strong>Spinach	$5.95/$10.95</strong><br/>
                  Baby Spinach, Candied Bacon, Chopped Egg, Red Onion, Assorted Apples, Warm Bacon Vinaigrette</p>
              <p class="text_content"><strong>Greek Island	$5.95/$10.95</strong><br/>
                  Romaine &amp; Spring Mix, Feta, Red Onion, Bell Pepper, Cucumber, Marinated Olive, Pepperoncini, Pita, Greek Lemon Vinaigrette</p>
              <p class="text_content"><strong>Strawberry 	$5.95/$10.95</strong><br/>
                  Spring Mix, Smoked Mozzarella, Strawberry, Dried Cranberry, Candied Walnut, Red Onion, Poppy Seed Dressing</p>
              <p class="text_content"><strong>The Wedge	$7.95</strong><br/>
                  Bibb Lettuce, Bacon Bits, Blue Cheese Crumbles, Tomato, Blue Cheese Dressing</p>
              <p class="text_content"><strong>Buffalo Chicken	$11.95</strong><br/>
                  Grilled or Fried Chicken, Romaine, Bacon Bits, Blue Cheese Crumbles, Tomato, Blue Cheese Dressing</p>
              <p class="text_content"><strong>Seafood Chop Chop	$15.95</strong><br/>
                  Romaine, Blue Crab, Jumbo Spiced Shrimp, Bacon Bits, Blue Cheese Crumbles, Chopped Egg, Tomato, Creamy Mustard Vinaigrette</p>
              <p class="text_content"><strong>Salmon	$15.95</strong><br/>
                  5 oz. Seared Salmon, Spring Mix, Feta, Candied Walnut, Strawberry, Pickled Onion, Poppy Seed Dressing</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Menu;
