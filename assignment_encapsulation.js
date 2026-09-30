//This program codes are incomplete, this code file for my knowledge.

class restaurant {
    #price;
    #food;

    constructor(food,price){
        this.#food=food;
        this.#price=price;
    }

    preparefood(){
        return "\nThe order received is "+this.#food+" (price of Rs: "+this.#price+")";
    }

    deliverfood(){
        console.log(this.preparefood()+" will be delivered in 15 minutes\n"); //\n: a new line character
    }
}

//class Zomato extends restaurant {
    //Here class restaurant-ilae food, price variables access cheyaan pattilla because its private.
    //preparefood and deliverfood functions accessible aayirikkum, Ethinnu vendiyyanu encapsulation 
    //enna concept use/implement cheyunnathu so that private info nammaludaeyidathu hidden
    //aayi erikkanam. So ennikku class Zomato-yil deliverfood() call cheythittu athuvazhi order
    //details access cheyaam.

    //deliverfood() //Inside Zomato class-il deliverfood() access cheyaan object-ilottu assign cheyanda,
    //directly deliver food call cheyaam.
   // {
        //super.deliverfood();
        //Here evidae food, price kodukkan pattilaa inside function bracket as parameters because 
        // nammal constructor-nae create cheythittilla, also deliverfood() and preparefood parameterised
        //aayitulla functions alla. So Zomato classil [child class] koodi usage ennikku widen cheyanamenkil
        //ethinnae okke parameterised aakiyathinnu shesham super. ennu vilikkam. 
        
        
    //}
//}

order1= new restaurant("Chicken Biriyani", 150);
order1.deliverfood();