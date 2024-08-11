export const loadContactPage = () =>{

    const contactPageTitle = document.createElement("h1");
    contactPageTitle.textContent = "CONTACTS";

    const contactList = document.createElement("ul");

    const firstContact = document.createElement("li");

    const firstContactTitle = document.createElement("h2");
    firstContactTitle.textContent = "Antonio Antoniades";

    const firstContactDetails = document.createElement("ul");

    const firstContactDetailsTitle = document.createElement("li");
    firstContactDetailsTitle.textContent = "Waiter";
    firstContactDetails.appendChild(firstContactDetailsTitle);

    const firstContactDetailsNumber = document.createElement("li");
    firstContactDetailsNumber.textContent = "69-6065-7873";
    firstContactDetails.appendChild(firstContactDetailsNumber);

    const firstContactDetailsWorkingHours = document.createElement("li");
    firstContactDetailsWorkingHours.textContent = " 10:00 - 20:00";
    firstContactDetails.appendChild(firstContactDetailsWorkingHours);

    firstContact.appendChild(firstContactTitle);
    firstContact.appendChild(firstContactDetails);

    contactList.appendChild(firstContact);

    const secondContact = document.createElement("li");

    const secondContactTitle = document.createElement("h2");
    secondContactTitle.textContent = "Photos Antoniades";

    const secondContactDetails = document.createElement("ul");

    const secondContactDetailsTitle = document.createElement("li");
    secondContactDetailsTitle.textContent = "Manager";
    secondContactDetails.appendChild(secondContactDetailsTitle);

    const secondContactDetailsNumber = document.createElement("li");
    secondContactDetailsNumber.textContent = "69-8287-9095";
    secondContactDetails.appendChild(secondContactDetailsNumber);

    const secondContactDetailsWorkingHours = document.createElement("li");
    secondContactDetailsWorkingHours.textContent = " 14:00 - 24:00";
    secondContactDetails.appendChild(secondContactDetailsWorkingHours);

    secondContact.appendChild(secondContactTitle);
    secondContact.appendChild(secondContactDetails);

    contactList.appendChild(secondContact);

    const thirdContact = document.createElement("li");

    const thirdContactTitle = document.createElement("h2");
    thirdContactTitle.textContent = "Astrid Antoniades";

    const thirdContactDetails = document.createElement("ul");

    const thirdContactDetailsTitle = document.createElement("li");
    thirdContactDetailsTitle.textContent = "Chef";
    thirdContactDetails.appendChild(thirdContactDetailsTitle);

    const thirdContactDetailsNumber = document.createElement("li");
    thirdContactDetailsNumber.textContent = "69-1010-2020";
    thirdContactDetails.appendChild(thirdContactDetailsNumber);

    const thirdContactDetailsWorkingHours = document.createElement("li");
    thirdContactDetailsWorkingHours.textContent = " 16:00 - 24:00";
    thirdContactDetails.appendChild(thirdContactDetailsWorkingHours);

    thirdContact.appendChild(thirdContactTitle);
    thirdContact.appendChild(thirdContactDetails);

    contactList.appendChild(thirdContact);

    const restaurantFirstPage = document.getElementById("content");
    restaurantFirstPage.appendChild(contactPageTitle);
    restaurantFirstPage.appendChild(contactList);
}