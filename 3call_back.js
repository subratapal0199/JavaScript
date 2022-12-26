//why call back is need in asynchronous process in java script?
let a;
function getdata1()
{
    return "My function";               //asynchronous process
}
a=getdata1();
console.log(a);

//Asynchronous problems
/*The output is undefined because setTime'out is an Asynchronous process and the synchronous process
can't wait for the Asynchronous program that means 'a' variable need only the immedate value. In this
case we can overcome this problem using call back . So, thats why we need call back to overcome 
asynchronous problems.*/   
let b;
function getdata2()
{
    setTimeout(()=>
    {
        return "This is my asyncronous function";
    },2000);
}
b=getdata2();
console.log(b);

//to overcome the previous problem using call back
let c;
function getdata3()
{
    setTimeout(()=>
    {
        printdata("This is my asyncronous function1");
    },2000);
}
c=getdata3();
console.log(c);

function printdata(data)
{
    console.log(data);
}

//another way write
function getdata4(cb)
{
    setTimeout(()=>
    {
        cb("This is my asyncronous function2");
    },2000);
}
getdata4(printdata1);

function printdata1(data)
{
    console.log(data);
}

//Problems of call back
/* If the dependency increse problems arise suppose we have student data--(dependent on)-->course data--
(dependent on)-->exam data.*/

function loadStudent(id,cb)
{
    console.log("----fetching data for id---",id);
    //suppose there are lots of data here 
    const courseID='MCAN101';
    cb(courseID);
}
function loadCoures(id)
{
    console.log("----fetching data for course----",id);
}
loadStudent(1010,loadCoures);