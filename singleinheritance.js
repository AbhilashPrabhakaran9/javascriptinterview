class Studentdetails {

    constructor(name) {
        this.name=name;
    }

    display() {
        console.log(this.name);
    }

    getdetails() {
        return (this.name);
    }
}

class Faculty extends Studentdetails {

    constructor(name){
        super(name);//this keyword polae use cheyavunna keyword annu super
        this.name=name;
    }

    display(){
        console.log("Science");
        console.log(20000);
        console.log("Students name is " + this.name);
    }
}

let student = new Faculty("Aben");
student.display();



