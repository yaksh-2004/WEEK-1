function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
// calling a curry function named sum..
console.log("Sum of given numbers is:"+ sum(3)(5)(4));