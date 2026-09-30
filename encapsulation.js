class Atmmachine {

    #balance = 150000; //Variable [Made private]
    
    constructor(amount) //Constructor
    {
        this.amount = amount;
    }

    deposit() //Function [Removed #]
    {
        return (this.#balance+this.amount); //[Added # with balance]
    }

    getbalance() //Function
    {
        let total = this.deposit(); //Internally called private deposit function
        //console.log(total); //Ethu enable cheythal 2 thavana getbalance-nae call cheyum
        //console.log(total) inside getbalance function and this.getbalance() inside 
        // newbalance function.
        return total;
    }

    newbalance() //Jibin's added steps
    {
        let newamount = 6000;
        let newbalanceamount = newamount + this.getbalance();
        console.log( newbalanceamount);
    }




}

const atm  = new Atmmachine(5000); //Object creation
atm.getbalance();
atm.newbalance();