const fs=require('fs');  // mandatory for read, write, create and update

//function(read for read data )
module.exports.readData=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./db/db.students.json','utf-8',(err,data)=>{
            if(err) reject(err);
            else resolve(JSON.parse(data));
        })
    });
}

//write file function(for write)
module.exports.writeData=({data})=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile('./db/db.students.json'),JSON.stringify(data),(err)=>{
            if(err) reject(err);
            else resolve('Success');
        }
    });
}