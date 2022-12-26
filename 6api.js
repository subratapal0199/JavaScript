//node project
//axis: Promise based HTTP client for the browser and node.js

const axios=require('axios');

 /*const p=axios.get('https://rickandmortyapi.com/api/character/2');    
// console.log(p);     //output : promise <pending>
p.then((result)=>console.log(result.data));    */



/*
//another way to write (without using any variable)
axios.get('https://rickandmortyapi.com/api/character/2')
.then((res)=>{
    console.log('Character name:',res.data.name);
    console.log('Location:',res.data.location);
    console.log('Location url: ',res.data.location.url);
    return axios.get(res.data.location.url);
})
.then((res)=>console.log('Location name: ',res.data.name));  */



//to get the data in asynchronous way
const getdata = async ()=>{
    const data1= await axios.get('https://rickandmortyapi.com/api/character/2');
    console.log('Character name:',data1.data.name);
    console.log('Location:',data1.data.location);
    console.log('Location url: ',data1.data.location.url);
    const data2=await axios.get(data1.data.location.url);
    console.log('Location name: ',data2.data.name);
}
getdata();

//to get all data for rick and morty qoutes api
const getdata1=async()=>{
    const data2=await axios.get('https://rickandmortyapi.com/api/character');
    console.log(data2.data.results);
}
getdata1();





console.log('Ater Promise')


