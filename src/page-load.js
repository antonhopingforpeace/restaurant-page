export const loadPage = () =>{

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "ANTONIADES PIZZA HOUSE";

    const restaurantImage = document.createElement('img');
    restaurantImage.src = "../images/pizza-house.jpeg";
    restaurantImage.alt = "Image of a man holding a pizza";

    const restaurantParagraph = document.createElement("p");
    restaurantParagraph.textContent ="This is the pizza restaurant in Dali. Actually, my pizza is the best in the whole island. If you are ever hungry and you want to enjoy an excellent pepperoni pizza or a magnificent greek delight, this is the place. Call the restaurant at +20999999 or come visit us and enjoy a spectacular or romantic night with your beloved at this magic place. Address: 13, Agias Marias street, Kalithea."

    const restaurantFirstPage = document.getElementById("content");

    restaurantFirstPage.appendChild(restaurantName);
    restaurantFirstPage.appendChild(restaurantImage);
    restaurantFirstPage.appendChild(restaurantParagraph);
};