let num=10;
let counter = 0;
// function definition of plus()function...
   function plus()
  {
      counter++;
      return counter;
  };

  // created myCounter function..
function myCounter() 
  {
    let counter = 0;
    for (let i=0;i<num;i++)
     return plus();  //it will return value of counter to myCounter() function...
   }
 
  // calling myCounter function for num times...
  for (i=0;i<num;i++)
    console.log(myCounter());