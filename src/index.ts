import { HeroSword } from "./class-HeroSword";
import { Weapon } from "./class-Weapon";
import { HeroAxe } from "./class-HeroAxe";
import { HeroSpear } from "./class-HeroSpear";

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

    attack(opponent:Hero): void {
        if (this.Weapon) {
            opponent.life -= this.power + this.Weapon.damage;       
        }else{
          opponent.life -= this.power;  
        }
    }
    
    isAlive(): boolean{
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

// let heroAxe: HeroAxe = new HeroAxe("Hercule", 19, 300);
// let heroSpear: HeroSpear = new HeroSpear("johnsson", 19, 300);
// let heroSword: HeroSword = new HeroSword("Arthur", 19, 300);
let bondJamesBond = new Hero("Bond", 125, 250);
let chuckNorris = new Hero("Chuck", 50000, 1000);
let i = 1;
while (bondJamesBond.isAlive() && chuckNorris.isAlive()) {
    console.log("round", i);
    bondJamesBond.attack(chuckNorris);
    chuckNorris.attack(bondJamesBond);
i++;
}

if (!bondJamesBond.isAlive() && !chuckNorris.isAlive()) {
    console.log("It's a draw !!!! (noob)");
}
else if (bondJamesBond.isAlive()){
    console.log(`${bondJamesBond.getName()} a défonsé l'autre`);
    }
    else {
       console.log(`${chuckNorris.getName()} a défonsé l'autre`); 
    }

