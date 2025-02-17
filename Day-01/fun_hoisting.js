// calling function before defining it known as Hoisting..
let val = myFunction(5);
console.log(val);

function myFunction(num) {
  return num * num;
}