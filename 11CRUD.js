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

//update date : so we have to recive a id , using that id we can chaange the information ,there are two function
//1)put() 2)patch()
/* put()-> its means the whole data is replace when the data is comming
patch()-> its means only updated data is replace not the whole object*/

app.patch('/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const students=await readData();
        const newstudent=students.map(item=>{
        if(item.id===id)
        return{
            ...item,
            ...req.body,
        }
        return item;
    })
    const student=newstudent.filter(item=>item.id===id)[0];
    let result=null;
    if(student) result=await writeData({data:newstudent});
    if(result) return res.status(200).send({
        message:"Student updated successfully",
        data:student
    });
    return res.status(404).send("**********No Data Found*************");
    }catch(err){
        return res.status(500).send({
            error: err
        })
    }
});

/*Delete a data from database (json). we have to recive a id which we want to delete */
app.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const students=await readData();
        const student=students.filter(item=>item.id===id)[0];
        const newstudent=students.filter(item=>item.id!==id);
        let result=null;
        if(student) result=await writeData({data:newstudent});
        if(result) return res.status(200).send({
            message: "Student deleted successfully"
        });
        return res.status(404).send("----------No Data Found--------");

    }catch(err){
        return res.status(500).send({
            error: err
        })
    }
})

app.listen(8080,()=>{
    console.log("Listening on port number 8080!");
});
