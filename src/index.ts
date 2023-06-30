class Hero {
    private name:string;
    private power:number;
    private life:number;

    constructor(_name:string, _power:number, _life:number) {
        this.name = _name;
        this.power = _power;
        this.life = _life;
    }

    attack(opponent:Hero){
        opponent._life -= this.power;   
    }
    
    isAlive(){
       return this.life > 0;
    }

    get _name(): string {
        return this.name
    }
    
    set _name(nouveauNom : string) {
        this.name = nouveauNom;
    }
    
    get _power(): number {
        return this.power
    }
    
    set _power(nouveauPower : string) {
        this.name = nouveauPower;
    }
    
    get _life(): number {
        return this.life
    }
    set _life(nouvelleLife : number) {
        this.life = nouvelleLife;
    }
}

let hercule:Hero = new Hero("hercule", 19, 300)
let johnsson:Hero = new Hero("johnsson", 19, 200)


hercule.attack(johnsson)
johnsson.attack(hercule)
