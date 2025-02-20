"use strict";
class Person {
    // name is a private member variable
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Yaksh Parikh");
console.log(person.getName());
