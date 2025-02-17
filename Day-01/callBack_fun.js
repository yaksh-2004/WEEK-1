function myDisplayer(something)
{
    //printing value of sum...
    console.log(something);
}

function myCalculator(num1,num2,myCallback)
{
    let sum=num1+num2;
    myCallback(sum);
}

//here myDisplayer is a callback function...
myCalculator(5,4,myDisplayer);
