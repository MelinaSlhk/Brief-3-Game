import { Hero } from "./index";
import { HeroSword } from "./class-HeroSword";
import { Weapon } from "./class-Weapon";

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


