function multiply(...args)
{
  let mul=1;
  for (let arg of args)
  {
      mul = arg*mul;
  }
  return mul;
}

let ans = multiply(4,6,7);
console.log("multiplication of given numbers is:"+ ans);


