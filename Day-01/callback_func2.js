function func1(param){
    //printing value of sum..
    console.log("sum is:"+sum);
}

function func2(num1,func)
{
    let num2=330;
     sum=num2+num1;
    //passing sum as a argument to func1..
    func1(sum);

} 
//here f1 is a callback function...
func2(100,func1);