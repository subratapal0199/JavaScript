/*You can import modules into a file in two ways, based on if they are named exports or default exports.
Named exports are constructed using curly braces. Default exports are not.*/
const circle=require('./7modules_export');
console.log(circle);

const a=circle.getCircleArea(24);
console.log(a);

//another way we can import
const {getcirarea,Pi,}=require('./7modules_export');
console.log(getcirarea(5));


//Asign a object into another object
const obj={
    name1:'Subrata',
    age:24,
    city:'Kolkata'
}
//aisgn into another object
const newobj=obj; // or we can asign another way
const {age,name1,city}=obj;  // destructturing

//export file 
const ok=require('./7modules_export');
console.log(ok.message.name); 

