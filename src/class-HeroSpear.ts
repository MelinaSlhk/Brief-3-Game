import { HeroAxe } from "./class-HeroAxe";
import { HeroSword } from "./class-HeroSword";
import { Hero } from "./index";
import { Weapon } from "./class-Weapon";

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
    
