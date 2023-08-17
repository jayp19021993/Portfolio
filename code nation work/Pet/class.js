class Pet{
    constructor(name, hunger,thirst,energy){
        this.name = name 
        this.hunger = 50 
        this.thirst = 50
        this.energy = 50
        
    } 
    
    eat() {
        this.hunger += 15;
        this.energy += 10;
        this.thirst -= 5;    
    }

    drink() {
        this.hunger += 15;
        this.energy += 10;
        this.thirst += 5;
    }    

    play() {
        this.hunger += 15;
        this.energy += 10;
        this.thirst += 5;   
    }

    time(){
        this.hunger +=10 
        this.thirst +=10
        this.energy +=10
    }
} 


export class rabbit extends pet{

    constructr(name){
        super(name) 

    }
}

export class cat extends pet{

    constructr(name){
        super(name) 

    }
} 

export class dog extends pet{

    constructr(name){
        super(name) 

    }
}