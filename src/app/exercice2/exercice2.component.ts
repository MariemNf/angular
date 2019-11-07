import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training1-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  name: string;
  profession: string;
  description: string;

  constructor() {
  }

  ngOnInit() {
    this.name = 'Foulen ben foulen';
    this.profession = 'Doctor';
    this.description = 'Dentist';
  }

}
