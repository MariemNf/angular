import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training1-exercice1',
  template: `
    <h1> Exercice 1 </h1>

    <div [style.background-color]="color" class="pb-2">
      Change My background color !
      <br />
      My default color is <strong><i> {{ defaultColor }} </i></strong>
      My color is <strong><i> {{ color }} </i></strong>
    </div>

    <div>
      <label for="inputColor" class="mb-0">Enter color : </label>
      <!--<input type="text" id="t" class="form-control my-3 col-3" (keyup)="changeColor(colorFromInput.value)" #colorFromInput/>-->
      <input [(ngModel)]="color" type="text" id="inputColor" class="form-control my-3 col-3"/>
      <button class="btn btn-primary"(click)="resetColor()">Reset Background color</button>
    </div>
  `,
  styles: []
})
export class Exercice1Component implements OnInit {

  defaultColor = 'white';
  color: string;
  constructor() {
    this.color = this.defaultColor;
  }

  ngOnInit() {
  }

  changeColor(colorValue) {
    this.color = colorValue;
  }

  resetColor() {
    this.color = this.defaultColor;
  }

}
