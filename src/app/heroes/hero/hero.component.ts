import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   name: string = 'Iroman';
   age: number = 45;

   get capitilizedName(): string {
    return this.name.toUpperCase();
   }

   getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
   }

   changeHero(): void {

      this.name = 'Spiderman';
   }

   changeAge(): void {
      this.age = 39;
   }

   resetFomr(): void {
    this.name = 'Iroman';
    this.age = 45;
   }
}
