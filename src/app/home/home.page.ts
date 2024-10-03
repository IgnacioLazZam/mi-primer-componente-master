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
    console.log("id:"+person.id)
  }

  onFavIsClicked(id:number){
    this.peopleService.changeFav(id)
  }

  onDeleteIsClicked(id:number){
    let confirmation = confirm("Are you sure you want to delete the card?");
    if (confirmation){
      let person:PersonCard | null= this.peopleService.get(id.toString())
      this.peopleService.remove(person!!)
    }
    
  }


}
