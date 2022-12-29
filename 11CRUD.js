const express=require('express');
const app=express();

//import readData and writeData form utils directory
const{readData,writeData}=require('./utils/db.utils.js');

//When the data is comming form user the data is treated as JSON formate, thats why we need
app.use(express.json());

//Middleware 
//get functon
app.get('/',async(req,res)=>{
    try{
        const students=await readData();
        return res.status(200).send(students);

    }
    catch(err){
        return res.status(500).send({
            error:err
        })
    }
});

app.listen(8080,()=>{
    console.log("Listening on port number 8080!");
})
