export class Hero {
    private name:string;
    private power:number;
    private life:number;
    Weapon! : Weapon;

    constructor(_name:string, _power:number, _life:number) {
        this.name = _name;
        this.power = _power;
        this.life = _life;
    }

    attack(opponent:Hero){
        opponent.life -= this.power;   
    }
    
    isAlive(){
       return this.life > 0;
    }

    getName(): string {
        return this.name
    }
    
    setName(nouveauNom : string) {
        this.name = nouveauNom;
    }
    
    getPower(): number {
        return this.power
    }
    
    setPower(nouveauPower : string) {
        this.name = nouveauPower;
    }
    
    getLife(): number {
        return this.life
    }
    setLife(nouvelleLife : number) {
        this.life = nouvelleLife;
    }
}

let hercule:Hero = new Hero("hercule", 19, 300)
let johnsson:Hero = new Hero("johnsson", 19, 200)


hercule.attack(johnsson)
johnsson.attack(hercule)

export class Weapon {
    name: string;
    constructor(_name:string) {
        this.name = _name;
}
}