//Built-in modules system=>core system
const fs = require('fs');
const crypto=require('crypto');
const http=require('http');
/*
//create a server using http(HyperText transfer protocal)
const server=http.createServer((req,res)=>{
    //res.write("Hello world from subrata and Merray christmas!");
    //res.end();
    //another way
    if(req.url==='/' && req.method==='GET'){
        res.write("\nHello world from if statement");
        res.end();
    }
    //Write something in another page
    if(req.url==='/students' && req.method==='GET'){
        res.write("Student List");
        res.end();
    }
    if(req.url==='/students/onestudents' && req.method==='GET'){
        res.write("Only one student List");
        res.end();
    }
});
//if we run this code we have to provide a port number so that usnig this port number we can run our code in the 
//browser "http://localhost:8080",for example. But at first we have to run the code in the terminal
server.listen(8080,()=>{
    console.log("Server is listening for port 8080");
});

function createServer(){
    return http.createServer((req,res)=>{
            if(req.url==='/' && req.method==='GET'){
            res.write("\nHello world from if statement");
            res.end();
        }
            if(req.url==='/students' && req.method==='GET'){
            res.write("Students List");
            res.end();
        }
            if(req.url==='/students/onestudents' && req.method==='GET'){
            res.write("Only one student List");
            res.end();
        }

    });
}
*/
//ANOTHER WAY
//To create a objects
const routes={
    '/':{
        type:'application/json',
        content:{
            message:"Advance Happy New Year",
        }
    },
    '/student':{
        type:'application/json',
        content:{
            message:'Student bio data',
        }
    }
}

function createServer(){
    return http.createServer((req1,res1)=>{
        const response=routes[req1.url];
        if(!response){
            res1.write('Invalid Request');
            res1.end();
            return
        }
        res1.writeHead(200,{'content-type':response.type});
        res1.write(JSON.stringify(response.content));
        res1.end();
    });
}

const server =createServer();
server.listen(8080,()=>{
    console.log("Server is listening for port 8080")
});

/*If we create using this tecnique it is not suitable for website as well as for the the user because user ca
can't understand */