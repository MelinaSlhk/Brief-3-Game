import { HeroSword } from "./class-HeroSword";
import { Hero } from "./index";
import { Weapon } from "./index";

export class HeroAxe extends Hero {
        constructor(_name:string, _power:number, _life:number) {
        super(_name, _life, _power);
this.Weapon = new Weapon("Axe");
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {  //instanceof : test si mon element à gauche est bien de la classe à droite de "instanceof"
            opponent.setLife(opponent.getLife() - this.getPower() *2)
        }
        else {
            super.attack(opponent); 
        }
    }
}
let heroAxe: HeroAxe = new HeroAxe("Hercule", 19, 300);

