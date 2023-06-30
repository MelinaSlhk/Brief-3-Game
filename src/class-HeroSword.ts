import { HeroSpear } from "./class-HeroSpear";
import { Hero } from "./index";
import { Weapon } from "./class-Weapon";

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
    
    