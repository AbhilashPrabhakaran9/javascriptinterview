function createJson() {
    try{
        //let data = JSON.parse("{id:01}");
        //console.log(x);

        const school = '{"Name":"ABHI","Location":"Kochi"}';
        const data = JSON.parse(school);
        console.log(data.Name);
    }

    catch(err){
        if(err instanceof SyntaxError) //SyntaxError, TypeError are built in error exceptions
            {
                console.log("Syntax error occured");
        }

        else if(err instanceof ReferenceError)
            {
            console.log("Reference error occured");
        }
    }
}

createJson();

