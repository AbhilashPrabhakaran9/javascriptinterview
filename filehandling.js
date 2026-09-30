//const fs = require('fs'); //For importing fs module
import fs from 'fs'

fs.readFile('output.txt','utf8',(err, data)=>{
    //UTF-8 conerts data into readable format; (err, data)

    if(err){
        console.log(err);
        return; //Stop the execution if there is an error

    }

    //console.log(data.length);
    console.log(data);

   

fs.writeFile('output.txt','playwright test passed',(err) =>{
    if(err){
        console.log(err);
        return;
    }

    console.log("File written successfully");
});

 });
