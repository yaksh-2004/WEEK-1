let arrTuple: [number, number, string, string] = [] as unknown as [number, number, string, string];   
arrTuple[0] = 501;
arrTuple[1] = 506;
arrTuple[2] = "hello";
arrTuple[3] = "world";
console.log(arrTuple);
arrTuple.push(2, "INDIA"); 
console.log(arrTuple);
