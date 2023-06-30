import { HeroSpear } from "./class-HeroSpear";
import { Hero } from "./index";
import { HeroAxe } from "./class-HeroAxe";
import { HeroSword } from "./class-HeroSword";

export class Weapon {
    name: string;
    damage: number
    constructor(_name:string, _damage:number) {
        this.name = _name;
        this.damage = _damage;

}
}