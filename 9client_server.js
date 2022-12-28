//Built-in modules system=>core system
const fs = require('fs');
const crypto=require('crypto');
const http=require('http');

//create a server using http(HyperText transfer protocal)
const server=http.createServer((req,res)=>{
    res.write("Hello world from subrata and Merray christmas");
    res.end();
});
server.listen(8080,()=>{
    console.log("Server is listening for port 8080");
});