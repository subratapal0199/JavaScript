//file system
const { pbkdf2 } = require('crypto');
const fs=require('fs');

/*fs.readFile('f1.txt','utf-8',(err,data)=>{
    console.log('--Reading from f1 file--');
    if(err){
        console.log('error f1',err.message);
    }else{
        console.log(data);
        fs.readFile('f2.txt','utf-8',(err,data)=>{
            console.log('--Reading from f2 file--');
            if(err){
                console.log('error f2',err.message);
            }else{
                console.log(data);
            }
        });
    }
});*/
//using promise function
const p= new Promise((resolve,reject)=>{
    fs.readFile('f1.txt','utf-8',(err,data)=>{
        console.log('--Reading from f1 file--');
        if(err){
            reject('error f1',err.message);
        }else{
            resolve(data);
        }
        });
});
// p.then((result)=>{
//     console.log(result);
// }).catch(err=>console.log(err))


// read file f2 using promise
const p1= new Promise((resolve,reject)=>{
    fs.readFile('f2.txt','utf-8',(err,data)=>{
        console.log('--Reading from f2 file--');
        if(err){
            reject('error f2',err.message);
        }else{
            resolve(data);
        }
        });
});

//Async/awit
// async function fun(){
    //norml function
// } 
const readMyFile=async()=>{
    try{
        console.log("--reading from f1--");
        const f1data=await p;
        console.log(f1data);
        console.log("--reading from f2--");
        const f2data=await p1;
        console.log(f2data);
    }
    catch(err)
    {
        console.log(err);
    }

}
readMyFile();

// p.then((resutl)=>{
//     console.log(resutl);
//     return p1;
    
// })
// .then((resutl)=>console.log(resutl))
// .catch(err=>console.log(err))



