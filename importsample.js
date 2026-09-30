import getdata from './readdata.js'
function readdetails(name,age){
    getdata(name);
    getdata(age);
}
readdetails("Abhi",39); //type: module means ESmodule inside package.json