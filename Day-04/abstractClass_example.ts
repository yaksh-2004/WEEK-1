abstract class Animal {
    constructor(public name: string) { }

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

//makeSound is a abstract method so we have to implement in both Dog class and Cat class... 
class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Woof!`);
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

const dog = new Dog('Tommy');
const cat = new Cat('Jerry');

dog.makeSound();
//we havn't defined move method in Dog class so it will use method of Animal class..
dog.move();

cat.makeSound();
//we havn't defined move method in Cat class so it will use method of Animal class..
cat.move();     
