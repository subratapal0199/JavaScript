/*
JavaScript modules allow you to break up your code into separate files.This makes it easier to maintain the code-base.
JavaScript modules rely on the import and export statements.
You can export a function or variable from any file.
*/
//in-line individually
console.log("Hello from 7modules_export.js");

const getCircleArea=r=>3.1416*r*r;
//now we can export it into another file
console.log(getCircleArea(4));

const PI=3.1416;

module.exports.getCircleArea=getCircleArea;
module.exports.PI=PI;

//Another way we can exports 

module.exports.getcirarea=r=>3.1416*r*r;
module.exports.Pi=3.1416;

console.log(module.exports);

module.exports.message={
    name:"Subrata",
    age : 23
    }

