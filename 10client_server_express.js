/*To overcome 9client_server.js we use frame that is express to made  this using http.
express is a framework. first we have install express using: npm install express
*/
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello India form subrata!");
});

app.get('/students',(req,res)=>{
    res.send("Student List!");
});

app.get('/students/onestudents',(req,res)=>{
    res.send("Only one student");
});
app.listen(8080,()=>{
    console.log("Listening on port 8080!");
});