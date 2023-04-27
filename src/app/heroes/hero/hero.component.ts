import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  // IMPORTANTE: los getter tambien se ven como propiedades
  get capitalizedName() : string
  {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string
  {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero() : void
  {
    //TODO:
    this.name = 'Spiderman';
  }

  changeAge() : void
  {
    this.age = 20;
  }

  resetForm() : void
  {
    this.name = 'ironman';
    this.age = 45;
  }

}
