const express=require('express');
const app=express();

//import readData and writeData form utils directory
const{readData,writeData}=require('./utils/db.utils.js');

//When the data is comming form user the data is treated as JSON formate, thats why we need
app.use(express.json());

//Middleware 
//get functon
/*await: The await operator is used to wait for a promise and gets its fulfillment value.It can be used inside an 
async function or the top level of a module, for example, await expression */
app.get('/',async(req,res)=>{
    try{
        const students=await readData();
        return res.status(200).send(students);

    }catch(err){
        return res.status(500).send({
            error:err
        })
    }
});

//Now we create a post funcyion 
/*inside the postman set get request to post resuest
- go to body then select json formate the click send  */
app.post('/',async(req,res)=>{
    //at first we read the date from the database
    //console.log(req.body); //check
    try{
        const students=await readData();
        students.push(req.body);
        const result=await writeData({ data:students});
        if(result === 'success'){
            return res.status(201).send({
                message:'Student created Sucecssfully',
                data:req.body
            });
        }
    }catch(err){
        return res.status(500).send({
            error:err
        });
    }
});

//Particularlly view only one student information
app.get('/:id',async(req,res)=>{
    const id = req.params.id;
    try {
        const all_Stds = await readData();
        const student = all_Stds.filter((item) => item.id === id)[0];
        console.log(student);
        if (student) return res.status(200).send(student);
        return res.status(404).send('--------No Data Found---------');
    } catch (err) {
        return res.status(500).send({
            error: err
        });
    }
});



app.listen(8080,()=>{
    console.log("Listening on port number 8080!");
});
