"use strict";
function add(num1, num2, ...rest) {
    return num1 + num2 + rest.reduce((p, c) => p + c, 0);
}
console.log(add(1, 2, 5, 1, 1));
