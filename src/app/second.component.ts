import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sofrecom-second',
  template: `
<!--    <p>
      second with inline CSS and template works!
    </p>-->
    <label for="color">Couleur :</label>
    <input type="text" id="color" class="form-control" [(ngModel)]="myFavoriteColor"/><br />
    <button class="btn btn-primary" (click)="sendEventWithData()">Apply Son background color</button>
  `,
  styles: []
})
export class SecondComponent implements OnInit {

  @Input() myColor = 'white';
  @Output() sendDataToFather = new EventEmitter();
  myFavoriteColor: string;

  constructor() { }

  ngOnInit() {
  }

  sendEventWithData() {
    this.sendDataToFather.emit(
      this.myFavoriteColor
    );
  }

}
