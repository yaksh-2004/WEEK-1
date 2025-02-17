function myFunction()
{
    //creating an instance of a Date class..
    let d = new Date();

    //this will print time after every 2 seconds..
    console.log(d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds());
}
//calling a setInterval function..
setInterval(myFunction,2000);