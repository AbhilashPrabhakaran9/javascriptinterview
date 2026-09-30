class Learn {

    //class's properties
    //let chapterone = 5; //Attribute with value assigned

    constructor(name) //Constructor with parameter- a kind of special function
    {
        this.name=name;
    }

    display() //function
    {
        console.log(this.name);
    }

}

const town = new Learn("Metro");//Object creation
//Eppom oru object create cheythu (town).town ennu paranja valuevineyaanu this.name ennu 
// parayumbol avida store cheyunnathu. Enni avidae store cheyaan oru value venam. constructor
//ennu paranja special built in function oru name enna parameter-nae expect cheyunundu.so new
//classname Learn-il parenthesis-il double quotes-il value kodukkanam.Object create cheyumbol 
// nammalkku nammudae constructor-ntae insdie parameters undenkil athrem number of parameters-nae
//nammal krithyamayi mark cheythirikkanam. Here new Learn() ennu brackets ittirikkukayaanu, 
//means const town = new Learn() enu kaanumbol here interpreter thirayunnathu new Learn() ennu
//directly koduthittae ullu, so classintae constructor-il poyi nokkam, avidae aayirikkum 
// undayirikuka. Nisar parayunnu functionname(parameter value) koduthallalae name-lekku value 
//varuka ullu ennu, Ethinnu pakaram aanu nammal object create cheyunnathu means new Lear("value")
//ennu kodukkunathu.

console.log(town.name); //Output printed as Metro
town.display(); //Output printed as Metro

