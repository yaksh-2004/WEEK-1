let games = ["cricket", "football", "chess"];

console.log(1 in games);
console.log(4 in games);


//creating a car object...
const car = { make: "Honda", model: "Accord", year: 1998 };

//this will print true...
console.log("make" in car);

delete car.make;

if ("make" in car === false) {
  car.make = "Suzuki";
}

//this will print Suzuki...
console.log(car.make);