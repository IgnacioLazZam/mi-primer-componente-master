import { Injectable } from '@angular/core';
import { Person, PersonCard } from 'src/app/home/home.page';
import { Crud } from '../interfaces/crud';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Crud<Person>{

  private _id:number = 1;
  private _people:BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([])
  private people$:Observable<Person[]> = this._people.asObservable()

  private people:PersonCard[] = []
  constructor() { }

  add(element: PersonCard) {
    try {
      element.id = (this._id++).toString();
      let people:Person[] = this._people.getValue()
      this.people.push(element)
      this._people.next(people)
      return element;
    } catch (error) {
      return null
    }
    
  }

  remove(element: PersonCard) {
    try {
      let idx = this.people.findIndex(person => person.id==element.id);
      let people:Person[] = this._people.getValue()
    let person = this.people[idx];
    people.splice(idx,1)
    this._people.next(people)
    return person
    } catch (error) {
      return null
    }
    
  }

  update(element: PersonCard) {
    try {
    let people:Person[] = this._people.getValue()
    let idx = this.people.findIndex(person => person.id==element.id);
    let person = this.people[idx];
    this.people[idx] = element;
    this._people.next(people)
    return person
    } catch (error) {
      return null
    }
  }

  getAll(): PersonCard[] {
    return this.people;
  }

  get(id: string):Person | null {
    let index = this._people.getValue().findIndex(p => p.id)
    return this._people.getValue()[index]
  }

  getObservable(){
    return this.people$;
  }
}
