function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 3, 5];
  
  //this will print 9...
  console.log(sum(...numbers));

// ------------------------------------------------------------------------------------------------------------------------------------------------

  const array = [7, 2, 6];
  const obj = { ...array };
  console.log(obj);

//only test will create a property on the new object..
  const obj2= { ...true, ..."test", ...10 };
  console.log(obj2);