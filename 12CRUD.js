/*The 11CRUD.js file in much inconvenient  */


const express=require('express');
const app=express();

//import function
const {
    getstudents,
    createStudents,
    getstudentDetails,
    updateStudent,
    deleteStudent
}=require('./controlers/student.controler')


//When the data is comming form user the data is treated as JSON formate, thats why we need
app.use(express.json());

//Middleware 
//get functon
app.get('/',getstudents);

//Now we create a post funcyion 
/*inside the postman set get request to post resuest - go to body then select json formate the click send  */
app.post('/',createStudents);

//Particularlly view only one student information
app.get('/:id',getstudentDetails);

/*update: so we have to recive a id , using that id we can chaange the information ,there are two function
1)put()-> its means the whole data is replace when the data is comming
2)patch()-> its means only updated data is replace not the whole object*/

app.patch('/:id',updateStudent);

/*Delete a data from database (json). we have to recive a id which we want to delete */
app.delete('/:id',deleteStudent);


app.listen(8080,()=>{
    console.log("Listening on port number 8080!");
})


/*it is also inconvinent because every time we have to call filename and path, in that case it is difficult to
manage every file . To overcome this, it means to hendel the router using routes
So, create a folder, name-routes and inside this folder create another file, name student.routes.js. Now
we import the express for this routes  */