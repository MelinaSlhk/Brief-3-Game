// import { HeroSword } from "./class-HeroSword";
// import { Weapon } from "./class-Weapon";
// import { HeroAxe } from "./class-HeroAxe";
// import { HeroSpear } from "./class-HeroSpear";

export class Weapon {
    name: string;
    damage: number
    constructor(_name:string, _damage:number) {
        this.name = _name;
        this.damage = _damage;

}
}

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

export class HeroAxe extends Hero {
        constructor(_name:string, _power:number, _life:number) {
        super(_name, _life, _power);
this.Weapon = new Weapon("Axe", 50);
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {  //instanceof : test si mon element à gauche est bien de la classe à droite de "instanceof"
            opponent.setLife(opponent.getLife() - this.getPower() *2);
        }
        else {
            super.attack(opponent); 
        }
    }
}

export class HeroSpear extends Hero {
        constructor(_name:string, _power:number, _life:number) {
        super(_name, _life, _power);
this.Weapon = new Weapon("Spear",50);
    }

attack(opponent: Hero): void {
        if (opponent instanceof HeroAxe) {  //instanceof : test si mon element à gauche est bien de la classe à droite de "instanceof"
            if(this.Weapon){
            opponent.setLife(opponent.getLife() - this.getPower() *2 - this.Weapon.damage);
        }
    }else {
            super.attack(opponent); 
        }
    }
    }

    
export class HeroSword extends Hero {
    static life(life: any) {
        throw new Error("Method not implemented.");
    }
        constructor(_name:string, _power:number, _life:number) {
        super(_name, _life, _power);
this.Weapon = new Weapon("Sword",50);
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSpear) {  //instanceof : test si mon element à gauche est bien de la classe à droite de "instanceof"
            opponent.setLife(opponent.getLife() - this.getPower() *2)
        }
        else {
            super.attack(opponent); 
        }
    }
    }
    
    
let hercule:Hero = new Hero("hercule", 19, 300)
let johnsson:Hero = new Hero("johnsson", 19, 200)


hercule.attack(johnsson)
johnsson.attack(hercule)

// let heroAxe: HeroAxe = new HeroAxe("Hercule", 19, 300);
// let heroSpear: HeroSpear = new HeroSpear("johnsson", 19, 300);
// let heroSword: HeroSword = new HeroSword("Arthur", 19, 300);
let bondJamesBond = new HeroAxe("Bond", 125, 250);
let chuckNorris = new HeroSpear("Chuck", 50000, 1000);
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

