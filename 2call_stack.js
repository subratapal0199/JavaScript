//java script code run using call stack 
//call stack->work->LIFO(Last in first out)             calstack
 function sayhi()                                       //sayhi()
 {
    sayhello();                                         //sayhello
 }
 function sayhello()
 {
    console.log("Hi! I'm sayhello function");           //console.log()
 }
 sayhi();

 //another way
 function f1() 
 {
    console.log('Hi by f1!');
 }
    
 function f2() 
 {
    f1();
    console.log('Hi by f2!');
 }
    
 f2();    

 //call back function
 function myfunction1()
 {
    console.log("I'm Subrata");
 }
 function myfunction2(cb)
 {
    console.log(cb);
 }
 myfunction2(myfunction1);

 //another approch
 function myfunction1(name)
 {
    console.log(name, "I'm Subrata");
 }
 function myfunction2(cb)
 {
    cb("Subrata");
 }
 myfunction2(myfunction1);


 //Synchronous and Asynchronous in JavaScript
 /*
 Synchronous: synchronous means to be in a sequence, i.e. every statement of the code gets 
 executed one by one.
 */
 console.log("HI");
 console.log("Hello");              
 console.log("What's up?");

 /*Asynchronous: Asynchronous code allows the program to be executed immediately where the synchronous 
 code will block further execution of the remaining code until it finishes the current one*/
 const run=()=>
 {
    console.log("I'm run");
 }
 console.log("Hi");
 //set time
 setTimeout(run,2000);
 console.log("Hello");

 //another test
 const anoter=()=>
 {
    console.log("Hi");
 }
 //set time
 setTimeout(anoter,2000);
 console.log("lets see what happens.");

 console.log("End");
 
//another process
console.log("Another process");
//set time 
setTimeout(()=>{
   console.log("ok lets see what happens");
},2000);
console.log("Endddddddddd")