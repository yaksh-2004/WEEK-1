let var_1 = 'hello';
//console.log(((var_1 as unknown) as number).length); //Property 'length' does not exist on type 'number'.

let var_2: unknown = 'Yaksh Parikh';

console.log((var_2 as string).length);

//it is same like as..
let var_3: unknown = 'hello';
console.log((<string>var_3).length);