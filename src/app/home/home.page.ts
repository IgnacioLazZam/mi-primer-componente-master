import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PeopleService } from '../share/services/people.service';

export interface Person{
  id:string;
  name:string,
  surname:string,
  age:number
}

export interface PersonCard extends Person{
  
  isFav:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  
 people:PersonCard[] = [];

  constructor(public peopleService:PeopleService) {
    
  }
  
  addPerson(person: PersonCard){
    this.peopleService.add(person)
  }

  onFavIsClicked(isFav:boolean, id:number){
    this.people[id].isFav = !isFav;
  }

  onDeleteIsClicked(id:number){
    let confirmation = confirm("Are you sure you want to delete the card?");
    if (confirmation){
      this.people.splice(id,1)
    }
    
  }


}
