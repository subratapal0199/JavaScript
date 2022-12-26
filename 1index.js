console.log("Hello world")
// Function : There are three types to decleared function.
//Function Declaration, Function Expression, Arrow Function


function sayhello()
{
    console.log("Hello karan!");
}
sayhello();


//Normal function
function sayhi(a,b)
    {
        let c;
        c=a+b;
        console.log(c);
        console.log(a+b);
        return c;
    }
let ans=sayhi(10,12);
console.log(ans);

//another way to write function in java script
let add=function(a,b)
    {
        let c;
        c=a+b;
        console.log("Another way :")
        console.log(c);
        console.log(a+b);
        return c;
    }
let an=add(10,50);
console.log(an);

//Arrow function in java script 
let myfunction=(a,b)=>
{
    let c;
    c=a+b;
    console.log("Arrow function:");
    console.log(c);
    console.log(a+b);
    return (a+b);
}
let arr=myfunction(20,20);
console.log(arr);

//we can write arrow function in one line if the declaration part one
let anotherfunction=(a,b)=>console.log(a+b);
anotherfunction(40,60);

//return function , we can write in this way
console.log("anoter way: ");
let anotherfunction2=(a,b)=> a+b;
let ok=anotherfunction2(30,80);
console.log(ok);

//Square
console.log("Square: ")
let squre=a=>a*a;
let sq=squre(6);
console.log(sq);


