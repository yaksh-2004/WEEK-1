function greet(name: string): void {
    console.log(`Hello, ${name}`);
}
greet("Yaksh");


//-------------------------------------Greet Function with unknown Type-------------------------------------------------------------

function greet_2(name: unknown): void {
    if (typeof name === "string") {
        console.log(`Hello, ${name}!`);
    } else if (name === null) {
        console.log("Hello, guest!");
    } else {
        console.log("Hello, there!");
    }
}


greet_2("Yaksh"); 
greet_2(null);           
greet_2(4);             
