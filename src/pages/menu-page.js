export const loadMenuPage = () => {

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "MENU";

    const restaurantFoods = document.createElement("ul");

    const pizza = document.createElement("li");
    const pizzaTitle = document.createElement("h2");
    pizzaTitle.textContent = "GREEK DELIGHT PIZZA";
    const pizzaContent = document.createElement("p");
    pizzaContent.textContent = "The best pizza that exists. The best ingredients and made with love by the Antoniades family.";
    pizza.appendChild(pizzaTitle);
    pizza.appendChild(pizzaContent);

    const shepherdsPie = document.createElement("li");
    const shepherdsPieTitle = document.createElement("h2");
    shepherdsPieTitle.textContent = "MAMA'S SHEPHERD'S PIE";
    const shepherdsPieContent = document.createElement("p");
    shepherdsPieContent.textContent = "Made with love, this dish has all the ingredients that you need. Means meat, halloumi and mashed potato. With these lovely and tastefule ingredients, life is perfect just like this dish.";
    shepherdsPie.appendChild(shepherdsPieTitle);
    shepherdsPie.appendChild(shepherdsPieContent);

    const blackEyedBeans = document.createElement("li");
    const blackEyedBeansTitle = document.createElement("h2");
    blackEyedBeansTitle.textContent = "FATHER'S BLACK EYED BEANS";
    const blackEyedBeansContent = document.createElement("p");
    blackEyedBeansContent.textContent = "An Antoniade's special. This meal has everything you need in order to fulfill your dream of having a summer body. Combined with tuna and the right amount of onion, this plate is delicious.";
    blackEyedBeans.appendChild(blackEyedBeansTitle);
    blackEyedBeans.appendChild(blackEyedBeansContent);

    restaurantFoods.appendChild(pizza);
    restaurantFoods.appendChild(shepherdsPie);
    restaurantFoods.appendChild(blackEyedBeans);

    const restaurantFirstPage = document.getElementById("content");
    restaurantFirstPage.appendChild(menuTitle);
    restaurantFirstPage.appendChild(restaurantFoods);
}