import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="sumar(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="sumar(-1)">-1</button>

  `
})

export class CounterComponent {
  constructor() { }

  initCounter = 10;
  counter = this.initCounter;

  sumar(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = this.initCounter;
  }
}
