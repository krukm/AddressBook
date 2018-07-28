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
        this.contacts.push(inputs[0].value, inputs[1].value, inputs[2].value, selectedValue);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        for(let i = 0; i < this.contacts.length; i++) {
            if(this.contacts[i].name === name) {
                this.contacts.splice(i, 1);
            }
        }
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

const addressBook = new AddressBook();