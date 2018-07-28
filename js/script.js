"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    print() {
        for(let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
    add() {
        const inputs = document.querySelectorAll("input[type='text']");
        const spinner = document.getElementById("relation");
        const selectedValue = spinner.options[spinner.selectedIndex].text;
        this.contacts.push(new Contact(inputs[0].value, inputs[1].value, inputs[2].value, selectedValue));
        this.display();
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        this.display();
    }
    display() {
        document.getElementById("form").reset();
        this.clear();

        for (let contact of this.contacts) {
            const card = document.createElement("section");
            const name = document.createElement("p");
            const email = document.createElement("p");
            const phone = document.createElement("p");
            const relation = document.createElement("p");

            addCardStyling(card);

            name.textContent = `Name: ${contact.name}`;
            email.textContent = `Email: ${contact.email}`;
            phone.textContent = `Phone: ${contact.phone}`;
            relation.textContent = `Relation: ${contact.relation}`;
            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(phone);
            card.appendChild(relation);

            document.querySelector(".card_holder").appendChild(card);
        }
    }
    clear() {
        document.querySelector(".card_holder").innerHTML = "";
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

function addCardStyling (cardContent) {
    cardContent.style.margin = "3em";
    cardContent.style.padding = "1em";
    cardContent.style.boxSizing = "border-box";
    cardContent.style.backgroundColor = "rgba(255,255,255,0.8)"
    cardContent.style.borderRadius = "5px";
    cardContent.style.flexBasis = "26%";
}

const addressBook = new AddressBook();