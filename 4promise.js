/*Promise => Pending, resolve, reject.
The promise object represents the eventual completion of failure of an asynchronous operation and 
its resulting value.
Pending=> initial state, neither Fulfilled nor rejected.
Fulfilled /resolve=> meaning that the operation was completed successfully.
Rejected=> meaning that the operation failed.*/
console.log("Normal way:")
let p = new Promise((resolve,reject)=>{
    resolve("Expected Data");
});
console.log(p);

//using asynchronous way
console.log("Asynchronous ways:")
let q = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Expected Data1");                //this case also problem arise
    },2000);
    
});
console.log(q);

//resolve value always solve using 'then' function
console.log("Resolve ways:")
let pp = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Expected Data as we can see");                
    },2000);
    
});
pp.then((result)=>{
    console.log(result);
})

console.log("After promise");

// now we see the reject function
let pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("unable......."));                
    },2000);
    
});
pro.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

//for another perpose
