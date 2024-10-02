import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

export interface Person{
  name:string,
  surname:string,
  age:number
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  addPerson(person: Person){
    this.people.push(person)
  }

  people:Person[] = [];
  constructor() {
    this.people.push({
      name:"Juan A.",
      surname:"García Gómez",
      age:47
    });
    this.people.push({
      name:"Alejandro.",
      surname:"García Gómez",
      age:46
    });

    this.people.push({
      name:"Juan",
      surname:"García Valencia",
      age:5
    });

    this.people.push({
      name:"María del Mar",
      surname:"Valencia Valencia",
      age:47
    });
  }



}
