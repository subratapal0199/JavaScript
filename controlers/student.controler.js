//import readData and writeData form utils directory
const{readData,writeData}=require('../utils/db.utils');

//get all the students
/*await: The await operator is used to wait for a promise and gets its fulfillment value.It can be used inside an 
async function or the top level of a module, for example, await expression */
const getstudents=async(req,res)=>{
    try{
        const students=await readData();
        return res.status(200).send(students);

    }catch(err){
        return res.status(500).send({
            error:err
        })
    }
}

const createStudents=async(req,res)=>{
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
}

//get a particullarlly student details
const getstudentDetails=async(req,res)=>{
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
}

//update a particularlly student
const updateStudent=async(req,res)=>{
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
}

//delete a student
const deleteStudent=async(req,res)=>{
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
}

//export all the function
module.exports={
    getstudents,
    createStudents,
    getstudentDetails,
    updateStudent,
    deleteStudent
}
