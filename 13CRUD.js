const express=require('express')
const app=express();

//now import the studentRouter
const studentRouter=require('./routes/student.routes');

//middleware
app.use(express.json());

app.use('/api/student',studentRouter);

app.listen(8080,()=>{
    console.log('Listening on port 8080!');
});