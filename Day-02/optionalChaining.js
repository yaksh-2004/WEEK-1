const user = {
    person: {
        name: "Yaksh"
    }
};

console.log(user.person?.name); //Yaksh
console.log(user.func?.name); //undefined
console.log(user.func.name); //error
