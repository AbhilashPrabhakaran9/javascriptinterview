//CLOSURE example
function outer() {
    let c=0;

    function inner(){
        c=c+1;
        return c;
    }

    return inner; //For closure - No parenthesis required here
}

let result= outer();
console.log(result());
console.log(result());
console.log(result());

//Notes- 
//return inner; //For closure - No parenthesis required here

//return inner → returns the function/reference to the function

//return inner() → executes the function and returns its result.

//let result= outer(); why no new keyword in this step? Because outer 
// is being used as a normal function, not as a constructor.

//Very important JS cocept:console.log(result); Give me the function itself.
//console.log(result()); Execute the function and give me its returned value
//This distinction between function reference [inner] and function call is 
//extremely important for JavaScript interviews.

/*
| Code                    | Meaning                                   |
| ----------------------- | ----------------------------------------- |
| `result`                | The **function/reference itself**         |
| `result()`              | **Execute the function**                  |
| `console.log(result)`   | Display the function/reference            |
| `console.log(result())` | Execute it and display its returned value |
*/

//========================================================
//HOISTING Example
//add(3,4) function add(a,b) {  return a+b; }

//=======================================================
//Function scope example:-
/*"function getCount(array1){
    let flag=false;
    let s=0;
    if(array1.contains(""w"")){
        s=s+1;
    }
    if(s>0){
        flag=true;
        console.log(""w exists"");
    }
    return s;
}"*/

//========================================================
//Block scope example:-
/*"let age=20;
if(age>18){
    let flag=true;
    console.log(""Eligible"");
}"*/

//=====================================================
//Call Back example
/*function A() {
    console.log("Inside function A");
}

function B (callback) ---A
{
    callback() --- A() call -- Accessing of function A
    console.log("callback to function A succeded");
}

B(A)*/

//=======================================================
//PROMISE example:-
/*let variable = new Promise((resolve,reject)=>{
    //Writing the context here
    let success= true
    if(success){
        resolve("Operation succeded");
    }

    else{
        reject("Operation failed");
    }
});*/

//===========================================================
/*Promise example [Using Data]
let filereadresult = new Promise((resolve,reject)=>{
    //statement to retrieve data from a file

    let data //retrieved data saved
    if(data.isNotEmpty()){
        resolve("Retrieved successfully");
    }

    else{
        reject("Unable to retrieve")
    }
});*/

//========================================================

//ASYNC AWAIT
/*Normal program-
function compare(a,b) {
    if(a>b){
        return true
    }
    else{
        return false
    }
}

Async Await program-
async compare(a,b){
    if(a>b){
        await console.log("Greater");
        return true;
    }
    else{
        await console.log("Not greater");
        return false;
    }
}*/

//Error handling example:
function divide(x,y) {
    try //Action to be executed
    {
        if(y===0){
            throw new Error ("Numbers are not divisible by zero") //throw new Error is a format
        }
        return x/y;
    }
    catch(message) //Executes only if error is caught
    {
        console.log(message);
    }

    finally //Executes if error is caught or error is not caught
    {
        console.log("Action is being performed");
    }
}
divide(4,5);
divide(7,0);









