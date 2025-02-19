let numbers: number[] = [1, 2, 3]
numbers.push(4);
console.log(numbers);
let hasTwo = numbers.includes(2) // returns true
console.log(hasTwo);
let hasFour= numbers.includes(4);// returns true
console.log(hasFour);
let number1: number[] = [2, 1, 4, 3]
number1.sort((a, b) => a - b)
console.log(number1);