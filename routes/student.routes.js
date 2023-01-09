/*Now we import the express for this routes 

const express=require('express')
const {Router}=express();           // under the express we have a function name {Router}
const studentRouter=Router();       //call the router function

This can be write in another way means that we can write easy way(those three line)
So, we can write like this
*/
const studentRouter=require('express').Router();  /*when we call a require it means that it return an express object
and under that object Router is present in the express object. Thats why we donot need to call those three function 
differntly */

//Now import all the controler function
const{
    getstudents,
    createStudents,
    getstudentDetails,
    updateStudent,
    deleteStudent
}=require('../controlers/student.controler');
//create a routes
studentRouter.route('/')
.get(getstudents)
.post(createStudents)

studentRouter.route('/:id')
.get(getstudentDetails)
.patch(updateStudent)
.put(updateStudent)
.delete(deleteStudent)

//we have export all the function/router so that we can use it in another file(13CRUD.js)
module.exports=studentRouter;

